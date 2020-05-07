import React, { Component } from 'react'
import Card from "react-bootstrap/Card";

export default class MachineCard extends Component {

    state = {
        name: "",
        move: "",
        version: "",
        ind: ""
    };

    async componentDidMount(){
        const ind = this.props.ind;
        if (ind !== undefined){
            this.setState({ind: ind});
            const url = `https://pokeapi.co/api/v2/machine/${ind}/`;
            const headers = { 'Content-Type': 'application/json' };
            await fetch(url, { headers })
            .then(res => res.json())
            .then((data) => {
                this.setState({name: data['item'].name});
                this.setState({move: data['move'].name});
                this.setState({version: data['version_group'].name.replace("-", ", ")})
            })
    
            .catch(console.log);
        }

    }

    render() {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                <a href={`/machines/${this.state.ind}`}>

                    <Card.Title>{this.state.name}: teaches {this.state.move}</Card.Title>
                    </a>
                    <Card.Text>in games: {this.state.version}</Card.Text>
                </Card.Body>
            </Card>


        )
    }
}