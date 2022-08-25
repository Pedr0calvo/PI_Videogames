import "./App.css";
import { Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Landingpage } from "./components/Landingpage";
import { Home } from "./components/Home";
import { Bar } from "./components/Bar";
import { CardDetail } from "./components/CardDetail";
import { CreateVideoGame } from "./components/CreateVideoGame";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Route exact path={"/"}>
          <Landingpage />
        </Route>
        <Route exact path={"/home"}>
          <Bar />
          <Navbar />
          <Home />
        </Route>
        <Route exact path={"/home/:id"}>
          <CardDetail />
        </Route>
        <Route exact path={"/create"}>
          <CreateVideoGame />
        </Route>
      </div>
    </>
  );
}

export default App;
