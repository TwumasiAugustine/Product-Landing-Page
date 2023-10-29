import React from 'react';
import Table from '../src/component/table';
import ChooseUs from '../src/component/chooseUs';
import 'animate.css';
import '../src/style/product.css';

import { useGlobalContext } from '../src/context';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Home = () => {

	const {
		productsData,
		addToCart,
		addToWishListHandler,
		isFilled,
		removeFromWishList,
		removeFromWishListNotify,
		addToWishListNotify,
		ToastContainer
	} = useGlobalContext();

	const toggleWishlistItem = (product) => {
		if (isFilled(product)) {
			removeFromWishList(product.id);
			removeFromWishListNotify();
		} else {
			addToWishListHandler(product);
			addToWishListNotify();
		}
	};

	const options = {
		type: 'loop',
		gap: '1rem',
		drag: 'free',
		autoplay: true,
		pauseOnHover: true,
		resetProgress: false,
		perPage: 6,
		perMove: 4,
		arrows: true,
		pagination: false,
		lazyLoad: 'nearby',
		height: '300px',
		breakpoints: {
			640: {
				perPage: 2,
				perMove: 2,
				height: 'auto',
				arrows: false
			},
			768: {
				perPage: 3,
				perMove: 2,
				height: 'auto',
				arrows: false
			},
			1024: {
				perPage: 4,
				perMove: 4,
				height: 'auto'
			}
		}
	};

	return (
		<section  id='product'>
			<h2>Our Awesome Products</h2>
			<p className='short-info'>Our watches are of good quality for our customers</p>
			<div className='products-container'>
				<div className='wrapper'>
					<Splide
						options={options}
						aria-labelledby='products'
						hasTrack={false}>
						<SplideTrack>
							{productsData.map((product) => {
								const {
									id,
									image,
									name,
									price,
									discount,
									availability
								} = product;
								return (
									<SplideSlide key={id}>
										<div
											className='product card'
											style={{ position: 'relative' }}>
											<div className='product-image'>
												<img
													src={`../images/${image}`}
													alt={name}
													className='card-img-top'
												/>
											</div>
											<div className='product-info card-body'>
												<h4 className='card-title'>
													{name}
												</h4>
												<div className='price-info'>
													<p className='price card-text'>
														${price}
													</p>
													<p className='discount card-text'>
														${discount}
													</p>
												</div>
											</div>
											<div className='availability card-footer'>
												{availability}
											</div>
											<div className='btn-container card-footer'>
												<button
													className='cart-btn btn btn-primary'
													onClick={() =>
														addToCart(product)
													}>
													Add to Cart
												</button>
												<button
													className={`wish-btn btn ${
														isFilled(product)
															? 'btn-filled'
															: 'btn-outline-primary'
													}`}
													onClick={() =>
														toggleWishlistItem(
															product
														)
													}
													title='Add to wishlist'>
													{isFilled(product) ? (
														<i className='fas fa-heart'></i>
													) : (
														<i className='far fa-heart'></i>
													)}
												</button>
											</div>
										</div>
									</SplideSlide>
								);
							})}
						</SplideTrack>
					</Splide>
				</div>
			</div>
			<ToastContainer />
			<div className='chooseUs'>
				<h2>Why Choose Us</h2>
				<p className='short-info'>Our products are the best</p>
				<ChooseUs />
			</div>
			<h2>Compare Similar Watches</h2>
			<p className='short-info'>
				Compare our products with other products
			</p>
			<div className='compareTable'>
				<div className='table-container'>
					<Table />
				</div>
			</div>
		</section>
	);
};

export default Home;
