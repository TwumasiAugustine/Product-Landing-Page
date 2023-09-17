/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react'

function account () {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        function handleSubmit (e) {
                e.preventDefault()
        }

        const handleEmailChange = (event) => {
                setEmail(event.target.value)
        }

        const handlePasswordChange = (event) => {
                setPassword(event.target.value)
        }

        const closeAccountMenu = () => {
                const accountMenu = document.querySelector('.user-account')
                accountMenu.classList.remove('open')
        }
        // Password Visibility
        function togglePassWordVisibility() {
                const passwordInput = document.querySelector('#password')
                const togglePassword = document.querySelector('.fas')
                
                if (passwordInput.type === 'password') {
                        passwordInput.type = "text";
                        togglePassword.classList.remove("fa-eye")
                        togglePassword.classList.add('fa-eye-slash')
                } else {
                        passwordInput.type = 'password';
                        togglePassword.classList.remove('fa-eye-slash')
                        togglePassword.classList.add('fa-eye')
                }
        }
        return (
                <div className='user-account'>
                        <div className='transparentSide'></div>
                        <div className='account-container'>
                                <div className='closeMenu'>
                                <h3>LOGIN</h3>
                                <button className='closeBtn' onClick={() => closeAccountMenu()} aria-label='Close user account menu'><i className='fa fa-close'></i></button>
                        </div>
                        <div className='account-container'>
                                <div className='account-form'>
                                        <form action='#' method='post' onSubmit={handleSubmit}>
                                                <div className='form-control'>
                                                        <label htmlFor='email2'>Email</label>
                                                        <input type='email' id='email2' placeholder='Enter email' onChange={handleEmailChange} value={email}  required/>
                                                </div>
                                                <div className='form-control'>
                                                        <label htmlFor='password'>Password</label>
                                                                <input type='password' id='password' placeholder='Enter password' required autoComplete='current password' value={password} onChange={handlePasswordChange}/> 
                                                                <i className='fas fa-eye' onClick={togglePassWordVisibility}></i> 
                                                        </div>
                                                <div className='form-control'>
                                                        <button type='submit' aria-label='Submit' tabIndex={0}>SIGN IN</button>
                                                </div>
                                        </form>
                                        <div className='acc-info'>
                                                <p>Don't have an account? <a href='#'>Sign up</a></p>
                                                <p>Forgot password? <a href='#'>Reset</a></p>
                                        </div>
                                </div>
                        </div>
                        </div>
                </div>
        )
}

export default account;