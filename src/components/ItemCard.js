import React from 'react'

const ItemCard = ({itemData}) => {
  return (
    <div style={{border:'solid black 3px',margin:'5px', padding: '5px' }}>
        <strong>{itemData.name}</strong> 
        <div>{itemData.price}</div>
        <div>{itemData.image}</div>
    </div>
  )
}

export default ItemCard