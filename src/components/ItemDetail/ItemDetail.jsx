import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='card'>
        <h1 className='title'>{nombre}</h1>
        <h2 className='price'>${precio}</h2>
        <img className='img' src={img} alt={nombre} />
        <p className='id'>ID: {id}</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat iure accusamus. Enim voluptatum rem quod illo hic architecto maxime voluptates consequuntur vel, veniam placeat voluptatem et neque iure temporibus.</p>
    </div>
  )
}

export default ItemDetail