import React, { useState, useEffect, useRef } from 'react';
import Table from '../component/table';
import 'animate.css';
import '../style/product.css';
import { useGlobalContext } from '../context';

function Products() {
    
    const bannerRef = useRef(null);
    const cardRef = useRef(null);
    const [showCard, setShowCard] = useState(false);

    const {
        productsData,
        addToCart,
        removeCart,
        handleQuantityChange,
        closeCartMenu,
        cart,
        subTotal,
        tax,
        total,
        addToWishListHandler,
        isFilled,
        removeFromWishList,
    } = useGlobalContext();

    const toggleWishlistItem = (product) => {
    if (isFilled(product)) {
        removeFromWishList(product.id); 
    } else {
        addToWishListHandler(product); 
    }
};
    useEffect(() => {
        const handleScroll = () => {
            const bannerRect = bannerRef.current.getBoundingClientRect();
            const cardRect = cardRef.current.getBoundingClientRect();
            if (bannerRect.top <= cardRect.top) {
                setShowCard(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section className="products" id="product">
            <h2>Our Awesome Products</h2>
            <p className="short-info">Product are good for our costumers</p>
            <div className="products-container">
                <div className="wrapper">
                    {productsData.map((product) => (
                        
                        <div className="product-card" key={product.id}>
                            <div className="img-container">
                                <img src={`./images/${product.image}`} alt={product.image} loading="lazy"/>
                            </div>
                            <div className="wishList-overlay">
                                <button className="wishList-btn" onClick={() => toggleWishlistItem(product)} aria-label='Add to wishlist'>
                                    {isFilled(product) ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
                                </button>
                            </div>
                            <div className="product-info">
                                <p className="product-name">{product.productName}</p>
                                <span className="price">$ {product.price}</span>
                                <span className="discount">
                                    $ <del>{product.discount}</del>
                                </span>
                                <button className="btn" onClick={() => addToCart(product)} aria-label='Add to cart'>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
                                                    id="quantity"
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
            <h2>Why Choose Us</h2>
            <p className="short-info">Our products are the best</p>
            <div className="banner" ref={bannerRef}>
                <div
                    className={`ourHeritage-card animate__animated ${showCard ? 'animate__slideInLeft' : ''}`}
                    ref={cardRef}
                >
                    <h3>Our Heritage</h3>
                    <p className="long-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a href='#'>Read More About Our History</a>
                </div>
            </div>
            <h2>Compare Similar Products</h2>
            <p className="short-info">Compare our products with other products</p>
            <div className="compareTable">
                <div className="table-container">
                    <Table />
                </div>
            </div>
        </section>
    );
}

export default Products;
