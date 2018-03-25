import React, { Component } from "react";

import { commsService } from "../../services/communicationService";
import PersonListItem from '../mainPage/PersonListItem';
import PersonCard from "./PersonCard";
import Search from "../search/Search";
import NoResults from "../common/NoResults";
import Spinner from "../common/Spinner";

class UsersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            filteredPeople: [],
            noResults: false,
            mounted: false,
            male: 0,
            female: 0
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        this.fetchPeople();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.refresh !== this.props.refresh) {
            this.fetchPeople();
        }
    }

    fetchPeople = () => {
        commsService.fetchPeople()
            .then(people => {
                this.setState({
                    people,
                    filteredPeople: people
                })

                this.getStats(people);
            })
    }

    renderGrid() {
        return (
            <React.Fragment>
                {this.state.filteredPeople.map((person, i) => {
                    return <PersonCard data={person} key={i} />
                })}
            </React.Fragment>
        )
    }

    renderList() {
        return (
            <ul className="collection">
                {this.state.filteredPeople.map((person, i) => {
                    return <PersonListItem data={person} key={i} />
                })}
            </ul>
        )
    }

    handleSearch = (searchedValue) => {
        this.setState({
            noResults: false
        })

        const filteredPeople = this.state.people.filter(person => {
            return person.name.toLowerCase().search(searchedValue.toLowerCase()) !== -1;
        })

        this.getStats(filteredPeople);

        if (filteredPeople.length === 0) {
            this.setState({
                filteredPeople: [],
                noResults: true,
                males: 0,
                females: 0
            })
        } else {
            this.setState({
                filteredPeople
            })
        }
    }

    getStats = (people = this.state.filteredPeople) => {
        let female = 0;
        let male = 0;

        people.forEach(person => {
            if (person.gender === 'male') {
                male++;
            } else {
                female++;
            }
        })

        this.setState({
            male,
            female
        })
    }

    renderContent = () => {
        return (
            <React.Fragment>
                <Search informUsersPage={this.handleSearch} male={this.state.male} female={this.state.female} />
                <div className="row">
                    {this.props.grid ? this.renderGrid() : this.renderList()}
                </div>
                {this.state.noResults ? <NoResults /> : ""}
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <main className="container">
                    {this.state.mounted ? this.renderContent() : <Spinner />}
                </main>
            </React.Fragment>
        )
    }
}

export default UsersPage;