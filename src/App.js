import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Services from "./components/Services/Services";
import Description from "./components/Description/Description";
import Space from "./components/Space/Space";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Navbar />
            <Space />
            <Search />
            <Services />
            <Space />
          </Route>
          <Route exact path="/service">
            <Navbar />
            <Space />
            <Description />
            <Space />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
