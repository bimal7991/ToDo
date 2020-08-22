import React, { Component } from "react";
import image from './used enalo.jpg'
import './payment.css';

import {connect} from 'react-redux'

class Login extends Component {
    render() {
        return (
   
                         
        
    <div id="login" className='login'> 
              <div className="outer">
                    <div className="inner"> 
                        <img src={image} width='40px' height='40px'></img>
                    </div>
                    <p className="text1">Paying to<br></br>Exposys Data Labs </p>
                   
              </div> 
              <br></br>
             
               
            <form className="login2">  
            <div className="inner1">
                     <a href="/" className='back'>Change</a>
        <p>Purpose of Payment<br></br> {this.props.ctr}</p>
                    

              </div>
              <div className="inner2">
                     <p id='price'>{this.props.amount}</p>
                     <p id='price1'> Amount</p>
                     <br></br>
              </div>
             <br/>
          <div className="left">
        <label>Name  
        </label>    
        <input type="text" name="name" id="Uname" placeholder=""/>    
        <br/><br/>    
        <label>Email       
        </label>    
        <input type="number" name="email" id="Pass" placeholder=""/>  
        <br/><br/>  
        <label>Phone Number       
       
        </label>    
        <input type="number" name="phone" id="Pass" placeholder=""/>    
        <br/><br/>    
        <button type="button" name="log" id="log" value="Pay"><a href="/page2">Next</a></button>      
        <br/><br/>    
        </div>
        
    </form>     
    </div> 
                  
        );
    }
}

const mapStateToProps=state=>{
    console.log(state.paymentPurpose)
    return{
        ...state,
        ctr:state.paymentPurpose,
        amount:state.paymentAmount
    }
}

export default connect(mapStateToProps)(Login);