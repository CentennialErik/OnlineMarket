import React, { useEffect, useState } from 'react';
// import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const myBox = {
  outline: '5px solid black',
}

export default function Products() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch product data from an API or database
    fetch('/api/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div style={myBox} key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}