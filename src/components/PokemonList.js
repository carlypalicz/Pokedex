import React, { Component } from 'react'
import PokemonCard from "./PokemonCard";
import Paginator from "./Paginator";

export default class PokemonList extends Component {

    state = {
        url: "",
        pokemon: [],
        page: "",
        itemCount: 964
    };

    async componentDidMount(){
        const page = this.props.page;
        const pageSize = this.props.pageSize;
        if (page !== undefined && pageSize !== undefined){
            const url = `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${pageSize*(page)}`;
            this.setState({url: url, page: page});

            await fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({pokemon: data['results'], itemCount: data['count']})
            })
            .catch(console.log);
        }
    }
    render() {
        return (
        <div className="pokemon-list">
            <div className="row">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
            </div>
            <div>
                <Paginator
                 key = {this.state.page}
                 page = {this.state.page}
                 itemCount = {this.state.itemCount}
                 last = {"48"}
                />
            </div>
        </div>
        )
    }
}
