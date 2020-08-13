import React, { useState, createContext } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Usestate from "./pages/Usestate";
import Useeffect from "./pages/Useeffect";
import Usecontext from "./pages/Usecontext";
import NotFound from "./pages/NotFound";

export const ContextStore = createContext<undefined | string>(undefined);

function App() {
  const [token, setToken] = useState("나는초기token값이다!");

  return (
    <Router>
      {/* header 레이아웃 */}
      <header>
        <h1>{token}</h1>
        <Link to="/">
          <button>home</button>
        </Link>

        <Link to="/usestate">
          <button>useState</button>
        </Link>

        <Link to="/useeffect">
          <button>useEffect</button>
        </Link>

        <Link to="/usecontext">
          <button>useContext</button>
        </Link>
      </header>
      <hr />

      {/* main 레이아웃 */}
      <main>
        <Switch>
          <ContextStore.Provider value={token}>
            <Route exact path="/" component={Home} />
            <Route path="/usestate" component={Usestate} />
            <Route path="/useeffect" component={Useeffect} />
            <Route
              path="/usecontext"
              render={() => <Usecontext setToken={setToken} />}
            />
          </ContextStore.Provider>

          <Route component={NotFound} />
        </Switch>
      </main>

      {/* footer 레이아웃 */}
      <footer></footer>
    </Router>
  );
}

export default App;
