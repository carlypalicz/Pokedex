import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Error from './Error';

export default class BerryPage extends Component {

    state = {
        index: "",
        name: "",
        firmness: "",
        growthTime: "",
        natGiftPower: "",
        natGiftType: "",
        size: "",
        flavorData: [],
        img: "",
        flavors: [],
        e: null
    };

    async componentDidMount(){
        const { index } = this.props.match.params;
        const url = `https://pokeapi.co/api/v2/berry/${index}`;
        
        await fetch(url)
        .then(res => res.json())
        .then((data)=>{
            this.setState({
                index: index,
                name: data.name,
                firmness: data.firmness.name,
                growthTime: data.growth_time,
                natGiftPower: data.natural_gift_power,
                natGiftType: data.natural_gift_type.name,
                size: data.size,
                flavorData: data.flavors
            })
        })

        .catch(() => {
            console.log();
            this.setState({e: true});
        });

        let flavors = [];
        this.state.flavorData.map(f => (
            flavors.push([f.flavor.name, f.potency])
        ));        
        this.setState({flavors: flavors});
        const img = `https://github.com/PokeAPI/sprites/blob/master/sprites/items/berries/${this.state.name}-berry.png?raw=true`
        this.setState({img: img});
    }

    render() {
        return (
            <div>
            { !this.state.e &&
            <div className="item-page">
                <h1>{this.state.index}. {this.state.name}</h1>
                <img src={this.state.img} alt={this.state.name} width="400px" height="400px"/>
                <div>  
                    <div>
                        <p className="page-heading">Growth Time: {this.state.growthTime}</p>
                        <p className="page-heading">Firmness: {this.state.firmness}</p>
                        <p className="page-heading">Natural Gift Power: {this.state.natGiftType}: {this.state.natGiftPower}</p>
                        <p className="page-heading">Size: {this.state.size}</p>
                    </div>
                    <div className="stats"> 
                    {
                        this.state.flavors.map(f => (
                            <div>
                                <p className="page-heading">{f[0]}: {f[1]}</p>
                                <ProgressBar now={f[1]}/>
                            </div>
                        ))
                    }
                    </div>
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
