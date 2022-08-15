import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./Socials.css";


function Socials() {
    const [socials, Socials] = useState([]);

    useEffect(()=>{
        axios.get('./socials.json')
        .then(response => {
            console.log(response)
            Socials(response.data);
        })
        .catch(err => {
            console.log("Error");
        })
    
}, []);

    return (  
        <ul className='socials'>
            {
            socials.map(s => (
                <li key={s.id}>
                   <a href='https://www.google.com'><img className='socialImage' src = {s.image} alt={s.name} width="30"/></a>
                </li>
            ))}            
             </ul>      
    )
 }

export default Socials