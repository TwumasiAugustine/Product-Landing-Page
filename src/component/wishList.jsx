/* eslint-disable react/prop-types */

import React from 'react'
import { useGlobalContext } from '../context'
import '../style/wishList.css'
const WishList = ({openWishList, openWishListMenu}) => {
	const { addToCart, wishList, removeFromWishList } = useGlobalContext();

	return (
		<div className={`wishList-container ${openWishList ? 'open' : ''}`}>
			<div className='transparentSide' onClick={openWishListMenu}></div>
			<div className='wishMenuSide'>
				<div className='wishMenu'>
					<h3>WishList</h3>
					<button
						className='close'
						onClick={openWishListMenu}
						aria-label='Close menu'>
						<i className='fa fa-close'></i>
					</button>
				</div>
				<div className='wishLists'>
					{wishList.length === 0 ? (
						<div className='wishEmpty'>
							<p className='empty-text'>WishList is empty</p>
						</div>
					) : (
						wishList.map((product) => {
							const {
								id,
								image,
								productName: name,
								price,
								discount
							} = product;
							return (
								<div className='favorite-card' key={id}>
									<div className='img-container'>
										<img
											src={`./images/${image}`}
											alt={name}
											loading='lazy'
										/>
									</div>
									<div className='product-info'>
										<p className='product-name'>{name}</p>
										<div className='cost-container'>
											<span className='price'>
												$ {price}
											</span>
											<span className='discount'>
												$ <del>{discount}</del>
											</span>
										</div>
										<div className='btn-container'>
											<button
												title='Add To Cart'
												className='btn'
												onClick={() =>
													addToCart(product)
												}
												aria-label='Add to cart'>
												Cart
											</button>
											<button
												title='Remove From WishList'
												onClick={() =>
													removeFromWishList(
														product.id
													)
												}
												aria-label='Remove from cart'
												className='delete'>
												Remove
											</button>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default WishList;