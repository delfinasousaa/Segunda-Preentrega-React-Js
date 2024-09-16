import { useState, useEffect } from 'react'
import { getProductos, getProductosPorCat } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect (() => {
       const funcionProductos = idCategoria ? getProductosPorCat : getProductos

       funcionProductos (idCategoria)
       .then(res => setProductos(res))
    }, [idCategoria])

  return (
    <div className='especial'>
    <h2 style={{ textAlign: 'center', fontSize: '40px', color: '#ffff', backgroundColor: ' #200040', padding: '20px', marginBottom: '0' }}>
      Nuestros productos
    </h2>
    <ItemList productos={productos} />
  </div>
  )  
}

export default ItemListContainer