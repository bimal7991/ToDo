const initialState={
      paymentPurpose:'Test',
      paymentAmount:'100',
      phone:'7364023007'

}

const reducer=(state=initialState,action)=>{
     if(action.type==='PAYMENT_CLICK'){
          console.log(action.val)
         return{
             paymentPurpose:action.val,
             paymentAmount:action.amount,
             phone:action.phone

         }
     }

    return state
}

export default reducer;