import React, { useEffect } from "react";
import { useMyList } from "../../context/MyListContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../context/MoviesContextProvider";

const MyList = () => {
  const { readCart, cartData, delCart } = useMyList();
  const navigate = useNavigate();
  useEffect(() => {
    readCart();
  }, []);
  return (
    <div
      style={{
        background: "#141a1f",
        padding: "40px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {cartData.map((el) => (
        <>
          <div className="card">
            <img src={el.image} alt="moviesIMG" />
            <div className="card--btns">
              <button
                className="card--btns--del"
                onClick={() => delCart(el.id)}
              >
                <DeleteIcon />
              </button>
              <button
                className="card--btns--play"
                onClick={() => navigate(`/player/${el.id}`)}
              >
                <PlayCircleIcon />
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyList;
