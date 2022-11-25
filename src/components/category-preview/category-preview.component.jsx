import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import {Preview, PreviewContainer, CategoryTitle} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return (
    <PreviewContainer>
            <h2>
                <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
            </h2>
        <Preview>
        { products
            .filter((_, idx) => idx < 4)
            .map((product) => (
            <ProductCard key={product.id} product={product}/> 
        ))}
        </Preview>
    </PreviewContainer>
)};
export default CategoryPreview;