import React from 'react'

function account() {
        
        const closeAccountMenu = () => {
                const accountMenu = document.querySelector('.user-account')
                accountMenu.classList.remove('open')
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
                                                        <input type='password' id='password' placeholder='Enter password' required autoComplete='current password'/>
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