// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Login from './page/Login.jsx';
import Alumnos from './page/Alumnos.jsx';
import LoginAlumno from './page/LoginAlumno.jsx';



const App = () => {
  return(
    <div className='w-full flex px-4 py-6'>
        
    <Router>
  
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/profes" element = {<Home/>}/>
    <Route path="/alumnos" element = {<Alumnos/>}/>
    <Route path = "/enterAlumno" element = {<LoginAlumno/>}/>
  </Routes>

</Router>
    
    </div>

  
  )
};

export default App;
