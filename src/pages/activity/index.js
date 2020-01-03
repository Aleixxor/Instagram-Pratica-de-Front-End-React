import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Activity extends Component {
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
        <div className="p-10 bottom-line">
          <span className="fs-15 fw-500">Activity</span>
        </div>
        <div className="p-10">
          <span className="fs-14 fw-500">This month</span>
          {characters.map(character => (
            <div className="align-middle p-0 mt-10">
              <img
                className="character-image"
                src={character.image}
                alt={character.name}
              ></img>
              <strong className="user-name">
                {character.name.replace(/ /g, "").toLowerCase()}
                <span className="fw-500"> is now following you.</span>
              </strong>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
