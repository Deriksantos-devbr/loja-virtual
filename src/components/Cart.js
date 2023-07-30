import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Cart({ cartItems, setCartItems, removeFromCart }) {
  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="cart-card p-3">
      <Card.Body>
        <Card.Title>Carrinho de Compra</Card.Title>
        <ul>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Preço:</strong> R$ {item.price} <br />
                  <strong>Quantidade:</strong> {item.quantity}
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="success" onClick={() => increaseQuantity(item.id)}>
                    +
                  </Button>
                  <Button variant="danger" onClick={() => decreaseQuantity(item.id)}>
                    -
                  </Button>
                  <Button variant="warning" onClick={() => removeFromCart(item.id)}>
                    Remover
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </ul>
        <p>Total: R$ {totalAmount}</p>
      </Card.Body>
    </Card>
  );
}

export default Cart;
