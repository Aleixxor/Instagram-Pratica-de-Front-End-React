import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";

export default class Search extends Component {
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
        <div className="align-middle mt-5 mb-5">
          <i className="fa fa-search mr-5"></i>
          <span className="comments-area">Pesquisar</span>
          <div className="flex-auto">
            <i className="fa fa-qrcode float-right"></i>
          </div>
        </div>
        <div className="inline maxw-100 p-0 mt-10 nowrap">
          <div className="card ml-5">
            <i className="fa fa-tv"></i> IGTV
          </div>
          <div className="card ml-5">
            <i className="fa fa-shopping-bag"></i> Store
          </div>
          <div className="card ml-5">Animals</div>
          <div className="card ml-5">Games</div>
          <div className="card ml-5">TV and movies</div>
          <div className="card ml-5">Automotive</div>
          <div className="card ml-5">Food</div>
          <div className="card ml-5">Travel</div>
          <div className="card ml-5">Cience and tecnology</div>
          <div className="card ml-5">Decoration</div>
          <div className="card ml-5">Style</div>
          <div className="card ml-5">Music</div>
          <div className="card ml-5">Sports</div>
          <div className="card ml-5 mr-5">Dance</div>
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
