import React from 'react';

import FlipMove from 'react-flip-move';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './TodoList.css'
const todo=(props)=>{
    let items=props.itemsList;

    console.log(items)

     const listItems=items.map(item=>{
         return ( <div key={item.key} className="list">
             <p>
                <input type="text" value={item.text} onChange={(e)=>{
                    props.updateItem(e.target.value,item.key)
                }}/>
               <span> <FontAwesomeIcon className="ficon" icon='trash'
                 onClick={()=>{props.deleteItem(item.key)}}
                  ></FontAwesomeIcon>
                  
                  </span>
             </p>
         </div>)
     })

   
    return(
        <div>
            <FlipMove>
            {listItems}
            </FlipMove>
            
        </div>
       
    )

}

export default todo;