import React, {useState, useEffect} from 'react';
import 'animate.css';
import Logo from './assets/logo.png'
import CollectionNav from './collectionNav';
import MaterialNav from './material';
import Styles from './styles';
import FirstHeader from './firstHeader';
import  './Header.css'


function Header() {
    // Add sticky to .secondHeader on window scroll with animation
    const [sticky, setSticky] = useState(false);

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
        }
    }, []);
    
    const openMobileNav = () => {
        const navContainer = document.querySelector('.nav-container')
        navContainer.classList.add('openMenu')
        console.log('clicked')
    }

    const openCartMenu = () => {
        const cartContainer = document.querySelector('.cart-container')
        cartContainer.classList.add('cartOpen')
    };

    const openSearchMenu = () => {
        const searchContainer = document.querySelector('.search-container')
        searchContainer.classList.add('searchOpen')
    }

    const openAccountMenu = () => {
        const accountMenu = document.querySelector('.user-account')
        accountMenu.classList.add('open')
    }
    return (
    <header id="header" className='header'>
        <FirstHeader/>
            <div className={sticky ? 'secondHeader sticky' : 'secondHeader'} >
                <div className='mobileMenu'>
                    <button type='button' className='navBtn openNav' onClick={() => openMobileNav()}><i className='fa fa-navicon'></i></button>
            </div>
            <div className='logo'>
                <a href='#'>
                    <img src={Logo} alt='Klassic watches'/>
                    Klassic Watches
                </a>
            </div>
            <div className='nav-container'>
                    <nav>
                        <div className='closeNav'>
                            <button type='button' className='navBtn closeNav'>
                                <i className='fa fa-close'></i>
                            </button>
                        </div>
                    <div className='hoverDropdownMenu'>
                        <div className='dropdown'>
                            <button className='dropbtn'>Collections <i className='fa fa-caret-down'></i></button>
                            <div className='dropdown-content'>
                                <CollectionNav />
                            </div>
                        </div>
                    </div>
                    <div className='hoverDropdownMenu'>
                        <div className='dropdown'>
                            <button className='dropbtn'>Materials <i className='fa fa-caret-down'></i></button>
                            <div className='dropdown-content'>
                                <MaterialNav />
                            </div>
                        </div>
                    </div>
                    <div className='hoverDropdownMenu'>
                        <div className='dropdown'>
                            <button className='dropbtn'>Styles <i className='fa fa-caret-down'></i></button>
                            <div className='dropdown-content'>
                                <Styles />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='nav-icons'>
                <div className='search'>
                    <button type='button' className='btn' onClick={() => openSearchMenu()} title='Search Products'><i className='fas fa-search'></i></button>
                </div>
                <div className='cart'>
                    <button className='btn' onClick={() => openCartMenu()} title='Cart Shop'>
                        <i className='fas fa-shopping-cart' ></i>
                    </button>
                    <span className='notification'>0</span>
                </div>
                <div className='user'>
                    <button className='btn' onClick={() => openAccountMenu()}><i className='fas fa-user' title='User Account'></i></button>
                </div>
                <div className='wishList'>
                    <button>
                        <i className='fas fa-heart' title='Wish List'></i>
                    </button>
                    <span className='notification'>0</span>
                </div>
            </div>
        </div>
    </header>
    );
}
export default Header;