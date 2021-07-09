import React, {Component} from 'react';
import './app.css';
import CardList from './cardList';
import Scroll from './scroll';
import SearchBox from './searchBox';
import ErrBoundry from './errBoundry.js'




class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: [],
	  		searchFields: ""	
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response=>{
			return response.json();
			})
			.then(users=>{
				this.setState({robots: users})
			});
		
	}

	onSearchChange = (event) => {
		this.setState({searchFields: event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchFields.toLowerCase());
		});
		if(this.state.robots.length === 0){
			return <h1> Loading ...</h1>
		} else{
			return (
				<div className='tc'>
					<h1 className="f1">ROBOFRIENDS</h1>
					<SearchBox onSearchChange={this.onSearchChange}/>
					<div className ='shadow-5' style={{height: '2px'}}></div>
					<Scroll>
						<ErrBoundry>
							<CardList robots={filteredRobots}/> 
						</ErrBoundry>
					</Scroll>
				</div>		
		);
		}
	}
}

export default App;