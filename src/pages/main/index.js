import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default class Main extends Component {
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

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadCharacters(pageNumber);
  };

  nextPage = () => {
    const { page, info } = this.state;
    if (page === info.pages) return;

    const pageNumber = page + 1;

    this.loadCharacters(pageNumber);
  };

  render() {
    const { characters, page, info } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="character-list">
          {characters.map(character => (
            <div key={character.id}>
              <div className="align-middle">
                <img
                  className="character-image"
                  src={character.image}
                  alt={character.name}
                ></img>
                <strong className="user-name">
                  {character.name.replace(/ /g, "").toLowerCase()}
                </strong>
                <div className="flex-auto">
                  <i className="fa fa-ellipsis-h user-name float-right"></i>
                </div>
              </div>
              <div className="posted-image center">
                <img src={character.image} alt={character.name}></img>
              </div>
              <div className="align-middle mb-10 mt-5">
                <i className="fa fa-heart-o mr-5" aria-hidden="true"></i>
                <i className="fa fa-comment-o mr-5" aria-hidden="true"></i>
                <i className="fa fa-paper-plane-o mr-5" aria-hidden="true"></i>
                <div className="flex-auto">
                  <i
                    className="fa fa-bookmark-o float-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="user-name horizontal-padding-10">
                <strong>{Math.floor(Math.random() * 1000)} likes</strong>
              </div>
              <div className="user-name horizontal-padding-10 mt-5">
                <strong>
                  {character.name.replace(/ /g, "").toLowerCase()}{" "}
                </strong>
                {character.name} -{" "}
                {character.type !== ""
                  ? character.type
                  : character.location.name}
              </div>
              <div className="comments-area horizontal-padding-10 user-name mt-5 mb-20">
                View all {Math.floor(Math.random() * 100)} comments
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
