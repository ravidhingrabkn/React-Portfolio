import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Projects.css";



function Projects() {
    const [projects, Projects] = useState([]);

    useEffect(()=>{
        axios.get('./projects.json')
        .then(response => {
            console.log(response)
            Projects(response.data);
        })
        .catch(err => {
            console.log("Error");
        })
    
}, [])

    return (  
        <div className='projectContainer'>
            {
            projects.map(p => (
                <div key={p.id} className="projects">
                    
                    <div className='projectImage'>
                         <img src = {p.image} alt={p.title} width="300"/>
                    </div>
                    <div>
                        <h3>{p.title}</h3>
                        <p>{p.content}</p>
                        <a href='{p.url}'>{p.url}</a>
                    </div>
                    
                </div>
            ))}            
            </div>    
    )
 }

export default Projects