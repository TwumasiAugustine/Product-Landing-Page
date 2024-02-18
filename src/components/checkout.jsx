import React from 'react';
import { useGlobalContext } from '../context';
const CheckOut = () => {
	const { subTotal, tax, total } = useGlobalContext();

	return (
		<div className='total-container'>
			<div className='cart-total'>
				<div className='subtotal'>
					<span>Subtotal</span>
					<span>$ {subTotal.toFixed(2)}</span>
				</div>
				<div className='tax'>
					<span>Tax (15%):</span>
					<span>$ {tax.toFixed(2)}</span>
				</div>
				<div className='total'>
					<span>Total:</span>
					<span>$ {total.toFixed(2)}</span>
				</div>
				<div className='btn-container'>
					<button
						className='checkout-btn'
						id='checkout'
						aria-label='Checkout'>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
