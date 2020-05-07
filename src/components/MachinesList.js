import React, { Component } from 'react'
import MachineCard from "./MachineCard";
import Paginator from "./Paginator";

export default class MachinesList extends Component {

    state = {
        url: "",
        machines: [],
        page: "",
        mod: "",
        itemCount: ""
    };

    async componentDidMount(){
        const page = this.props.page;
        const pageSize = this.props.pageSize;

        if (page !== undefined && pageSize !== undefined){
            const mod = page*pageSize;
            const url = `https://pokeapi.co/api/v2/machine/?limit=${pageSize}&offset=${mod}`;
            this.setState({url: url, mod: mod, page: page});

            await fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({machines: data['results'], itemCount: data['count']})
            })

            .catch(console.log);
        }
    }
    render() {
        return (
        <div>
            <div className="row">
                {this.state.machines.map((machine, index) => (
                    <MachineCard
                        key={index+this.state.mod+1}
                        ind={index+this.state.mod+1}
                    />
                ))}
            </div>
            <div>
            {((this.state.itemCount ) && (this.state.page!="")) ? <Paginator
                    key = {this.state.page}
                    page = {this.state.page}
                    itemCount = {this.state.itemCount}
                    last = {"72"}
                    /> : null}
                </div>
        </div>
        )
    }
}