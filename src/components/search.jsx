/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchList = ({openSearch, openSearchMenu}) => {
	const { productsData, addToCart } = useGlobalContext();
	const [search, setSearch] = useState('');
	const searchContainerRef = useRef(null);
	const inputRef = useRef(null);

	const filterElements = productsData.filter((product) => {
		const { brand, color, category, productName: name } = product;

		const findItem = search.toLowerCase().trim();
		return (
			brand.toLowerCase().includes(findItem) ||
			color.toLowerCase().includes(findItem) ||
			category.toLowerCase().includes(findItem) ||
			name.toLowerCase().includes(findItem)
		);
	});

	const searchedProducts = filterElements.map((product) => {
		const {
			id,
			image,
			brand,
			productName: name,
			price
		} = product;

		return (
			<div className='cards-container' key={id}>
				<div className='card'>
					<div className='card-image'>
						<img
							src={`./images/${image}`}
							alt={name}
						loading='lazy'
						/>
					</div>
					<div className='card-content'>
						<p>Brand: {brand}</p>
						<p>Price: $ {price}</p>
						<button
							type='button'
							id='addToCart'
							onClick={() => addToCart(product)}>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		);
	});
	
	return (
		<div className={`search-container ${openSearch ? 'open' : ''}`} ref={searchContainerRef}>
			<div className='transparent-side' onClick={openSearchMenu}></div>
			<div className='search-side'>
				<div className='search'>
					<h3>Search our Site</h3>
					<button
						className='close'
						onClick={openSearchMenu}
						aria-label='Close'>
						<i className='fa fa-close'></i>
					</button>
				</div>
				<div className='search-list'>
					<input
						type='text'
						ref={inputRef}
						placeholder='Search by color, brand or name'
						onChange={(e) => setSearch(e.target.value)}
						autoFocus
						id='search'
						name='search'
					/>
					<i className='fa fa-magnifying-glass'></i>
					<div className='search-products'>
						{search.length > 0 ? (
							searchedProducts
						) : (
							<p>No results found.</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchList;
