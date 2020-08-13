import React from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Usestate from "./pages/Usestate";
import Useeffect from "./pages/Useeffect";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* header 레이아웃 */}
      <header>
        <Link to="/">
          <button>home</button>
        </Link>

        <Link to="/usestate">
          <button>useState</button>
        </Link>

        <Link to="/useeffect">
          <button>useEffect</button>
        </Link>
      </header>
      <hr />
      {/* main 레이아웃 */}
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/usestate" component={Usestate} />
          <Route path="/useeffect" component={Useeffect} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
