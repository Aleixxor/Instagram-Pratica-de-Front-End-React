import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    characters: [],
    info: {},
    page: 1
  };

  componentDidMount() {
    this.loadCharacters();
  }

  async loadCharacters(page = 1) {
    const response = await api.get(`/character?page=${page}`);

    const { results, info } = response.data;

    this.setState({ characters: results, info, page });
  }

  render() {
    const { characters, page, info } = this.state;
    return (
      <div>
        <div className="align-middle mt-5 mb-10 fs-14 fw-500">
          <span>
            ricksanchez <i className="fa fa-angle-down mr-5"></i>
          </span>
          <div className="flex-auto">
            <i className="fa fa-bars float-right"></i>
          </div>
        </div>

        <div className="align-middle">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
            className="character-image w-80"
          ></img>
          <div className="center pl-10">
            <span className="fs-15 fw-500">20</span>
            <br></br>
            <span className="fs-14">Publications</span>
          </div>

          <div className="center pr-10 pl-10">
            <span className="fs-15 fw-500">172</span>
            <br></br>
            <span className="fs-14">Followers</span>
          </div>

          <div className="center">
            <span className="fs-15 fw-500">176</span>
            <br></br>
            <span className="fs-14">Following</span>
          </div>
        </div>
        <div className="pl-10 mt-10">
          <span className="fw-500 fs-14">Rick Sanchez</span>
          <br></br>
          <span className="fs-14">
            Weddings are basically funerals with cake
          </span>
        </div>
        <div className="p-10 center">
          <div className="card">
            <span className="fs-14 fw-500">Edit profile</span>
          </div>
        </div>
        <div className="row p-0 mt-10">
          {characters.map(character => (
            <div key={character.id} className="col-4">
              <img
                src={character.image}
                className="w-100"
                alt={character.name}
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
