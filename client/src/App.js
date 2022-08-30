import "./App.css";
import { Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./components/Landingpage/Landingpage";
import { Home } from "./components/Home/Home";
import { Bar } from "./components/Bar/Bar";
import { CardDetail } from "./components/CardDetail/CardDetail";
import { CreateVideoGame } from "./components/CreateVideoGame/CreateVideoGame";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App" data-testid="App">
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
      <div className="Footer">
        <Route path={"/"}>
          <Footer />
        </Route>
      </div>
    </>
  );
}

export default App;
