import React from 'react';
import HeroSection from './heroSection';
import CustomerService from './customerService';
import FeaturedProd from './featuredProd';
import Products from '../../page/Home';
import Testimonial from './testimonial';
import FrequentAskQuestion from './faq';
import Contact from './contact';
import Account from './account';
import Search from './search';
import WishList from './wishList';



function HomeContent() {
	return (
		<main>
			<HeroSection />
			<CustomerService />
			<FeaturedProd />
			<Products />			
			<Testimonial />
			<Account />
			<Search />
			<WishList/>
			<FrequentAskQuestion />
			<Contact />
		</main>
	);
}

export default HomeContent;
