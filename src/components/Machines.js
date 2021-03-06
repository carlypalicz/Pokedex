import React, { Component } from 'react'
import MachinesList from "./MachinesList";
import Error from "./Error";

export default class Machine extends Component {

    state = {
        page: "",
        pageSize: 20,
        e: null
    }
    componentDidMount(){
        const page = this.props.match.params.page;
        const e = (page >= 0 && page <= 72 && (page - Math.floor(page) === 0)) ? false : true;
        this.setState({page: page, e:e});
    }
        render() {
            return (
            <div>
                {!this.state.e &&
                <div>
                    <h1>Machines</h1>
                    <div>
                        <MachinesList 
                        key = {this.state.page}
                        page = {this.state.page}
                        pageSize = {this.state.pageSize}      
                        />
                    </div>
                </div>}
                {this.state.e &&
                    <Error/>
                }
            </div>
            )
        }
    }