import React,{Component} from 'react';

//import Payment from './Containers/payment'

//import Payment2 from './Containers/payment2'

import logo from './logo.svg';
import './App.css';

import Todo from './Containers/Todo/Todo'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);


//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component{
  render(){
    return(
     
            <Todo></Todo>
     
    )
    }
}
export default App;
