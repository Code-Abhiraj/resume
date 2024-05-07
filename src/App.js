
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import {Skills}   from "./components/Skills";
import {Project}  from "./components/Project";
import {ProjectCard} from "./components/ProjectCard";
import {Contact}  from "./components/Contact";
import {Footer}  from "./components/Footer";
function App() {
  return (
    <div className="App">
      
      <Banner />
      <NavBar/>
      <Skills/>
      <Project/>
      <ProjectCard/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;