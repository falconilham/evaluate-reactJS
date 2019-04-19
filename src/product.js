import React, { Component }  from 'react'
import axios from 'axios';
class product extends Component {
	constructor(){
		super();
		this.state={
    	data : []
    	}

	}
	componentDidMount = () => {
		const self = this
		const setting = { headers: { 'Authorization': `Bearer ${sessionStorage.getItem("token")}` } }
		axios.get('https://apifront-dev.bitubi.id/api/b2b-v1/products', setting)
			.then(function (response) {
				self.setState({
      			data: response.data.data

    		})
		    	console.log(response.data.data);
			})
		  	.catch(function (error) {
		    	console.log(error);
		  	});
	}

	render(){
		console.log(this.state.data)

		return(
		<div className="container">
			{this.state.data.map((item, i) => (
    		<p key={i}>{item.title}</p>
    		))}
		</div>


		)
	}
}
export default product