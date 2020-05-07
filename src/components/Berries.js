import React, { Component } from 'react'
import BerriesList from "./BerriesList";
import Error from "./Error";

export default class Berries extends Component {
    state = {
        page: "",
        pageSize: 20,
        e: null
    }

    componentDidMount(){
        const page = this.props.match.params.page;
        const e = (page >= 0 && page <= 3 && (page - Math.floor(page) === 0)) ? false : true;   
        this.setState({page: page, e:e});
    }

    render() {
        return (
        <div>
            {!this.state.e &&
            <div className="container">
                <h1>Berries</h1>
                <div className="container">
                    <BerriesList 
                        key = {this.state.page}
                        page = {this.state.page}
                        pageSize = {this.state.pageSize}               
                    />
                </div>
            </div> }
            {this.state.e &&
                <Error/>
            }
        </div>
        )
    }
}
