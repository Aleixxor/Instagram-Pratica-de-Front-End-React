import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class BottomNavBar extends Component {
  state = {
    character: {}
  };

  async componentDidMount() {}
  render() {
    return (
      <nav
        id="main-nav"
        className={`center ${window.location.pathname === "/" ? "hide" : ""}`}
      >
        <div className="flex-auto">
          <a href="/dashboard">
            <i className="fa fa-home"></i>
          </a>
        </div>
        <div className="flex-auto">
          <a href="/search">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div className="flex-auto">
          <i className="fa fa-plus-square-o"></i>
        </div>
        <div className="flex-auto">
          <a href="/activity">
            <i className="fa fa-heart-o"></i>
          </a>
        </div>
        <div className="flex-auto">
          <a href="/profile">
            <i className="fa fa-user-o"></i>
          </a>
        </div>
      </nav>
    );
  }
}
