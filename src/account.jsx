import React from 'react'

function account() {
        
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
                                <button className='closeBtn' onClick={() => closeAccountMenu()}><i className='fa fa-close'></i></button>
                        </div>
                        <div className='account-container'>
                                <div className='account-form'>
                                        <form method='post'>
                                                <div className='form-control'>
                                                        <label htmlFor='email2'>Email</label>
                                                        <input type='email' id='email2' placeholder='Enter email'  required/>
                                                </div>
                                                <div className='form-control'>
                                                        <label htmlFor='password'>Password</label>
                                                                <input type='password' id='password' placeholder='Enter password' required autoComplete='current password' /> 
                                                                <i className='fas fa-eye' onClick={togglePassWordVisibility}></i> 
                                                        </div>
                                                <div className='form-control'>
                                                        <button type='button'>SIGN IN</button>
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