import React,{Component} from 'react';

import Payment from './Containers/payment'

import Payment2 from './Containers/payment2'

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Switch>
             <Route exact path="/page2" component={Payment2} />
             <Route exact path='/' component={Payment} />
           
           
          </Switch>
         
      </div>
      </Router>
    )
    }
}
export default App;
