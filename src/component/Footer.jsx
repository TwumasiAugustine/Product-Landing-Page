import React from 'react'
import '../style/Footer.css'
function Footer() {

    const date = new Date()
    const year = date.getFullYear()
    return(
        <footer>
            <div className='footer-one'>
                <div className='buttomNavContainer'>
                    <div className='contactUs'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <i className='fas fa-location-dot'></i>
                                Suite 4, 123 East Runner Street, New York
                            </li>
                            <li>
                                <i className='fa fa-envelope'></i>
                                <a href='#'>info@klassicwatch.com</a>
                            </li>
                            <li>
                                <i className='fas fa-phone'></i>
                                <a href="#tel: +1 (236) 3526 45523">+1 (236) 3526 4552</a>
                            </li>
                        </ul>
                    </div>
                    <div className='collections'>
                        <h3>Collections</h3>
                        <ul>
                            <li>
                                <a href='#'>Elegance</a>
                            </li>
                            <li>
                                <a href='#'>Opal</a>
                            </li>
                            <li>
                                <a href='#'>Pocket Watch</a>
                            </li>
                            <li>
                                <a href='#'>Pendant Watch</a>
                            </li>
                            <li>
                                <a href='#'>Solid Gold</a>
                            </li>
                            <li>
                                <a href='#'>Sports</a>
                            </li>
                        </ul>
                    </div>
                    <div className='Info'>
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a href="#" >The History behind Klassic Watches</a>
                            </li>
                            <li>
                                <a href="#" >Why buy Klassic</a>
                            </li>
                            <li>
                                <a href="#" >Watch care</a>
                            </li>
                            <li>
                                <a href="#" >Automatic and Mechanical watches</a>
                            </li>
                            <li>
                                <a href="#" >Water Resistance Information</a>
                            </li>
                            <li>
                                <a href="#" >Operating your Watch</a> 
                            </li>
                            <li>
                                <a href="#" >Terms of Service</a>
                            </li>
                            <li>
                                <a href='#' >Refund policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='services'>
                        <h3>Customer Service</h3>
                        <ul>
                            <li>
                                <a href="#" >30 day return Policy</a>
                            </li>
                            <li>
                                <a href="#" >Contact Us</a>
                            </li>
                            <li>
                                <a href="#" >Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" >Shipping & delivery</a>
                            </li>
                            <li>
                                <a href="#"  >Warranty Information</a>
                            </li>
                            <li>
                                <a href="#" >Store Locator</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-two'>
                <div className='copyright'>
                    <p>© {year} <span> Klassic Watches.</span> All Rights Reserved.</p>
                </div>
                <div>
                    <p>Made with <span> ❤ </span> By <a href='https://www.twumasiaugustine.com/' target='_blank' rel='noreferrer'> dev_twumstine</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;