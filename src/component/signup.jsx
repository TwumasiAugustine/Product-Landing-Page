import React, {useEffect, useState} from 'react';
import 'animate.css'

function SignUp() {

    useEffect(() => {
        const signupContainer = document.querySelector('.signup-container');
        setTimeout(() => {
            signupContainer.classList.add('translate')
            signupContainer.classList.add('animate__animated', 'animate__fadeInLeft')
        }, 3000);
    }, [])

    const closeSignUp = () => {
        const signupContainer = document.querySelector('.signup-container');
        signupContainer.classList.add('close')
    }
    const [signUpData, setSignUpData] = useState(
        {fullName: "", email: "", select: ""}
    )

    const handleDataChange = (event) => {
        const {name, value} = event.target
        setSignUpData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    const  handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className="signup-container">
            <div className='signup-info'>
                <h2>Sign up to Klassic!</h2>
                <p>Stay up to date on re-stock, new products and designs</p>
            </div>
            <button className='closeBtn' onClick={() => closeSignUp()} aria-label='Close menu'>
                <i className='fa fa-close'></i>
            </button>
            <form method="post" action="#" onSubmit={handleSubmit}>
            <div className="form-group" >
                    <input type='text' id='name1' placeholder='Name' name='fullName'
                        onChange={handleDataChange} value={signUpData.fullName} required />
                <label htmlFor='name1'>Name</label>
            </div>
            <div className="form-group" >
                <input type='email' id='email1' placeholder='Email' name='email'
                    onChange={handleDataChange} value={signUpData.email} autoComplete='yes' required />
                <label htmlFor='email'>Email</label>
            </div>
            <div className="form-group" >
                <select type='select' id='select' onChange={handleDataChange} name="select" value={signUpData.select} required>
                    <optgroup>
                        <option value=''>Select your interest</option>
                        <option value='Wrist Watches'>Wrist Watches</option>
                        <option value='Pocket / Pendant Watches'>Pocket / Pendant Watches</option>
                    </optgroup>
                </select>
            </div>
            <div className="form-group" >
                <button type='submit' aria-label='Sign up'>Sign Up</button>
            </div>
        </form>
    </div>
    )
}
export default SignUp;