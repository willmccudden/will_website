import HomePage from './Components/HomePage/HomePage';
import ProjectLog from './Components/ProjectLog/ProjectLog';
import Footer from './Components/HomePage/Footer'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App (){
  return (
    <div>
    <Routes>
      <HashRouter path = "/" element = {<HomePage/>}/>
      <HashRouter path = "/projectlog" element = {<ProjectLog/>}/>
    </Routes>
    <Footer/>
    </div>
  )

}

export default App;
