import React, { useContext, useEffect, useState } from 'react'
import productsData from './data/product.json';

const AppContext = React.createContext()


// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [wishListCount, setWishListCount] = useState(0)
    const [wishList, setWishList] = useState([])
    const [updateProductData, setUpdateProductData] = useState(productsData);

    useEffect(() => {
        const productData = localStorage.getItem('productData')
        if (productData) {
            setUpdateProductData(JSON.parse(productData))
        }
    }, [])

    // Fetch cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);
    
    
    useEffect(() => {
        const savedWishList = localStorage.getItem('wishList');
        if (savedWishList) {
            setWishList(JSON.parse(savedWishList));
        }
    }, [])

    function addToWishListHandler ({ id }) {
        const existingItem = wishList.find((item) => item.id === id);

        if (existingItem) return 
        
        const product = productsData.find((item) => item.id === id);
        const updateWishList = [...wishList, product]

        setWishList(updateWishList)
        localStorage.setItem('productData', JSON.stringify(updateProductData))

        localStorage.setItem('wishList', JSON.stringify(updateWishList))
    }
    
    function isFilled (product) {
        return wishList.some((item) => item.id === product.id)

    }

    function removeFromWishList (productId) {
        const updateWishList = wishList.filter((item) => item.id !== productId)
        setWishList(updateWishList)
        localStorage.setItem('wishList', JSON.stringify(updateWishList))
    }

    useEffect(() => {
        setWishListCount(wishList.length)
    }, [wishList])

    useEffect(() => {
        setCartCount(cart.length)
    }, [cart])

        const addToCart = (product) => {
            const existingItem = cart.find((item) => item.id === product.id);
            if (existingItem) {
                const updateItem = { ...existingItem, quantity: existingItem.quantity + 1 };
                const updatedCart = cart.map((item) => (item.id === existingItem.id ? updateItem : item));
                setCart(updatedCart);
            } else {
                const newItem = { ...product, quantity: 1 };
                setCart([...cart, newItem]);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        };

    const removeCart = (productId) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== productId);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

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
    
    const calculateTotal = () => {
        const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        return { subTotal, tax, total };
    };

    const { subTotal, tax, total } = calculateTotal();

    const closeCartMenu = () => {
        const cartSlideOff = document.querySelector('.cart-container');
        cartSlideOff.classList.remove('cartOpen');
    };
    return (
        <AppContext.Provider value={{
            closeCartMenu,
            handleQuantityChange,
            removeCart, addToCart,
            productsData: updateProductData,
            cart, subTotal,
            tax, total,
            addToWishListHandler,
            removeFromWishList,
            cartCount,
            wishList,
            wishListCount,
            isFilled
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
