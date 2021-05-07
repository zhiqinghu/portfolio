import React from "react";
import Media from "react-media";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Anchor from "./components/Anchor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Context1 from "./pages/Context1";
import Context2 from "./pages/Context2";
import Context3 from "./pages/Context3";
import Context4 from "./pages/Context4";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/portfolio">
        <Navbar />

        <Switch>
          <Route
            render={(routeProps) => <Portfolio {...routeProps} />}
            exact
            path="/"
          ></Route>
          <Route
            render={(routeProps) => <AboutMe {...routeProps} />}
            exact
            path="/about_me"
          ></Route>
          <Route
            render={(routeProps) => <Context1 {...routeProps} />}
            exact
            path="/continuous-space"
          ></Route>
          <Route
            render={(routeProps) => <Context2 {...routeProps} />}
            exact
            path="/culture-community"
          ></Route>
          <Route
            render={(routeProps) => <Context3 {...routeProps} />}
            exact
            path="/why-in-person"
          ></Route>
          <Route
            render={(routeProps) => <Context4 {...routeProps} />}
            exact
            path="/office-space"
          ></Route>
          <Route render={(routeProps) => <NotFound {...routeProps} />}></Route>
        </Switch>
      </HashRouter>

      <Footer />
      <Media query="(min-width:770px)" render={() => <Anchor />} />
    </div>
  );
}

export default App;
