//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
//import {Link} from "react-router-dom"
//import Header from './Header';
import StudentLogin from './StudentLogin';
import Yearselect from './Yearselect';
import Studentstat from './Studentstat'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/StudentLogin' element={<StudentLogin/>}/>
          <Route path='/YearSelect' element={<Yearselect/>}/>
          <Route path='/Studentstat' element={<Studentstat/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;