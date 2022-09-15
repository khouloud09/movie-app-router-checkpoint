import React,{useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Description from './components/Description';
function App() {
  const [searchTerm, setSearchTerm] = useState("")
    return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm}/>} />
        <Route path="/description/:title" element={<Description/>} />
      </Routes>
      
    </div>
  );
}

export default App;
