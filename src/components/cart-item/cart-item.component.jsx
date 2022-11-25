import {Details, ItemContainer} from './cart-item.styles'

const CartItem =({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <ItemContainer>
            <img src={imageUrl}  alt={name}/>
            <Details>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price}€</span>
            </Details>
        </ItemContainer>
    );
};

export default CartItem;