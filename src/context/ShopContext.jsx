import React, { useMemo, useState} from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

export const shopContext= React.createContext()

const ShopContextProvider= (props)=>{
    const currency='Rs.';
    const delivery_charges = 150;
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({})
    const [orders,setOrders] = useState([])
    const navigate= useNavigate()

    const addToCart = async (itemId,size) => {
      let cartData = structuredClone(cartItems)
      if (!size) {
        toast.error('Select Product Size')
        return;
      }
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] =1
        }
      } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1
      }
      setCartItems(cartData)
    }
    const cartCount = ()=>{
      let totalCount=0;
      for (const items in cartItems) {
        for (const item in cartItems[items]){
          try {
            if(cartItems[items][item]>0)
              totalCount += cartItems[items][item]
          } catch (error) {
            
          }
        } 
      }
      return totalCount;
    }

      const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
    
        // If the quantity is 0, remove the item from the cart
        if (quantity === 0) {
            if (cartData[itemId]) {
                delete cartData[itemId][size]; // Remove the specific size
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId]; // If no sizes left, remove the entire item
                }
            }
        } else {
            cartData[itemId][size] = quantity;
        }
        setCartItems(cartData);
    };

    const placeOrder = () => {
      if (cartCount() === 0) {
          toast.error("Your cart is empty!");
          return;
      }
    }
    const contextValue = useMemo(() => ({
        products,
        currency,
        delivery_charges,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,cartCount,updateQuantity,navigate,
        orders,placeOrder
      }));
    return(
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider;


