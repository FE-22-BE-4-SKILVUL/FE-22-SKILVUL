import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./assets/page/Home";
import { About } from "./assets/page/About";
import { Register } from "./assets/page/Register";
import { Login } from "./assets/page/Login";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Register} path="/register" />
          <Route component={Login} path="/login" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
