import React, { useState, createContext } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Usestate from "./pages/Usestate";
import Useeffect from "./pages/Useeffect";
import Usecontext from "./pages/Usecontext";
import Usereducer from "./pages/Usereducer";
import NotFound from "./pages/NotFound";

type contextStore = {
  token: string | undefined;
  contextValue1: number;
  contextValue2: number;
};

// context API 생성
export const ContextStore = createContext<contextStore | undefined>(undefined);

function App() {
  const [token, setToken] = useState("나는초기token값이다!");
  const [contextValue1, setContextValue1] = useState(0);
  const [contextValue2, setContextValue2] = useState(0);

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

        <Link to="/usereducer">
          <button>useReducer</button>
        </Link>
      </header>
      <hr />

      {/* main 레이아웃 */}
      <main>
        <ContextStore.Provider value={{ token, contextValue1, contextValue2 }}>
          <Switch>
            {/* 홈 라우터 */}
            <Route exact path="/" component={Home} />
            {/* useState 라우터 */}
            <Route path="/usestate" component={Usestate} />
            {/* useEffect 라우터 */}
            <Route path="/useeffect" component={Useeffect} />
            {/* useContext 라우터 */}
            <Route
              path="/usecontext"
              render={() => <Usecontext setToken={setToken} />}
            />
            {/* useReducer 라우터 */}
            <Route
              path="/usereducer"
              render={() => (
                <Usereducer
                  setContextValue1={setContextValue1}
                  setContextValue2={setContextValue2}
                />
              )}
            />

            {/* 404 페이지 라우터 */}
            <Route component={NotFound} />
          </Switch>
        </ContextStore.Provider>
      </main>

      {/* footer 레이아웃 */}
      <footer></footer>
    </Router>
  );
}

export default App;
