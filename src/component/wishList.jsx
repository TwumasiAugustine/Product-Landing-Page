
import React from 'react'
import { useGlobalContext } from '../context'
import '../style/wishList.css'
const WishList = () => {
	const { addToCart, wishList, removeFromWishList } = useGlobalContext();

	const closeWishlist = () => {
		const wishListContainer = document.querySelector('.wishList-container');
		wishListContainer.classList.remove('wishOpen');
	}


	return (
		<div className='wishList-container'>
			<div className='transparentSide'></div>
			<div className='wishMenuSide'>
				<div className='wishMenu'>
					<h3>WishList</h3>
					<button
						className='close'
						onClick={closeWishlist}
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
								discount,
								category,
								brand
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
										<p className='category'>{category}</p>
										<p className='brand'>{brand}</p>
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
												className='btn'
												onClick={() =>
													addToCart(product)
												}
												aria-label='Add to cart'>
												Add To Cart
											</button>
											<button
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