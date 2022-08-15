import React from "react";
import Socials from './Socials';
import "./Showcase.css";

class Showcase extends React.Component{
    render(){
        return(
            //
            <div id="centered">
                <div className="name">
                    <h1>Ravi Dhingra</h1>
                </div>                
                <p className="career">Web Developer | Salesforce Certified Administrator</p>
                <p className="briefdesc">I have successfully delivered 2 websites and 1 project in the Salesforce.</p>
                <div className="mainbuttons">
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>                   
                </div>
                <div className="socialDiv">
                    <Socials />
                </div>
                
            </div>
        );
    }
}
export default Showcase;