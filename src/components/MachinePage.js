import React, { Component } from 'react'
import Error from './Error';

export default class MachinePage extends Component {
    state = {
        ind: "",
        name: "",
        move: "",
        version: "",
        finalVersion: "",
        moveID: "",
        moveAccuracy: "",
        moveDamage: "",
        movePower: "",
        e: null


    }

    async componentDidMount(){
        const { index } = this.props.match.params;
        this.setState({ind: index});
        const url = `https://pokeapi.co/api/v2/machine/${index}/`;

        await fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                name: data.item.name,
                move: data.move.name,
                version: data.version_group.name,
                moveID: data.move.url.split('/')[url.split('/').length - 2]
            })
        })

        .catch(() => {
            console.log();
            this.setState({e: true});
        })

        let v = this.state.version.replace("-", ", ");
        this.setState({finalVersion: v});

        const moveUrl = `https://pokeapi.co/api/v2/move/${this.state.moveID}`
        if (!this.state.e){
            await fetch(moveUrl)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    moveAccuracy: data.accuracy,
                    moveDamage: data.damage_class.name,
                    movePower: data.power
                })
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.e &&
                <div className="page">
                    <h1 className="page-header">{this.state.ind}. {this.state.name}</h1>
                    <p className="page-heading">Teaches Move: {this.state.move}</p>
                    <p className="page-heading">{this.state.move} is in the {this.state.moveDamage} damage class with accuracy {this.state.moveAccuracy} and power {this.state.movePower}</p>
                    <p className="page-heading">Games: {this.state.finalVersion}</p>
                </div>}

                {this.state.e &&
                    <Error/>
                }
            </div>
        )
    }
}
