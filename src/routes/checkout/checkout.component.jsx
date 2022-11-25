import {Total,CheckoutItems, Headers, Header} from  './checkout.styles';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';



const Checkout =() => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return(
        <CheckoutItems>
            <Headers>
                <Header>
                    <span>Product</span>
                </Header>
                <Header>
                    <span>Description</span>
                </Header>
                <Header>
                    <span>Quantity</span>
                </Header>
                <Header>
                    <span>Price</span>
                </Header>
                <Header>
                    <span>Remove</span>
                </Header>
            </Headers>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={(cartItem.id)} cartItem={cartItem} />
                ))
            }
            <span className='total'>Total:{ cartTotal } €</span>
        </CheckoutItems>
    )
};

export default Checkout;