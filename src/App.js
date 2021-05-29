import React from 'react';
import CardList from './CardList.js';
import 'tachyons';
import { robots } from './robots';


const App = () => {
    <>
    <h1>Robots</h1>
    <CardList robots={ robots } />
    </>
}

export default App;