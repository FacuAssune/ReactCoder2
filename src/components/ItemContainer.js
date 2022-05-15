import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.js";
import { items as itemsData } from "./ItemData.js"

const ItemContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log (itemsData);

        const getItems = new Promise(   (resolve, reject) =>{
            setTimeout(()=>{
             resolve(itemsData)
            }, 2000)

        })

        getItems.then( (result) =>{
            console.log ('Se completo la promesa',result);
            setItems(result)
        })
        
    }, [])
    

    return (
        <div>
            {items.map( item => <ItemCard key ={item.id}itemData={item}/>)}
        </div>
    )
}
export default ItemContainer