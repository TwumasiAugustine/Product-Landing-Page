import React from 'react';
import HeroSection from '../component/heroSection';
import CustomerService from '../component/customerService';
import FeaturedProd from '../component/featuredProd';
import Products from '../component/product';
import Testimonial from '../component/testimonial';
import FrequentAskQuestion from '../component/faq';
import Contact from '../component/contact';
import SearchList from '../component/search';
import Account from '../component/account';
import WishList from './wishList'

function Content() {
    return (
        <main>
            <HeroSection />
            <CustomerService />
            <FeaturedProd />
            <Products />
            <SearchList />
            <Account />
            <WishList />
            <Testimonial />
            <FrequentAskQuestion />
            <Contact />
        </main>
    );
}

export default Content;
