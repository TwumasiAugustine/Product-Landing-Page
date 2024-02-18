/* eslint-disable react/prop-types */
// Banner.js

import React from 'react';
import '../style/collection.css'
const Banner = ({ title, description }) => {
	return (
		<div className='banner-container animated-banner'>
			<div className='banner-content'>
				<div className='icon'>
					<i className='fas fa-gift'></i>
				</div>
				<div className='text-content'>
					<h2 className='banner-title'>{title}</h2>
					<p className='banner-description'>{description}</p>
				</div>
				<div className='icon'>
					<i className='fas fa-star'></i>
				</div>
			</div>
		</div>
	);
};

export default Banner;
