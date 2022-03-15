import Home from "./Components/Home"
import Aboutme from "./Components/Aboutme"
import Projects from "./Components/Projects"
import Contact  from"./Components/Contact"
import Navbar from "./Components/Navbar"
import Turnon from "./Components/Projects/Turnon"
import Dogui from "./Components/Projects/Dogui"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Cripto from "./Components/Projects/Cripto"
import Buscador from "./Components/Projects/Buscador"

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
      <Route path="/projects/2" element = {<Dogui/>} />
      <Route path="/projects/3" element = {<Cripto/>} />
      <Route path="/projects/4" element = {<Buscador/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
