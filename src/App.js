import { useState } from 'react';
import './App.css';
import Collector from './components/Collector';
//import Home from './components/Home';

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className = "font-[squadaone]">
      <Collector projects = {projects} setProjects = {setProjects}/>
    </div>
  );
}

export default App;
