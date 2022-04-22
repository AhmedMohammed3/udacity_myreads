import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import HomePage from './components/HomePage';
import Search from './components/Search';

class BooksApp extends React.Component {
	render() {
		return (
			<div className='app'>
				<Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/search" component={Search}/>
				</Switch>
			</div>
		);
	}
}

export default BooksApp;
