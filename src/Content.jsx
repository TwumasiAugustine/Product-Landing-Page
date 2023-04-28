import React from 'react'
import HeroSection from './heroSection';
import CustomerService from './customerService';
import FeaturedProd from './featuredProd';
import Products from './product';
import Testimonial from './testimonial';
import FrequentAskQuestion from './faq';
import Contact from './contact';
import SearchList from './search';
import Account from './account'

function Content() {

    return(
        <main>
            <HeroSection />
            <CustomerService />
            <FeaturedProd />
            <Products />
            <SearchList />
            <Account />
            <Testimonial />
            <FrequentAskQuestion />
            <Contact />
        </main>
    )
}

export default Content;