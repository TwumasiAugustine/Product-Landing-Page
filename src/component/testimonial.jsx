import React, { useState, useRef, useEffect } from 'react';
import 'animate.css';
import data from '../data/testimonial.json';
import '../style/testimonial.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function Testimonial() {
	const [emailValue, setEmailValue] = useState('');
	const testimonialRef = useRef(null);

	const handleEmailChange = (event) => {
		setEmailValue(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		new Splide(testimonialRef.current, {
			type: 'loop',
			perPage: 1,
			autoplay: true,
			pauseOnHover: true,
			resetProgress: false,
			arrows: false,
			pagination: false
		})
	}, []);

	return (
		<div>
			<section className='testimonial' ref={testimonialRef}>
				<h2>What Our Customers Say</h2>
				<p className='short-info'>
					Our customers are happy with our products
				</p>
				<div className='splide__track'>
					<ul className='splide__list'>
						{data.map((item) => (
							<SplideSlide key={item.id}>
								<div className='testimonial-card'>
									<div className='testimonial-img'>
										<img
											src={item.image}
											alt={item.name}
											loading='lazy'
										/>
									</div>
									<div className='testimonial-info'>
										<p className='testimonial-text'>
											{item.text}
										</p>
										<div className='testimonial-user'>
											<h3 className='testimonial-user-name'>
												{item.name}
											</h3>
										</div>
										<small>{item.work}</small>
									</div>
								</div>
							</SplideSlide>
						))}
					</ul>
				</div>
			</section>
			<h2>Subscribe to Get Updates</h2>
			<p className='short-info'>Subscribe to get updates from us</p>
			<div className='subscribe'>
				<form action='#' id='form' onSubmit={handleSubmit}>
					<input
						type='email'
						placeholder='Your email address...'
						onChange={handleEmailChange}
						id='subEmail'
						name='subEmail'
						autoComplete='yes'
					/>
					<button
						id='subscribeBtn'
						type='submit'
						value={emailValue}
						aria-label='Subscribe'>
						Subscribe <i className='fa fa-paper-plane'></i>
					</button>
				</form>
			</div>
			<div className='downloadApp'>
				<h2>Download Our App</h2>
				<p className='short-info'>Download our app to get updates. </p>
				<div className='downloadApp-container'>
					<a href='#' target='_blank'>
						<i className='fab fa-apple'></i>
						App Store
					</a>
					<a href='#' target='_blank'>
						<i className='fab fa-google-play'></i>
						Play Store
					</a>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
