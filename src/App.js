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
import { AdminHome } from "./components/Admin/admin";
import Postform from "./components/PostPage/Postform/Postform";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import Wishlist from "./components/Wishlist/Wishlist";
import LoginPage from "./components/Signin/LoginPage";
import SignUp from "./components/Signup/SignUp";
import Navbar1 from "./components/Landinpage/Navbar";
import Hero from "./components/Landinpage/Hero";
import Analytics from "./components/Landinpage/Analytics";
import Newsletter from "./components/Landinpage/Newsletter";
import Cards from "./components/Landinpage/Cards";
import Footer from "./components/Landinpage/Footer";
import { Admin } from "./components/Admin";

function App() {
  const [color, setColor] = useState(false);
  const [elem, setElem] = useState(document.body);

  useEffect(() => {
    elem.style.backgroundColor = "black";
  }, []);
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
            <Route exact path="/">
              <Navbar1 />
              <Hero />
              <Analytics />
              <Newsletter />
              <Cards />
              <Footer />
            </Route>
            <Route exact path="/profile/:uid">
              <Navbar />
            </Route>
            <Route exact path="/signin">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/post/:uid">
              <Navbar />
              <Space />
              <Space />
              <Postform />
            </Route>
            <Route exact path="/navbar/:uid">
              {/* <Postform /> */}
              <Navbar />
            </Route>
            <Route exact path="/wishlist/:uid">
              <Navbar />
              <Space />
              <Wishlist />
            </Route>
            <Route exact path="/home/:uid">
              <Navbar />
              <Space />
              <Search />
              <Space />
              <Space />
              <Space />
            </Route>
            <Route exact path="/service/:uid/:pid">
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
            <p style={{ fontSize: "20px" }}>????</p>
          ) : (
            <p style={{ fontSize: "20px" }}>????</p>
          )}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
