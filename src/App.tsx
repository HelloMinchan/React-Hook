import React, { useState, createContext } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Usestate from "./pages/Usestate";
import Useeffect from "./pages/Useeffect";
import Usecontext from "./pages/Usecontext";
import Usereducer from "./pages/Usereducer";
import Usememo from "./pages/Usememo";
import NotFound from "./pages/NotFound";

type contextStore = {
  token: string | undefined;
  contextValue1: number;
  contextValue2: number;
  contextEmail: string;
  contextPassword: string;
};

// context API 생성
export const ContextStore = createContext<contextStore | undefined>(undefined);

function App() {
  const [token, setToken] = useState("나는초기token값이다!");
  const [contextValue1, setContextValue1] = useState(0);
  const [contextValue2, setContextValue2] = useState(0);
  const [contextEmail, setContextEmail] = useState("정민찬@정민찬.com");
  const [contextPassword, setContextPassword] = useState("thisispassword123");

  return (
    <Router>
      {/* header 레이아웃 */}
      <header>
        <h2>메뉴</h2>
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

        <Link to="/usememo">
          <button>useMemo</button>
        </Link>
      </header>
      <hr />

      {/* main 레이아웃 */}
      <main>
        <ContextStore.Provider
          value={{
            token,
            contextValue1,
            contextValue2,
            contextEmail,
            contextPassword,
          }}
        >
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
                  setContextEmail={setContextEmail}
                  setContextPassword={setContextPassword}
                />
              )}
            />
            {/* useMemo 라우터 */}
            <Route path="/usememo" component={Usememo} />

            {/* 404 페이지 라우터 */}
            <Route component={NotFound} />
          </Switch>
        </ContextStore.Provider>
      </main>

      {/* footer 레이아웃 */}
      <footer>
        <hr />
        <h1>context Email : {contextEmail}</h1>
        <h1>context Password : {contextPassword}</h1>
        <h1>context Token : {token}</h1>
        <hr />
      </footer>
    </Router>
  );
}

export default App;
