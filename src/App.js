import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    <main className="App">
      <Switch>
        <Route exact path="/" component={Signup}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
      {/* <Signup />
      <Login /> */}
    </main>
    </Router>
  );
}

export default App;
