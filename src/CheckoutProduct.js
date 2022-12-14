import React from 'react'
import './CheckoutProduct.css'
import {useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log(id, title, image, price, rating)

    const removeFromBasket = () => {
        // remove from basket..
        dispatch({
            type: "REMOVE FROM BASKET", 
            id: id,
        });
    };
    
    return (
        <div className="chekoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
 
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
