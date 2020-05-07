import React, { Component } from 'react'
import Card from "react-bootstrap/Card";

export default class BerryCard extends Component {

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
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/items/berries/${name}-berry.png?raw=true`
        this.setState({name, ind, url, img});
    }

    render() {
        return (
            <a href={`/berries/${this.state.ind}`}>
            <Card style={{ width: '15rem'}}>
                <Card.Body>
                    <Card.Title>{this.state.ind + ". " + this.state.name}</Card.Title>
                    <Card.Img variant="top" src={this.state.img} alt="idk"/>
                </Card.Body>
            </Card>
            </a>

        )
    }
}