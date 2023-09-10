import { useState } from 'react';
import './App.css';
import Collector from './components/Collector';
import Home from './components/Home';
import Education from './components/Education';

function App() {
  
  const [projects, setProjects] = useState([]);
  const [edVisible, setVisible] = useState(false);

  return (
    <div className = "font-[squadaone]">
      <Home setVisible={setVisible} />
      <Education setVisible={setVisible} visibility={edVisible} />
      <Collector projects = {projects} setProjects = {setProjects} />
    </div>
  );
}

export default App;
