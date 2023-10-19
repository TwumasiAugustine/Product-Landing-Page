import React, { useState } from 'react';
import { useGlobalContext } from '../src/context';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../src/style/collection.css';
import '../src/style/product.css';


const Products = () => {
	const {
		productsData,
		addToCart,
		addToWishListHandler,
		isFilled,
		ToastContainer,
		removeFromWishList,
		removeFromWishListNotify,
		addToWishListNotify
	} = useGlobalContext();

	const [filters, setFilters] = useState({
		brand: '',
		category: '',
		color: ''
	});

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		setFilters({ ...filters, [name]: value });
	};
	const toggleWishlistItem = (product) => {
		if (isFilled(product)) {
			removeFromWishList(product.id);
			removeFromWishListNotify();
		} else {
			addToWishListHandler(product);
			addToWishListNotify();
		}
	};

	// Get unique values for brand, category, and color
	const uniqueBrands = [
		...new Set(productsData.map((product) => product.brand))
	];
	const uniqueColors = [
		...new Set(productsData.map((product) => product.color))
	];
	const uniqueCategories = [
		...new Set(productsData.map((product) => product.category))
	];
	//
	const filteredProducts = productsData.filter((product) => {
		return (
			(filters.brand === '' || product.brand === filters.brand) &&
			(filters.category === '' ||
				product.category === filters.category) &&
			(filters.color === '' || product.color === filters.color)
		);
	});

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
				perPage: 3,
				perMove: 1,
				height: 'auto',
				arrows: false
			},
			768: {
				perPage: 4,
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
		<>
			<div className='products-collections'>
				<div className='filteredElements'>
					<select onChange={handleFilterChange} name='brand'>
						<option value=''>All Brands</option>
						{uniqueBrands.map((brand) => (
							<option key={brand} value={brand}>
								{brand}
							</option>
						))}
					</select>
					<select onChange={handleFilterChange} name='category'>
						<option value=''>All Styles</option>
						{uniqueCategories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
					<select onChange={handleFilterChange} name='color'>
						<option value=''>All Materials</option>
						{uniqueColors.map((color) => (
							<option key={color} value={color}>
								{color}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='products-carousel'>
				<div className='product-container'>
					<Splide options={options}>
						<SplideTrack>
							{filteredProducts.map((product) => (
								<SplideSlide key={product.id}>
									<div
										className='product card'
										style={{ position: 'relative' }}>
										<div className='product-image'>
											<img
												src={`../images/${product.image}`}
												alt={product.name}
												className='card-img-top'
											/>
										</div>
										<div className='product-info card-body'>
											<h4 className='card-title'>
												{product.name}
											</h4>
											<div className='price-info'>
												<p className='price card-text'>
													${product.price}
												</p>
												<p className='discount card-text'>
													${product.discount}
												</p>
											</div>
										</div>
										<div className='availability card-footer'>
											{product.availability}
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
													toggleWishlistItem(product)
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
							))}
						</SplideTrack>
					</Splide>
				</div>
				<ToastContainer />
			</div>
		</>
	);
};

export default Products;
