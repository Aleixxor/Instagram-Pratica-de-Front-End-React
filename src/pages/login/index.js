import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Login extends Component {
  goToMainPage = () => {
    window.location.href = "/dashboard";
  };

  render() {
    return (
      <div className="center p-15">
        <p className="language-text pointer">
          português (Brasil) <i className="fa fa-caret-down"></i>
        </p>
        <div className="w-100">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
            className="mb-70 mt-70"
          ></img>
        </div>
        <button className="btn btn-primary pointer" onClick={this.goToMainPage}>
          <i className="fa fa-facebook-square font-size-16"></i>{" "}
          <span className="bold font-size-12">Entrar com o Facebook</span>
        </button>
        <div className="align-inline mt-50">
          <div className="flex-auto bg-gray h-1 mt-7"></div>
          <div>
            <span className="flex-auto language-text ml-10 mr-10">OU</span>
          </div>
          <div className="flex-auto bg-gray h-1 mt-7"></div>
        </div>
        <Link to="/" className="mt-15">
          Cadastre-se com o email ou o número do telefone
        </Link>
        <div className="bg-gray h-1 mt-50"></div>
        <p className="language-text mt-10">
          Já tem uma conta? <strong>Faça login.</strong>
        </p>
      </div>
    );
  }
}
