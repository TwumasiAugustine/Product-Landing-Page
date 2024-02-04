/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../style/About.css'
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='about-page' id='about'>
			<nav className='backHome'>
				<Link to='/'>
					<i className='fa fa-arrow-left'></i> Back
				</Link>
			</nav>
			<section className='intro'>
				<h2>Introduction</h2>
				<p>
					Welcome to Klassic Watches, your premier destination for
					exquisite timepieces. Established with a deep passion for
					horology, we curate a collection of watches that seamlessly
					blend timeless elegance with modern innovation. Our
					commitment to quality, precision, and style has made us a
					trusted name in the world of watches.
				</p>
			</section>
			<section className='history'>
				<h2>Our History</h2>
				<p>
					Klassic Watches traces its roots back to 2010, a pivotal
					year in the world of horology. From its inception, Klassic
					Watches embarked on a journey to redefine the watch
					industry. We set out to offer a collection of timepieces
					that fuse timeless design with modern technology. Over the
					years, our commitment to excellence has allowed us to evolve
					into a trusted name in the world of watches.
				</p>
				<p>
					We've achieved remarkable milestones and garnered a loyal
					customer base through our dedication to quality, innovation,
					and customer satisfaction. The history of Klassic Watches is
					a story of passion, craftsmanship, and a relentless pursuit
					of perfection.
				</p>
			</section>
			<section className='team'>
				<h2>Our Team</h2>
				<p>
					Meet the dedicated professionals who make Klassic Watches
					special:
				</p>
				<ul>
					<li>
						<strong>Dr. Twumasi Augustine</strong> - Founder & CEO
					</li>
					<li>
						<strong>Mr. Bright Manu</strong> - Head of Design
					</li>
					<li>
						<strong>Mr. Dominic Boakye</strong> - Customer Support
						Manager
					</li>
				</ul>
			</section>
			<section className='mission-values'>
				<h2>Mission and Values</h2>
				<p>
					Klassic Watches takes immense pride in its journey and
					achievements. Over the years, we've earned a reputation for
					providing exceptional timepieces that seamlessly blend
					classic design with cutting-edge technology. Our commitment
					to quality and customer satisfaction has not gone unnoticed,
					resulting in multiple awards and recognitions from industry
					experts. These accolades reaffirm our dedication to
					delivering the finest selection of watches, each a
					masterpiece in its own right. We consider these achievements
					as markers of our success and a testament to our unwavering
					pursuit of excellence.
				</p>
				<p>
					We value quality, innovation, and customer satisfaction
					above all else.
				</p>
			</section>
			<section className='achievements'>
				<h2>Achievements</h2>
				<p>
					Klassic Watches takes immense pride in its journey and
					achievements. Over the years, we've earned a reputation for
					providing exceptional timepieces that seamlessly blend
					classic design with cutting-edge technology. Our commitment
					to quality and customer satisfaction has not gone unnoticed,
					resulting in multiple awards and recognitions from industry
					experts. These accolades reaffirm our dedication to
					delivering the finest selection of watches, each a
					masterpiece in its own right. We consider these achievements
					as markers of our success and a testament to our unwavering
					pursuit of excellence.
				</p>
			</section>
			<section className='privacy-terms'>
				<h2>Privacy and Terms</h2>
				<p>
					For information regarding our privacy policy and terms of
					service, please visit the following pages:
				</p>
				<ul>
					<li>
						<a href='/privacy-policy'>Privacy Policy</a>
					</li>
					<li>
						<a href='/terms-of-service'>Terms of Service</a>
					</li>
				</ul>
			</section>
			<h2>Connect with Us</h2>
			<p>
				Join our community and stay updated with the latest in the world
				of horology. You can connect with us on social media:
			</p>
			<div className='social-links'>
				<a
					href='https://facebuuk.com/KlassicWatches'
					target='_blank'
					rel='noopener noreferrer'>
					Facebook
				</a>
				<br />
				<a
					href='https://twitta.com/KlassicWatches'
					target='_blank'
					rel='noopener noreferrer'>
					Twitter
				</a>
				<br />
				<a
					href='https://instaglam.com/KlassicWatches'
					target='_blank'
					rel='noopener noreferrer'>
					Instagram
				</a>
			</div>
		</div>
	);
};

export default About;
