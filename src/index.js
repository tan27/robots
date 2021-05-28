import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList.js';
import 'tachyons';
import { robots } from './robots';


ReactDOM.render(
    <CardList robots={ robots } /> , document.getElementById('root')
    );
