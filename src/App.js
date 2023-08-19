import { useState } from 'react';
import './App.css';
import Collector from './components/Collector';
import Home from './components/Home';
// import Education from './components/Education';

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className = "font-[squadaone]">
      <Home />
      {/* <Education /> */}
      <Collector projects = {projects} setProjects = {setProjects}/>
    </div>
  );
}

export default App;
