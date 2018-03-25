import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from "./common/Header";
import Footer from "./common/Footer";
import UsersPage from "./mainPage/UsersPage";
import About from "./aboutPage/About";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			grid: false,
			refresh: false
		}
	}

	componentDidMount() {
		if (localStorage.getItem('view')) {
			this.setState({
				grid: JSON.parse(localStorage.getItem('view'))
			})
		}
	}

	gridOrList = () => {
		localStorage.setItem('view', !this.state.grid);

		this.setState(prevState => {
			return {
				grid: !prevState.grid
			}
		})
	}

	handleRefresh = () => {
		this.setState(prevState => {
			return {
				refresh: !prevState.refresh
			}
		})
	}

	render() {
		return (
			<React.Fragment>
				<Header handleClick={this.gridOrList} grid={this.state.grid} handleRefresh={this.handleRefresh} />
				<Switch>
					<Route path="/home" render={() => <UsersPage grid={this.state.grid} refresh={this.state.refresh} />} />
					<Redirect exact from="/" to="/home" />
					<Route path="/about" component={About} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
