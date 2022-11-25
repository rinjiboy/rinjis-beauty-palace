import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {Arrow, Quantity, CheckoutItemContainer,ImageContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const { clearFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItemHandler =() => clearFromCart(cartItem);
    const removeItemHandler =() => removeItemFromCart(cartItem);
    const addItemHandler =() => addItemToCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <span className='name'>{name}</span>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <span className='value'>{quantity}</span>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <span className='price'>{price} €</span>
            <div className='remove-button' onClick={ clearItemHandler }>&#10005;</div>
        </CheckoutItemContainer>
    )

};

export default CheckoutItem;