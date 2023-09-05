import "./App.scss";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
