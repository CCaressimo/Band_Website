import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// components
import Nav from "../src/Components/Nav/Nav.js";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={"/"}></Route>
        <Route exact path={"/home"}></Route>
        <Route exact path={"/media"}></Route>
        <Route exact path={"/tour"}></Route>
        <Route exact path={"/about"}></Route>
        <Route exact path={"/chris"}></Route>
        <Route exact path={"/brian"}></Route>
        <Route exact path={"/marvin"}></Route>
      </Switch>
    </div>
  );
};

export default App;
