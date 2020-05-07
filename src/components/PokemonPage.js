import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Error from './Error';

export default class PokemonPage extends Component {

    state = {
        index: "",
        name: "",
        img: "",
        url: "",
        abilityData: [],
        statData: [],
        typeData: [],
        weight: "",
        height: "",
        abilities: "",
        stats: [[]],
        typeNames: "",
        e: null
    };

    async componentDidMount(){
        const { index } = this.props.match.params;
        const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

        await fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                index: index, 
                name: data['name'], 
                img: img,
                url: url,
                weight: data['weight'], 
                height: data['height'],
                abilityData: data['abilities'], 
                typeData: data['types'],
                statData: data['stats']
            })
        })

        .catch(() => {
            console.log();
            this.setState({e: true});
        });

        let abilityNames = [];
        this.state.abilityData.map(a => (
            abilityNames.push(a['ability'].name)
        ));
        this.setState({abilities: (abilityNames.join(", "))});

        let statValues = [];
        this.state.statData.map(s => (
            statValues.push([s.stat.name,s.base_stat])
        ));
        this.setState({stats: statValues});

        let types = [];
        this.state.typeData.map(t => (
            types.push(t.type.name)
        ));
        this.setState({typeNames: types.join(", ")});        

    }
    render() {
        return (
            <div>

            { !this.state.e &&

            <div className="item-page">
            
                <h1>{this.state.name}</h1>
                <img src={this.state.img} alt={this.state.name} width="600px" height="600px"/>
                <div> 
                    <div>
                        <p className="page-heading">Weight: {this.state.weight}</p>
                        <p className="page-heading">Height: {this.state.height}</p>
                        <p className="page-heading">Abilities: {this.state.abilities}</p>
                        <p className="page-heading">Types: {this.state.typeNames}</p>
                    </div>
                    <div className="stats">
                    {
                        this.state.stats.map(a => (
                            <div>
                                <p className="page-heading">{a[0]}: {a[1]}</p>
                                <ProgressBar now={a[1]} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            }

            { this.state.e &&
                <Error/>
            }
            </div>
        )
    }
}
