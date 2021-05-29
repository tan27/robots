import React, {Component} from 'react';
import CardList from './CardList.js';
import 'tachyons';
// import { robots } from './robots';
import Searchbox from './Searchbox.js';
import './App.css'
import Scroll from './Scroll.js';

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

    // async function() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const users = await response.json()
    //     return (users => {this.setState({robots: users})
    //     }
    // }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
        console.log(e.target.value);
    }

    render() {
        const filteredRobots= this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <>
            <h1 className='tc'>Robots</h1>
            <Searchbox searchChange = {this.onSearchChange} />
            <Scroll>
            <CardList robots={ filteredRobots } />
            </Scroll>
            </>
        );
        }
    }
}

export default App;