import { useState } from 'react';
import { Icon } from '@iconify/react';



const CartWidget = () => {
    const [CartItems, setCartItems] = useState(0);
    return(
        <>
        <Icon className='cart-icon display-6' icon="raphael:cart" />
        {CartItems}
        </>
    )
}

export default CartWidget