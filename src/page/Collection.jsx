import React from 'react';
import Banner from '../components/banner';
import BestSellers from '../components/bestSellers';
import NewProducts from '../components/newProducts';

function Collection() {
	return (
		<div className='compareCollection'>
			<Banner
				title='Best Sellers Collection'
				description='Explore our curated selection of top-rated products. Shop the best in quality and style.'
			/>

			<BestSellers />
			<Banner
				title='New Arrivals Special'
				description='Discover the latest trends in fashion and technology. Elevate your style today!'
			/>

			<NewProducts />
			<Banner
				title='Year-End Clearance Sale'
				description='Enjoy exclusive discounts on our top products. Limited time offer, shop now!'
			/>
		</div>
	);
}

export default Collection;
