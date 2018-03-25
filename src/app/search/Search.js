import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchedTerm: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            searchedTerm: event.target.value
        })

        this.props.informUsersPage(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <input id="searchPeople" type="text" className="validate col s11" value={this.state.searchedTerm} onChange={this.handleChange} />
                    <label htmlFor="searchPeople"><i className="material-icons col s1 searchIcon">search</i></label>
                    <p className="col offset-s9 s3 searchP">males: {this.props.male} females: {this.props.female}</p>
                </div>
            </div>
        )
    }
}

export default Search;