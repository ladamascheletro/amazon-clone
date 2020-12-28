import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({title, price, image, rating}) {
    const [ {basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <p>$</p>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>
                    ))}
                </div>
                
            </div>
            <img 
                src={image} 
                className="product__image" 
            />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
