import React, {useState, useEffect, useRef} from 'react';
import Table  from './table';
import cartData from './product.json';
import 'animate.css'



function Products(props){
    // Slide Cards
    const bannerRef = useRef(null)
    const cardRef = useRef(null);
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bannerRect = bannerRef.current.getBoundingClientRect()
            const cardRect = cardRef.current.getBoundingClientRect()
            if (bannerRect.top <= cardRect.top) {
                setShowCard(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const [cart,setCart] = useState([])
    const [products, setProducts] = useState([]);

    // Cart Notification
    const [cartCount, setCartCount] = useState(0);
    
    useEffect(() => {
        const cartNotification = document.querySelector('.notification')
        cartNotification.innerHTML = cart.length
    }, [cart])

    // Save cart to local
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'))
        if (storedCart) {
            setCart(storedCart)
        }
    }, []);

    // Add To Cart

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if(existingItem) {
            const updateItem = {...existingItem, quantity: existingItem.quantity + 1}
            const updatedCart = cart.map((item) => item.id === existingItem.id ? updateItem : item);
            setCart(updatedCart);
        }else {
            const newItem = {...product, quantity: 1};
            setCart([...cart, newItem])
        }
        //Store the updated cart data in local storage
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    const removeCart = (item) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
        //Store the updated cart data in local storage
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    // Increase Product Quantity
    const handleQuantityChange = (event, item) => {
        const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
        return { ...item, quantity: parseInt(event.target.value) };
        } else {
            return cartItem;
        }
    });
        setCart(newCart);
    };
    // Calculations
    const calculateTotal = () => {
        const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        return { subTotal, tax, total };
    };
    
    const {subTotal,tax,total} = calculateTotal();
    // Close Cart menu

    const closeCartMenu = () => {
        const cartSlideOff = document.querySelector('.cart-container')
        cartSlideOff.classList.remove('cartOpen')
    }
    // Products Auto Scroll
    

    return (
        <section className='products' id='product'>
            <h2>Our Awesome Products</h2>
            <p className='short-info'>Product are good for our costumers</p>
            <div className='products-container'>
                <div className='wrapper'>
                {cartData.map(product => (
                <div className='product-card' key={product.id} item={product}>
                    <div className='img-container'>
                        <img src={`../public/images/${product.image}`} alt='watch'/>                    
                    </div>
                    <div className='product-info'>
                        <p className='product-name'>{product.productName}</p>
                        <span className='price'>$ {product.price}</span>
                        <span className='discount'>$ <del>{product.discount}</del></span>
                        <button className='btn' onClick= {() => addToCart(product)}>Add To Cart</button>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className='cart-container'>
                <div className='transparentSide'>
                </div>
                <div className='cartMenuSide'>
                    <div className='cartMenu'>
                    <h3>Cart List</h3>
                    <button className='closeBtn' onClick={() => closeCartMenu()}><i className='fa fa-close'></i></button>
                </div>
                    <div className='carts'>
                        {cart.length === 0 ? ( <p className='cartEmpty'>Cart is empty <i className='fa fa-shopping-cart'></i></p> ) : (
                            cart.map((item) => (
                            <div className={`product-card`} key={item.id}>
                                <div className="img-container">
                                    <button onClick={() => removeCart(item)}>
                                        <i className="fa fa-close"></i>
                                    </button>
                                    <img src={`../public/images/${item.image}`} alt="watch" />
                                </div>
                                <div className="product-info">
                                <p className="product-name">{item.productName}</p>
                                <div className="priQty">
                                    <span className="price">
                                        $ {(item.price * item.quantity).toFixed(2)}
                                    </span>
                                    <label htmlFor="quantity">
                                        Qty 
                                        <input type="number"  value={item.quantity} name="quantity"
                                        onChange={(e) => handleQuantityChange(e, item)}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                    <div className='total-container'>
                        <div className='cart-total'>
                            <div className='subtotal'> 
                                <span>Subtotal</span>
                                <span>$ {subTotal.toFixed(2)}</span>
                            </div>
                            <div className='tax'>
                                <span>Tax (15%):</span>
                                <span>$ {tax.toFixed(2)}</span>
                            </div>
                            <div className='total'>
                                <span>Total:</span>
                                <span>$ {total.toFixed(2)}</span>
                            </div>
                            <div className='btn-container'>
                                <button className='checkout-btn'>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <h2>Why Choose Us</h2>
            <p className='short-info'>Our products are the best</p>
            <div className='banner' ref={bannerRef}>
                <div className={`ourHeritage-card animate__animated ${showCard ? 'animate__slideInLeft' : '' }`} ref={cardRef}>
                    <h3>Our Heritage</h3>
                    <p className='long-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button>Read More About Our History</button>
                </div>
            </div>
            <h2>Compare Similar Products</h2>
            <p className='short-info'>Compare our products with other products</p>
            <div className='compareTable'>
                <div className='table-container'>
                    <Table/>
                </div>
            </div>
        </section>
    )
}

export default Products;