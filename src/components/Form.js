import { useState } from "react";

export default function Form({setList}){
    const length = 20

    const [quantity, setQuantity] = useState(1)
    const [description, setDescription] = useState("")
    function handleForm(e){
        e.preventDefault();
        setList((items)=> [...items, {id: items.length+1, description, quantity, packed: false}])
        setQuantity(1)
        setDescription("")
    }

    return(
        <form className="add-form" onSubmit={(e)=>handleForm(e)}>
            <label>What do you need for your 😍 trip?</label>
            <select onChange={(e)=> setQuantity(e.target.value)} value={quantity}>
                {Array.from({length}, (_,i)=> <option key={i} value={i+1}>{i+1}</option>) }
                
            </select>
            <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="item..." required/>
            <button>Add</button>
        </form>
    )
}