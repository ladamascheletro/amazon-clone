import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct( { title, image, price, rating } ) {
    return (
        <div className="chackoutProduct">
            <img 
                src={image} 
                className="checkout__product__image" 
            />
            <div className="checkout__product__info">
                <p>{title}</p>
                <div className="checkout__product__price">
                    <p>$</p>
                    <strong>{price}</strong>
                </div>
                <div className="checkout__product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>
                    ))}
                </div>
                <button className="checkout__product__button">Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
