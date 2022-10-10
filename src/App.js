import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Services from "./components/Services/Services";
import Description from "./components/Description/Description";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Navbar />
            <Search />
            <Services />
          </Route>
          <Route exact path="/service">
            <Navbar />
            <Description />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
