import React,{Component} from 'react'

import './Todo.css'


import Lists from '../../Components/TodoList/TodoList' 
class Todo extends Component{

      state={
          items:[],
           newItem:{
               text:'',
               key:''
           }
      }
   onSubmitHandler=(e)=>{
      
       e.preventDefault();

      const currentItem=this.state.newItem;
      console.log(currentItem);
      const items=[...this.state.items,currentItem];

      this.setState({
          items:items,
          newItem:{
              text:'',
              key:''
          }
      })
      
          
       console.log(this.state.items);
       
      // e.preventDefault();
   }
   handleInput=(e)=>{
       const text=e.target.value;
        this.setState({
            newItem:{
                text:text,
                key:new Date()
            }
        })
   }
deleteItemHandler=(key)=>{
    const filterItems=this.state.items.filter(item=>
        key!==item.key
    )
    this.setState({
        items:filterItems
    })

}

updateItemHandler=(value,key)=>{
    const item=this.state.items;
      item.map(item=>{
         if( item.key===key){item.text=value}
      })
      this.setState({
          items:item
      })
}


   render(){
       return(
           <div className="main">
              <header >
                  <form onSubmit={this.onSubmitHandler} className="todo-form">
                      <input type="text" placeholder="Enter Todo"  className="todo-input" 
                      value={this.state.newItem.text}
                      onChange={this.handleInput}/>
                      <button type="submit"  className="todo-button">Add Task</button>
                  </form>
                 
              </header>
              
              <Lists itemsList={this.state.items} deleteItem={this.deleteItemHandler}
                 updateItem={this.updateItemHandler}
              ></Lists>

           </div>
       )
   }
}

export default Todo