import React from 'react'
import { useParams } from 'react-router-dom';


function Products() {
    let { id } = useParams();
  id = parseInt(id, 10); // Convert id to a number (if it's a string)

  return (
    <>
    <h1>Products with id {id}</h1>
    </>
  )
}

export default Products