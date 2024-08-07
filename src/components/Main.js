import { useState } from "react"



export default function Main({list, setList}){
    const [checked, setChecked] = useState(false)
    function removeItems(id){
        setList((items)=> items.filter((item)=> item.id !== id))
    }
    function handleCheckBox(id){
        setList((items)=> items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item) )
        setChecked((checked)=> !checked)
        
    }
    return <div className="list">
        <ul>
            {list.map((item)=> <li key={item.id}><input onChange={()=> handleCheckBox(item.id)} type="checkbox" value={checked}/> <span style={{textDecoration: `${item.packed ? "line-through" : ""}`}}>{item.quantity} {item.description}</span> <button onClick={()=> removeItems(item.id)} style={{cursor: "pointer"}}>❌</button></li>)}
        </ul>
    </div>
}