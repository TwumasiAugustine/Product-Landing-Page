import React, {useEffect, useState} from 'react';
import 'animate.css'

function SignUp() {
//   After 3s onload translate signup container
    useEffect(() => {
        const signupContainer = document.querySelector('.signup-container');
        setTimeout(() => {
            signupContainer.classList.add('translate')
            signupContainer.classList.add('animate__animated', 'animate__fadeInLeft')
        }, 3000);
    }, [])
//   Close Signup
    const closeSignUp = () => {
        const signupContainer = document.querySelector('.signup-container');
        signupContainer.classList.add('close')
    }


    return(
        <div className="signup-container">
            <div className='signup-info'>
                <h2>Sign up to Klassic!</h2>
                <p>Stay up to date on re-stock, new products and designs</p>
            </div>
            <button className='closeBtn' onClick={() => closeSignUp()}>
                <i className='fa fa-close'></i>
            </button>
            <form method="post" action="#">
            <div className="form-group" >
                <input type='text' id='name1' placeholder='Name' required/>
                <label htmlFor='name'>Name</label>
            </div>
            <div className="form-group" >
                <input type='email' id='email1' placeholder='Email' required/>
                <label htmlFor='email'>Email</label>
            </div>
            <div className="form-group" >
                <select type='select' id='select' required>
                    <optgroup>
                        <option value='Select your interest' disabled selected>Select your interest</option>
                        <option value='Wrist Watches'>Wrist Watches</option>
                        <option value='Pocket / Pendant Watches'>Pocket / Pendant Watches</option>
                    </optgroup>
                </select>
            </div>
            <div className="form-group" >
                <button type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
    )
}
export default SignUp;