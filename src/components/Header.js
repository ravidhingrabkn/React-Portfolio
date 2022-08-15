import React from "react";
import "./Header.css";

class Header extends React.Component {
  state = { clicked: false};
  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render() {    
    return(
      <nav>
        <a href="#" id="logo"><span>Ravi Dhingra Portfolio</span></a>
        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div id="hamburger" onClick={this.handleClick}>
        <i id='bar' className= { this.state.clicked  ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </nav>
    );
  }
}
export default Header;