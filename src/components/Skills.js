import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Skills.css";


function Skills() {
    const [skills, Skills] = useState([]);

    useEffect(()=>{
        axios.get('./skills.json')
        .then(response => {
            console.log(response)
            Skills(response.data);
        })
        .catch(err => {
            console.log("Error");
        })
    
}, [])

    return (  
        <ul className='skills'>
            {
            skills.map(s => (
                <li key={s.id}>
                   <a href='https://www.google.com'><img className='skillImage' src = {s.image} alt={s.name} width="100"/></a>
                </li>
            ))}            
             </ul>      
    )
 }

export default Skills