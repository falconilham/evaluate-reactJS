import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import product from './product'

export default class router extends Component {
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={App}/>
					<Route exact path="/product" component={product}/>
			</Switch> 
			</Router> 
			)
	}
}
