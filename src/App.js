//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Switch,Route} from "react-router-dom"
//import Header from './Header';
import StudentLogin from './StudentLogin';
function App() {
  return (
    <>
      <switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/StudentLogin" component={StudentLogin} />
      </switch>
    </>
  )
}

export default App;