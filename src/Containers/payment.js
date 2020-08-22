import React, { Component } from "react";
import image from './used enalo.jpg'
import './payment.css';

import {connect} from 'react-redux'

class Login extends Component {

     constructor(){
       super();
      this.state={
           purpose:'',
           amount:''
       }
    }
     paymentHandler=(e)=>{
      
       
        const val=document.getElementById('Uname').value;
        const amount=document.getElementById('Pass').value;
         this.setState({
            ...this.state,
            purpose:val

         })

        //console.log(val);
       
        this.props.onPayment();
        
       
     }
      
     

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
        <label>Purpose of Payment 
          
           <br></br>
        </label>    
        <input type="text" name="purpose" id="Uname" placeholder=""/>    
        <br/><br/>    
        <label>Amount   
            
        <br></br>
        </label>    
        <input type="number" name="Amount" id="Pass" placeholder=""/>    
        <br/><br/>    
        <button type="button" name="log" id="log" value="Pay" onClick={this.paymentHandler}><a href="/page2">Pay</a></button>      
        <br/><br/>       
    </form>     
    </div>          
        );
    }
}


const mapStateToProps=state=>{
    return{
        ...state,
        ctr:state.payment
    }
}
const mapDispatchToPrpos=dispatch=>{
    return{
        onPayment:()=>dispatch({type:'PAYMENT_CLICK', val:this.state.purpose, amount:this.state.amount}  )
    }
}


export default connect(mapStateToProps,mapDispatchToPrpos) (Login);