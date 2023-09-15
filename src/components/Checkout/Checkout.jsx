import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../back";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const cartOrder = (cart) => {
    return cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
    }));
  };

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "John",
        phone: "123",
        email: "john@example.com",
      },
      items: cartOrder(cart),
      total,
      date: serverTimestamp(),
    };
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      clearCart();
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Resumen de la compra</h2>
      {orderId && <p>El id de la order es: {orderId}</p>}
      {!orderId && (
        <>
          <div>
            <h4>Formulario de contacto</h4>
            //TODO: Formulario de contacto
          </div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: {item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <p>Total de la compra: ${total}</p>
          <button onClick={handleCheckout}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};
export default Checkout;
