import React, { Component } from 'react'
import BerryCard from "./BerryCard";
import Paginator from "./Paginator";

export default class BerriesList extends Component {

    state = {
        url: "",
        berries: [],
        page: "",
        itemCount: ""
    };

    async componentDidMount(){
        const page = this.props.page;
        const pageSize = this.props.pageSize;
        if (page !== undefined && pageSize !== undefined){
            const url = `https://pokeapi.co/api/v2/berry/?limit=${pageSize}&offset=${pageSize*(page)}`;
            this.setState({url: url, page: page});

            await fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({berries: data['results'], itemCount: data.count})
            })

            .catch(console.log);
        }
    }
    render() {
        return (
        <div>
            <div className="row">
                {this.state.berries.map(berry => (
                    <BerryCard
                        key={berry.name}
                        name={berry.name}
                        url={berry.url}
                    />
                ))}
            </div>
            <div>
                {(this.state.itemCount !== "") && (this.state.page!="") && <Paginator
                 key = {this.state.page}
                 page = {this.state.page}
                 itemCount = {this.state.itemCount}
                 last = {"3"}
                />}
            </div>
        </div>
        )
    }
}