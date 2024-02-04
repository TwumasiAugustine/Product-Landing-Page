import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';
import { useGlobalContext } from '../context';
import CollectionData from '../data/table.json';
import '../style/collection.css';
function BestSellers() {
	const {
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
		autoplay: false,
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
				arrows: true
			},
			768: {
				perPage: 3,
				perMove: 2,
				height: 'auto',
				arrows: true
			},
			1024: {
				perPage: 4,
				perMove: 4,
				height: 'auto'
			}
		}
	};
	return (
		<>
			<h2 className='sellers'>Best Sellers</h2>
			<p>
				Discover top picks – the Best Seller section showcases our most
				loved and sought-after products.
			</p>
			<div className='best-sellers products-container'>
				<div className='wrapper'>
					<Splide
						options={options}
						aria-labelledby='products'
						hasTrack={false}>
						<SplideTrack>
							{CollectionData.map((product) => {
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
		</>
	);
}


export default BestSellers;