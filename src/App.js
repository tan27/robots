import React, {Component} from 'react';
import CardList from './CardList.js';
import 'tachyons';
// import { robots } from './robots';
import Searchbox from './Searchbox.js';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})
        })
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
        console.log(e.target.value);
    }

    render() {
        const filteredRobots= this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <>
            <h1 className='tc'>Robots</h1>
            <Searchbox searchChange = {this.onSearchChange} />
            <CardList robots={ filteredRobots } />
            </>
        );
    }
}

export default App;