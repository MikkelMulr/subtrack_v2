import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.js';
import './index.css';
import * as serviceWorker from './serviceWorker';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/Dashboard/' component={Dashboard} />
				<Route exact path='/login/' component={Login} />
				<Route component={Error} />
			</Switch>
		</div>
	);
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
