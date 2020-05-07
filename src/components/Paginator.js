import React, { Component } from 'react'
import '../App.css';

export default class Paginator extends Component {
    state = {
        items: [],
        active: 1,
        page: "",
        partialUrl: "",
        firstPage: "",
        lastPage: ""
    }

    componentDidMount(){
        const page = this.props.page;
        const itemCount = this.props.itemCount;
        const last = this.props.last;

        if (itemCount !== ""){
            const firstPage = (page === "0")? true : false;
            const lastPage = (page === last)? true : false;
            this.setState({page: page, firstPage: firstPage, lastPage: lastPage});
        }

    }

    render(){
        console.log("render");
        return (
            <div className="paginator">
                {this.state.firstPage && <a className="first next" href={`${parseInt(this.props.page) +1}`}>NEXT</a>}
                {!this.state.firstPage && <a className="prev" href={`${parseInt(this.props.page) -1}`}>PREV</a>}
                {!this.state.lastPage && !this.state.firstPage && <a className="next" href={`${parseInt(this.props.page) +1}`}>NEXT</a>}
            </div>
        )
    }

}
