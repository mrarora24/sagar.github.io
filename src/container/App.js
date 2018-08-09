import React,{Component} from 'react';
import Scroll from '../component/Scroll';
import Cardarray from '../component/cardarray';
import SearchBox from '../component/SearchBox';




class App extends Component{
	constructor() {
		super();
		this.state= {
			robots:[] ,
			searchfield:''
		}
	}

  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response=>response.json())
	  .then(users=>{this.setState({robots: users})});
}

onSearchChange= (event) => {
	this.setState({ searchfield : event.target.value})
}

render(){
	const {robots, searchfield}=this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return  !robots.length ? <h1 className= 'tc'>Loading...</h1>:
     (  <div className='tc'>
     	<h1>RobotFriends</h1>
     	<SearchBox searchChange={this.onSearchChange}/>
     	<Scroll>
     	<Cardarray robots={filteredRobots}/>
     	</Scroll>
     	</div>
   	);
}
}



export default App;