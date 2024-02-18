import React, { useState, useRef} from 'react';
import 'animate.css';
import data from '../data/testimonial.json';
import '../style/testimonial.css'; 
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

function Testimonial() {
	const [emailValue, setEmailValue] = useState('');
	const testimonialRef = useRef(null);

	const handleEmailChange = (event) => {
		setEmailValue(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!emailValue) return;
		
	};

	const options = {
		type: 'loop',
		gap: '1rem',
		autoplay: true,
		interval: 3000,
		pauseOnHover: true,
		resetProgress: false,
		focus: 'center',
		arrows: true,
		pagination: true,
		lazyLoad: 'nearby',
		height: 'auto',
		rewind: true,
		breakpoints: {
			640: {
				perPage: 2,
				perMove: 1,
				arrows: true,
				height: 'auto'
			},
			768: {
				perPage: 2,
				perMove: 1,
				arrows: false,
				height: 'auto'
			},
			1024: {
				perPage: 3,
				perMove: 1,
				height: 'auto'
			}
		}
	};

	return (
		<section>
			<div className='testimonial' ref={testimonialRef}>
				<h2>What Our Customers Say</h2>
				<p className='short-info'>
					Our customers are happy with our products
				</p>
				<div className='wrapper'>
					<Splide
						aria-labelledby='testimonials'
						option={options}>
						<SplideTrack>
							{data.map((testimonial) => {
								const { id, image, name, text, work } =
									testimonial;
								return (
									<SplideSlide key={id}>
										<div className='testimonial-card'>
											<div className='testimonial-img'>
												<img
													src={image}
													alt={name}
													loading='lazy'
												/>
											</div>
											<div className='testimonial-info'>
												<p className='testimonial-text'>
													{text}
												</p>
												<div className='testimonial-user'>
													<h3 className='testimonial-user-name'>
														{name}
													</h3>
												</div>
												<small>{work}</small>
											</div>
										</div>
									</SplideSlide>
								);
							})}
						</SplideTrack>
					</Splide>
				</div>
			</div>
			<div className='subscribe'>
				<h2>Subscribe to Get Updates</h2>
				<p className='short-info'>Subscribe to get updates from us</p>
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
						Subscribe
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
		</section>
	);
}

export default Testimonial;
