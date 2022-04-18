import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Nav from "./nav/Nav";

function App() {
    return (
        <div className="App">
            <Nav/>
            <div>
                <Routes>
                    <Route path="/portfolio" element={<Navigate replace to="/about"/>}/>
                    <Route path="/about" element={<Main/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
