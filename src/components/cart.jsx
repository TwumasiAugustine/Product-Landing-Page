/* eslint-disable react/prop-types */
import React from 'react';
import { useGlobalContext } from '../context';
import CheckOut from './checkout';

const Cart = ({ openCart, openCartMenu }) => {
	const { removeCart, cart, handleQuantityChange } = useGlobalContext();

	return (
		<div className={`cart-container ${openCart ? 'open' : ''}`}>
			<div className='transparentSide' onClick={openCartMenu}></div>
			<div className='cartMenuSide'>
				<div className='cartMenu'>
					<h3>Cart List</h3>
					<button
						className='closeBtn'
						onClick={openCartMenu}
						aria-label='Close button'>
						<i className='fa fa-close'></i>
					</button>
				</div>
				<div className='cartList'>
					<div className='carts' key={cart}>
						{cart.length === 0 ? (
							<p className='cartEmpty'>
								Cart is empty{' '}
								<i className='fa fa-shopping-cart'></i>
							</p>
						) : (
							cart.map((item) => (
								<div className={`product-card`} key={item.id}>
									<div className='img-container'>
										<img
											src={`./images/${item.image}`}
											alt={item.productName}
											loading='lazy'
										/>
									</div>
									<div className='product-info'>
										<p className='product-name'>
											{item.productName}
										</p>
										<p className='brand'>{item.brand}</p>
										<span className='price'>
											${' '}
											{(
												item.price * item.quantity
											).toFixed(2)}
										</span>
										<div className='priQty'>
											<label htmlFor='quantity'>
												Qty
												<input
													type='number'
													value={item.quantity}
													name='quantity'
													id='qty'
													onChange={(e) =>
														handleQuantityChange(
															e,
															item
														)
													}
													min={1}
												/>
											</label>
											<button
												onClick={() =>
													removeCart(item.id)
												}
												aria-label='Remove from cart'>
												Remove
											</button>
										</div>
									</div>
								</div>
							))
						)}
					</div>
					<CheckOut />
				</div>
			</div>
		</div>
	);
};

export default Cart;
