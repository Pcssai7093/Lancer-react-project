import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Search from "./components/Search/Search";
import Services from "./components/Services/Services";
import Description from "./components/Description/Description";
import Space from "./components/Space/Space";
import { useEffect, useState } from "react";
import modeContext from "./components/modeContext";
import { fontSize } from "@mui/system";
// import { AdminHome } from "./components/Admin/admin";
// import Postform from "./components/PostPage/Postform/Postform";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  const [color, setColor] = useState(true);
  const [elem, setElem] = useState(document.body);

  function handleMode() {
    setColor(!color);
    // console.log(color);
    console.log(elem);
    if (color == true && elem != undefined)
      elem.style.backgroundColor = "black";
    else elem.style.backgroundColor = "white";
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <modeContext.Provider value={color}>
            <Route exact path="/"></Route>
            <Route exact path="/admin">
              {/* <AdminHome /> */}
            </Route>
            <Route exact path="/post">
              {/* <Postform /> */}
            </Route>
            <Route exact path="/wishlist">
              <Navbar />
              <Space />

              <Wishlist />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <Space />
              <Search />
              <Space />
              <Space />
              <Space />
            </Route>
            <Route exact path="/service/:id">
              <Navbar />
              <Space />
              <Description />
              <Space />
            </Route>
            <Route path="/:any"></Route>
          </modeContext.Provider>
        </Switch>
        <button className="mode" onClick={handleMode}>
          {color ? (
            <p style={{ fontSize: "20px" }}>🌙</p>
          ) : (
            <p style={{ fontSize: "20px" }}>🌞</p>
          )}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
