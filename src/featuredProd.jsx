import React,{useState, useEffect} from 'react'
import WhiteWatch from './assets/watch-compare-se-202209.jpeg'

import productData from './product.json'

function FeaturedProd(props){
    // CountDown From Now to August 2023
        let [days, setDays] = useState(0);
        let [hours, setHours] = useState(0);
        let [minutes, setMinutes] = useState(0);
        let [seconds, setSeconds] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const newYearDate = new Date('August 2023').getTime();
                const distance = newYearDate - now;
                days = Math.floor(distance / (1000 * 60 * 60 * 24));
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
        }, 1000)
        return () => clearInterval(interval);

    }, [])
    

    return (
        <section className="featuredProd">
            <h2>Attractive Features</h2>
            <p className='short-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='products'>
                <div className="left-text">
                    <div className="text-con">
                        <div className='inner-text'>
                            <h4>Heart Monitor</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                        <div className='inner-icon'>
                            <i className='fas fa-heart-pulse'></i>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-text'>
                            <h4>Alarm Alert</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                        <div className='inner-icon'>
                            <i className='fa-solid fa-bell'></i>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-text'>
                            <h4>Distance Counter</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                        <div className='inner-icon'>
                            <i className='fas fa-location-dot'></i>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-text'>
                            <h4>Camera</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                        <div className='inner-icon'>
                            <i className='fas fa-camera'></i>
                        </div>
                    </div>
                </div>
                <div className="center-img" >
                    <img src={WhiteWatch} alt='digital watch' />
                </div>
                <div className="right-text" >
                    <div className="text-con">
                        <div className='inner-icon'>
                            <i className='fab fa-bluetooth'></i>
                        </div>
                        <div className='inner-text'>
                            <h4>Bluetooth</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-icon'>
                            <i className='fa fa-cloud'></i>
                        </div>
                        <div className='inner-text'>
                            <h4>Weather Update</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-icon'>
                            <i className='fa fa-video'></i>
                        </div>
                        <div className='inner-text'>
                            <h4>Video Call</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                    </div>
                    <div className="text-con">
                        <div className='inner-icon'>
                            <i className='fa fa-wifi'></i>
                        </div>
                        <div className='inner-text'>
                            <h4>Support Wifi</h4>
                            <p>It monitors the heart rate and record</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Deal Of The Week</h2>
                <p className='short-info'>Lorem is prepared by a lot off hard-work from the team</p>
                <div className='container'>
                    <div className='product-box'>
                        <div className='img-container'>
                            <img src={`../public/images/${productData[0].image}`} alt='diamond watch' />
                        </div>
                        <div className='product-info'>
                            <div className='rating-con'>
                                <i className='far fa-star'></i>
                                <i className='far fa-star'></i>
                                <i className='far fa-star'></i>
                                <i className='far fa-star'></i>
                                <i className='far fa-star'></i>
                            </div>
                            <h3>{productData[0].productName}</h3>
                            <div className='short-info'>
                                <p>lorem the most sense just ius seating arrangement</p>
                            </div>
                            <div className='price-con'>
                                <span className='price'>$ {productData[0].price}</span>
                                <span className='discount'>
                                    <del>$ {productData[0].discount}</del>
                                </span>
                            </div>
                            <div className='countDown-con'>
                                <div className='countDown'>
                                    <div className='countDown-item'>
                                        <span className='day'>{days}</span>
                                        <span>Days</span>
                                    </div>
                                    <div className='countDown-item'>
                                        <span className='hour'>{hours}</span>
                                        <span>Hrs</span>
                                    </div>
                                    <div className='countDown-item'>
                                        <span className='minute'>{minutes}</span>
                                        <span>Min</span>
                                    </div>
                                    <div className='countDown-item'>
                                        <span className='second'>{seconds}</span>
                                        <span>Sec</span>
                                    </div>
                                </div>  
                            </div>
                            <div className='btn-container'>
                                <a href='#product' className='btn' >Buy Now</a>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    )
}


export default FeaturedProd