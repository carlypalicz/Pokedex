import React, { Component } from 'react'
import PokemonList from "./PokemonList";
import Error from "./Error";

export default class Pokemon extends Component {
  state = {
    page: "",
    pageSize: 20,
    e: null

  }
  componentDidMount(){
     const page = this.props.match.params.page;
     const e = (page >= 0 && page <= 48 && (page - Math.floor(page) === 0)) ? false : true;

     this.setState({page: page, e: e});
  }

    render() {
        return (
          <div className="container">
            {!this.state.e &&
            <div>
              <h1>Pokemon</h1>
              <div>
                <PokemonList 
                  key = {this.state.page}
                  page = {this.state.page}
                  pageSize = {this.state.pageSize}
                />
              </div>
            </div>
            }

            {this.state.e && 
              <Error/>
            }
          </div>
        )
    }
}
