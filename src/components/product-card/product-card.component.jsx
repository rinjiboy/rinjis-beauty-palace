import { useContext} from 'react';



import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import { ProductCards, ProductImage, Footer, Name, Price } from './product-card.styles';

const ProductCard = ({ product }) =>{
    const { name, price, imageUrl} = product;
    const{addItemToCart} =  useContext(CartContext);

    const addProductToCart =() => addItemToCart(product);


return (<ProductCards>
<ProductImage src={imageUrl} alt={`${name}`}/>
    <Footer>
    <Name>{name}</Name>
    <Price>{price }€</Price>
    </Footer>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
</ProductCards>
)} ;

export default ProductCard;