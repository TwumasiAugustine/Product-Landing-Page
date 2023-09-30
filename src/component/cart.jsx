import React from 'react'
import { useGlobalContext } from '../context'

const Cart = () => {
    const { removeCart, closeCartMenu, cart, handleQuantityChange, total, subTotal, tax } = useGlobalContext();
    return(
        <div className="cart-container">
                <div className="transparentSide"></div>
                <div className="cartMenuSide">
                    <div className="cartMenu">
                        <h3>Cart List</h3>
                        <button className="closeBtn" onClick={() => closeCartMenu()} aria-label='Close button'>
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                    <div className="carts" key={cart}>
                        {cart.length === 0 ? (
                            <p className="cartEmpty">
                                Cart is empty <i className="fa fa-shopping-cart"></i>
                            </p>
                        ) : (
                            cart.map((item) => (
                                <div className={`product-card`} key={item.id}>
                                    <div className="img-container">
                                        <img src={`./images/${item.image}`} alt="watch" loading="lazy"/>
                                    </div>
                                    <div className="product-info">
                                        <p className="product-name">{item.productName}</p>
                                        <p className='brand'>{ item.brand}</p>
                                            <span className="price">$ {(item.price * item.quantity).toFixed(2)}</span>
                                        <div className="priQty">
                                            <label htmlFor="quantity">
                                                Qty 
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    name="quantity"
                                                    id="qty"
                                                    onChange={(e) => handleQuantityChange(e, item)}
                                                    min={1}
                                                />
                                            </label>
                                            <button onClick={() => removeCart(item.id)} aria-label='Remove from cart'>
                                            Remove
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="total-container">
                            <div className="cart-total">
                                <div className="subtotal">
                                    <span>Subtotal</span>
                                    <span>$ {subTotal.toFixed(2)}</span>
                                </div>
                                <div className="tax">
                                    <span>Tax (15%):</span>
                                    <span>$ {tax.toFixed(2)}</span>
                                </div>
                                <div className="total">
                                    <span>Total:</span>
                                    <span>$ {total.toFixed(2)}</span>
                                </div>
                                <div className="btn-container">
                                    <button className="checkout-btn" id='checkout' aria-label='Checkout'>Checkout</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Cart