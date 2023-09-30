import React from 'react';
import Table from '../component/table';
import Cart from '../component/cart';
import ChooseUs from '../component/chooseUs';
import 'animate.css';
import '../style/product.css';
import { useGlobalContext } from '../context';

function Products() {
    
    const {
        productsData,
        addToCart,
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
            <Cart/>
            <h2>Why Choose Us</h2>
            <p className="short-info">Our products are the best</p>
            <ChooseUs/>
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
