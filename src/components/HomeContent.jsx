import React from 'react';
import Products from '../page/Home';
import Contact from './info';
import CustomerService from './customerService';
import FrequentAskQuestion from './faq';
import FeaturedProd from './featuredProd';
import HeroSection from './heroSection';
import Testimonial from './testimonial';


function HomeContent() {
	return (
		<main>
			<HeroSection />
			<CustomerService />
			<FeaturedProd />
			<Products />			
			<Testimonial />
			<FrequentAskQuestion />
			<Contact />
		</main>
	);
}

export default HomeContent;
