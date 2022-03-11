import Home from "./Components/Home"
import Aboutme from "./Components/Aboutme"
import Projects from "./Components/Projects"
import Contact  from"./Components/Contact"
import Navbar from "./Components/Navbar"
import Turnon from "./Components/Turnon"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/*" element = {<Navbar/>}/>
      </Routes>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/aboutme" element = {<Aboutme/>}/>
      <Route path="/projects" element = {<Projects/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/projects/1" element = {<Turnon/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
