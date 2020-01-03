import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="flex-auto">
          <Link to="/dashboard" className="float-left">
            <i className="fa fa-camera"></i>
          </Link>
        </div>
        <div className="flex-auto center mt-10">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
          ></img>
        </div>
        <div className="flex-auto">
          <Link to="/dashboard" className="float-right ml-10">
            <i className="fa fa-paper-plane"></i>
          </Link>{" "}
          <Link to="/dashboard" className="float-right">
            <i className="fa fa-tv"></i>
          </Link>
        </div>
      </header>
    );
  }
}
