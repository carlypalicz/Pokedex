import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
export default class PokemonCard extends Component {

    state = {
        name: "",
        ind: "",
        url: "",
        img: ""
    };

    componentDidMount(){
        const name = this.props.name;
        const url = this.props.url;
        const ind = url.split('/')[url.split('/').length - 2];
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${ind}.png?raw=true`
        this.setState({name, ind, url, img});
    }

    render() {
        return (
            <div>
                <a className="card-title" href={`/pokemon/${this.state.ind}`}>
                <Card style={{ width: '15rem'}}>
                    <Card.Body>
                        <Card.Title>{this.state.ind + ". " + this.state.name}</Card.Title>
                        <Card.Img variant="top" src={this.state.img} alt="image not provided by pokeapi"/>
                    </Card.Body>
                </Card>
                </a>

            </div>

        )
    }
}
