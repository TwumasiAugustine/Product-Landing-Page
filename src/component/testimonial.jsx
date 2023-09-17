import React, {useState} from 'react';
import 'animate.css';
import data from '../data/testimonial.json';
import '../style/testimonial.css';


function Testimonial() {
    
    const [emailValue, setEmailValue] = useState('') 

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <section className='testimonial'>
            <h2>What Our Costumers Say</h2>
            <p className='short-info'>Our costumers are happy with our products</p>
            <div className={`testimonial-container`}>
                <div className='testimonials'>
                    {data.map((item) => (
                        <div className='testimonial-card' key={item.id}>
                            <div className='testimonial-img'>
                                <img src={item.image} alt={item.name} loading="lazy"/>
                            </div>
                            <div className='testimonial-info'>
                                <p className='testimonial-text'>{item.text}</p>
                                <div className='testimonial-user'>
                                    <h3 className='testimonial-user-name'>{item.name}</h3>
                                </div>
                                <small>{item.work}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2>Subscribe to Get Update</h2>
            <p className='short-info'>Subscribe to get update from us</p>
            <div className='subscribe'>
                <form action="#" id="form" onSubmit={handleSubmit}>
                    <input type='email' placeholder='Your email address...' onChange={handleEmailChange}/>
                <button id='subscribeBtn' type='submit'  value={emailValue} aria-label='Subscribe'>
                    Subscribe 
                        <i className='fa fa-paper-plane'></i>
                </button>
                </form>
            </div>
            <div className='downloadApp'>
                <h2>Download Our App</h2>
                <p className='short-info'>Download our app to get update. </p>
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
    )
}


export default Testimonial;