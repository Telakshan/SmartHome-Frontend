import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import RegisterAndLogin from "./Pages/RegisterAndLogin/RegisterAndLogin";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Pages/Shop/Shop";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={RegisterAndLogin} />
        <Route exact path="/shop" component={Shop} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
