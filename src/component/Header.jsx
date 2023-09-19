import React, { useState, useEffect } from 'react';
import 'animate.css';
import Logo from '../assets/logo.png';
import CollectionNav from '../component/collectionNav';
import MaterialNav from '../component/material';
import Styles from '../component/styles';
import FirstHeader from '../component/firstHeader';
import { useGlobalContext } from '../context';
import '../style/Header.css';

function Header() {
    // Add sticky to .secondHeader on window scroll with animation
    const [sticky, setSticky] = useState(false);
    const { cartCount, wishListCount } = useGlobalContext();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    setSticky(true);
                } else {
                    setSticky(false);
                }
            });
        };
    }, []);

    const openNavMenu = () => {
        const navMenu = document.querySelector('.nav-container');
        navMenu.classList.add('openMenu');
    };
    const closeNavMenu = () => {
        const navMenu = document.querySelector('.nav-container');
        navMenu.classList.remove('openMenu');
    };

    const openCartMenu = () => {
        const cartContainer = document.querySelector('.cart-container');
        cartContainer.classList.add('cartOpen');
    };

    const openSearchMenu = () => {
        const searchContainer = document.querySelector('.search-container');
        searchContainer.classList.add('searchOpen');
    };

    const openAccountMenu = () => {
        const accountMenu = document.querySelector('.user-account');
        accountMenu.classList.add('open');
    };
    const openWishList = () => {
        const wishList = document.querySelector('.wishList-container');
        wishList.classList.add('wishOpen');
    }
    return (
        <header id="header" className="header">
            <FirstHeader />
            <div className={sticky ? 'secondHeader sticky' : 'secondHeader'}>
                <div className="mobileMenu">
                    <button type="button" className="navBtn openNav" onClick={openNavMenu} aria-label='Mobile menu'>
                        <i className="fa fa-navicon"></i>
                    </button>
                </div>
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="Klassic watches" />
                        Klassic 
                    </a>
                </div>
                <div className={`nav-container`}>
                    <nav>
                        <div className="closeNav">
                            <button type="button" className="navBtn closeNav" onClick={closeNavMenu} aria-label='Close nav menu'>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                        <div className="hoverDropdownMenu">
                            <div className="dropdown">
                                <button className="dropbtn" aria-label='dropdown menu' >
                                    Collections <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <CollectionNav />
                                </div>
                            </div>
                        </div>
                        <div className="hoverDropdownMenu">
                            <div className="dropdown">
                                <button className="dropbtn" aria-label='dropdown menu'>
                                    Materials <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <MaterialNav />
                                </div>
                            </div>
                        </div>
                        <div className="hoverDropdownMenu">
                            <div className="dropdown">
                                <button className="dropbtn" aria-label='dropdown menu'>
                                    Styles <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                    <Styles />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="nav-icons">
                    <div className="search">
                        <button type="button" className="btn" onClick={openSearchMenu} title="Search Products" aria-label='Open search menu'>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="cart">
                        <button className="btn" onClick={openCartMenu} title="Cart Shop" aria-label='Open cart menu'>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                        <span className="notification">{cartCount}</span>
                    </div>
                    <div className="user">
                        <button className="btn" onClick={ openAccountMenu} aria-label='Open account menu'>
                            <i className="fas fa-user" title="User Account"></i>
                        </button>
                    </div>
                    <div className="wishList">
                        <button className='btn' onClick={openWishList} aria-label='Open wishlist menu'> 
                            <i className="fas fa-heart" title="Wish List"></i>
                        </button>
                        <span className="notification">{wishListCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
