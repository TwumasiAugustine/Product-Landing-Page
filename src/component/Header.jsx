import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import CollectionNav from '../component/collectionNav';
import FirstHeader from '../component/firstHeader';
import SecondHeader from '../component/secondHeader'
import MaterialNav from '../component/material';
import Styles from '../component/styles';
import { useGlobalContext } from '../context';
import '../style/Header.css';
import Account from './account';
import Cart from './cart';
import Search from './search';
import WishList from './wishList';

function Header() {
	const { cartCount, wishListCount } = useGlobalContext();

	const [sticky, setSticky] = useState(false);
	const [openAccMenu, setOpenAccMenu] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);
	const [openWishList, setOpenWishList] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const openNavMenu = () => {
		setOpenNav(!openNav);
        console.log('clicked')
	};

	const openCartMenu = () => {
		setOpenCart(!openCart);
	};

	const openSearchMenu = () => {
		setOpenSearch(!openSearch);
	};

	const openAccountMenu = () => {
		setOpenAccMenu(!openAccMenu);
	};
	const openWishListMenu = () => {
		setOpenWishList(!openWishList);
	};
	return (
		<header id='header' className='header'>
			<FirstHeader />
			<SecondHeader />
			<div className={sticky ? 'mainHeader sticky' : 'mainHeader'}>
				<div className='mobileMenu'>
					<button
						type='button'
						className='navBtn openNav'
						onClick={openNavMenu}
						aria-label='Mobile menu'>
						<i className='fa fa-navicon'></i>
					</button>
				</div>
				<div className='logo'>
					<Link to='/'>
						<img src={Logo} alt='Klassic watches' />
						Klassic
					</Link>
				</div>
				<div className={`nav-container`}>
					<nav>
						<div className='closeNav'>
							<button
								type='button'
								className='navBtn closeNav'
								aria-label='Close nav menu'>
								<i className='fa fa-close'></i>
							</button>
						</div>
						<div className='hoverDropdownMenu'>
							<div className='dropdown'>
								<Link
									to='/page/collection'
									className='dropbtn'
									aria-label='dropdown menu'>
									Collections
									<i className='fa fa-caret-down'></i>
								</Link>
								<div className='dropdown-content'>
									<CollectionNav />
								</div>
							</div>
						</div>
						<div className='hoverDropdownMenu'>
							<div className='dropdown'>
								<Link
									to='/page/collection'
									className='dropbtn'
									aria-label='dropdown menu'>
									Materials
									<i className='fa fa-caret-down'></i>
								</Link>
								<div className='dropdown-content'>
									<MaterialNav />
								</div>
							</div>
						</div>
						<div className='hoverDropdownMenu'>
							<div className='dropdown'>
								<Link
									to='/page/collection'
									className='dropbtn'
									aria-label='dropdown menu'>
									Styles <i className='fa fa-caret-down'></i>
								</Link>
								<div className='dropdown-content'>
									<Styles />
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div className='nav-icons'>
					<div className='search'>
						<button
							type='button'
							className='btn'
							onClick={openSearchMenu}
							title='Search Products'
							aria-label='Open search menu'>
							<i className='fas fa-search'></i>
						</button>
						<Search
							openSearchMenu={openSearchMenu}
							openSearch={openSearch}
						/>
					</div>
					<div className='cart'>
						<button
							className='btn'
							onClick={openCartMenu}
							title='Cart Menu'
							aria-label='Open cart menu'>
							<i className='fas fa-shopping-cart'></i>
						</button>
						<span className='notification'>{cartCount}</span>
						<Cart openCartMenu={openCartMenu} openCart={openCart} />
					</div>
					<div className='user'>
						<button
							className='btn'
							onClick={openAccountMenu}
							aria-label='Open account menu'>
							<i className='fas fa-user' title='User Account'></i>
						</button>
						<Account
							openAccMenu={openAccMenu}
							openAccountMenu={openAccountMenu}
						/>
					</div>
					<div className='wishList'>
						<button
							className='btn'
							onClick={openWishListMenu}
							aria-label='Open wishlist menu'>
							<i className='fas fa-heart' title='Wish List'></i>
						</button>
						<span className='notification'>{wishListCount}</span>
						<WishList
							openWishListMenu={openWishListMenu}
							openWishList={openWishList}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;
