import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Nav/Navbar";
import Login from "./Routes/Auth/Login";
import HomePage from "./Routes/Home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
