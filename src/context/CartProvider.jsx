import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )

}