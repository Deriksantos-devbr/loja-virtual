// Product.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import imagem01 from '../imagens/imagem01.jpg';
import imagem02 from '../imagens/imagem02.jpg';
import imagem03 from '../imagens/imagem03.jpg';

function Product({ product, addToCart }) {
  const { name, description, price, image } = product;

  let imageSource;
  if (image === 'imagem01.jpg') {
    imageSource = imagem01;
  } else if (image === 'imagem02.jpg') {
    imageSource = imagem02;
  } else if (image === 'imagem03.jpg') {
    imageSource = imagem03;
  } else {

    imageSource = '';
  }

  return (
    <Card className="product-card p-3">
      <Card.Img variant="top" src={imageSource} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: R$ {price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
