import React, { useState } from 'react';

function TodoListHooks(){
    const [item,setItem] = useState("");
    const [itemList,setItemList] = useState([]);

    const addlist=()=>{
        setItemList([...itemList,{
            text:item
        }])
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(item==="") return;
        addlist();
        setItem("")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
                <button type="submit">Add Item</button>
            </form>
            <div>
                <ul>
                        {itemList.map(items=>(
                             <li>
                                {items.text}
                            </li>
                        ))}  
                </ul>
            </div>
        </div>
    )
}

export default TodoListHooks   