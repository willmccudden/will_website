import HomePage from './Components/HomePage/HomePage';
import ProjectLog from './Components/ProjectLog/ProjectLog';
import Footer from './Components/HomePage/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App (){
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/projectlog" element = {<ProjectLog/>}/>
    </Routes>
    <Footer/>
    </div>
  )

}

export default App;
