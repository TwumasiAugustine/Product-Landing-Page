import React, {useState} from "react";
import '../style/contact.css';

function Contact() {
    const [formData, setFormData] = useState(
        {fullName: "", email: "", message: ""}
    )
    
    const handleFormDataChange = (event) => {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <section className='contact'>
            <h2>Contact Us</h2>
            <div className='contact-container'>
                <div className='contact-info-cards'>
                    <div className='contact-info-card'>
                        <div className='contact-info-card-icon'>
                            <i className='fas fa-map-marker-alt'></i>
                        </div>
                        <div className='contact-info-card-text'>
                            <p>1234 Main Street, Anywhere, USA</p>
                        </div>
                    </div>
                    <div className='contact-info-card'>
                        <div className='contact-info-card-icon'>
                            <i className='fas fa-phone'></i>
                        </div>
                        <div className='contact-info-card-text'>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                    <div className='contact-info-card'>
                        <div className='contact-info-card-icon'>
                            <i className='fas fa-envelope'></i>
                        </div>
                        <div className='contact-info-card-text'>
                            <p>
                                <a href='mailto:'>example@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='text' id='fullName' placeholder='Enter your name' onChange={handleFormDataChange} name="fullName" aria-label="fullName" value={formData.fullName}/>
                        </div>
                        <div className='form-group'>
                            <input type='email' id='email' name='email' placeholder='Enter your email' onChange={handleFormDataChange}  aria-label="Email" value={formData.email}/>
                        </div>
                        <div className='form-group'>
                            <textarea id='message' name='message' placeholder='Enter your message'
                                onChange={handleFormDataChange} aria-label="Message" value={formData.message}/>
                        </div>
                        <button type='submit' aria-label="Submit" tabIndex={0}>Submit</button>
                    </form>
                    <div className="mapContainer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8080000000003!2d-73.9857186846743!3d40.74844097932676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4f5b0b8d7%3A0x9b2e8b0b5b0b5b5b!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus" width="600" height="450" style={{border:0}} loading="lazy" title='Location map'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;