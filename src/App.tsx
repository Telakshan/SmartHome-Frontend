import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import RegisterAndLogin from './Pages/RegisterAndLogin/RegisterAndLogin';
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/login' component={RegisterAndLogin}/>
      </Switch>

    </div>
  );
}


export default App;
