import React from "react";
import axios from "axios";

class Discover extends React.Component {
	state = {
		img: ""
	};

	componentDidMount()
	{
		this.getRandomImage();	
	}

	getRandomImage = event =>
	{
		axios.get("https://dog.ceo/api/breeds/image/random")
		.then(response =>
		{
			this.setState({ img: response.data.message });
		});
	}

	render() {
		return(
			<div>
				<h1>Pet or</h1>
				<img src = {this.state.img} className = "mx-auto mt-10"/>
				<button className = "bg-blue-200 p-10 mr-5">Nyet</button>
				<button className = "bg-blue-200 p-10 mr-5">Pet</button>
			</div>
		);
	}
}

export default Discover;