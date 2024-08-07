export default function Footer({list}){
    const packedItems = list.filter((item)=> item.packed).length
    return <div className="stats">{list.length>0 ? ` 💼 You have ${list.length} items on your list, and you already packed ${packedItems} (${Math.ceil((packedItems/list.length)*100)}%)` : "Start adding some items to your packing list 🚀"}</div>
}