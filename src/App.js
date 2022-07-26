//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import {Link} from "react-router-dom"
  //import Header from './Header';
import Upload from './Upload';
import StudentLogin from './StudentLogin';
import Yearselect from './Yearselect';
import Studentstat from './Studentstat';
import Resetpass from './Resetpass';
import Forgotpass from './Forgotpass';
import Studentlist from './Studentlist';
import Facultyform from './Facultyform';
import FsView from './FsView';
function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/StudentLogin' element={<StudentLogin/>}/>
          <Route path='/FsView' element={<FsView/>}/>
          <Route path='/Resetpass' element={<Resetpass/>}/>
          <Route path='/Forgotpass' element={<Forgotpass/>}/>
          <Route path='/YearSelect' element={<Yearselect/>}/>
          <Route path='/Studentstat' element={<Studentstat/>}/>
          <Route path='/Facultyform' element={<Facultyform/>}/>
          <Route path='/Studentlist' element={<Studentlist/>}/>
          <Route path='/Upload' element={<Upload/>}/>
        </Routes>
      </Router>   
    </>
  )
}
export default App;