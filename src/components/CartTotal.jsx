import { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';

function CartTotal() {
  const { products, cartItems, currency } = useContext(shopContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total based on cart items
    const calculateTotal = () => {
      let totalAmount = 0;

      for (const itemId in cartItems) {
        const product = products.find((product) => product._id === itemId);
        if (product) {
          for (const size in cartItems[itemId]) {
            const quantity = cartItems[itemId][size];
            totalAmount += product.price * quantity;
          }
        }
      }

      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems, products]); // Recalculate total whenever cartItems or products change

  return (
    <div className='total'>
      <h3>Total: {currency}{total.toFixed(2)}</h3>
    </div>
  );
}

export default CartTotal;
