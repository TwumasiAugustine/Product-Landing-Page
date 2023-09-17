import React from 'react'
import '../style/customerService.css'
function CustomerService() {
    return (
        <section className='customerService'>
            <h2>Choose Klassic Watches</h2>
            <p className='short-info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='customerServiceContainer'>
                <div className='customerServiceBox'>
                    <div className='customerServiceIcon'>
                        <i className='fas fa-shipping-fast'></i>
                    </div>
                    <div className='customerServiceText'>
                        <h3>Free Shipping</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className='customerServiceBox'>
                    <div className='customerServiceIcon'>
                        <i className='fas fa-undo'></i>
                    </div>
                    <div className='customerServiceText'>
                        <h3>30 Days Return</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className='customerServiceBox'>
                    <div className='customerServiceIcon'>
                        <i className='fas fa-lock'></i>
                    </div>
                    <div className='customerServiceText'>
                        <h3>Secure Payment</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className='customerServiceBox'>
                    <div className='customerServiceIcon'>
                        <i className='fas fa-headset'></i>
                    </div>
                    <div className='customerServiceText'>
                        <h3>24/7 Support</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerService;