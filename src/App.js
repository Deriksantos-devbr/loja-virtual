import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Product from './components/product';
import Cart from './components/Cart';
import productsData from './data/productsData';
import { Container, Row } from 'react-bootstrap';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  return (
    <Container>
      <h1>Produtos Disponíveis</h1>

      <Row>
        {productsData.map((product) => (
          <div key={product.id} className="col-md-4">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </Row>

      <Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} />
    </Container>
  );
}

export default App;

