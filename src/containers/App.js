import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import 'tachyons';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
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
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots= robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (robots.length === 0) ? 
            <h1>Loading</h1> : 
            (
            <>
            <h1 className='tc f2'>Robots</h1>
            <Searchbox searchChange = {this.onSearchChange} />
            <Scroll>
            <CardList robots={ filteredRobots } />
            </Scroll>
            </>
        );
    }
}

export default App;