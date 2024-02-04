/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = ({openAccMenu, openAccountMenu}) => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [showPassword, setShowPassword] = useState(false)

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value
			};
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		setFormData()
	}

	function togglePassWordVisibility() {
		setShowPassword(!showPassword)
	}

	
	return (
		<div className={`user-account ${openAccMenu ? 'open': ''}`}>
			<div className='transparentSide' onClick={openAccountMenu}></div>
			<div className='account-container'>
				<div className='closeMenu'>
					<h3>LOGIN</h3>
					<button
						className='closeBtn'
						onClick={openAccountMenu}
						aria-label='Close user account menu'>
						<i className='fa fa-close'></i>
					</button>
				</div>
				<div className='account-form'>
					<form action='#' method='post' onSubmit={handleSubmit}>
						<div className='form-control'>
							<label htmlFor='email2'>Email</label>
							<input
								type='email'
								id='email2'
								placeholder='Enter email'
								autoComplete='on'
								onChange={handleChange}
								name='email'
								value={formData.email}
								required
							/>
						</div>
						<div className='form-control'>
							<label htmlFor='password'>Password</label>
							<input
								type={showPassword ? 'text' : 'password'}
								id='password'
								placeholder='Enter password'
								onChange={handleChange}
								autoComplete='current-password'
								required
								name='password'
								value={formData.password}
							/>
							<i
								className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}
								onClick={togglePassWordVisibility}>
							</i>
						</div>
						<div className='form-control'>
							<button
								className='btn'
								type='submit'
								aria-label='Submit'
								tabIndex={0}>
								SIGN IN
							</button>
						</div>
					</form>
					<div className='acc-info'>
						<p>
							Don't have an account? <Link to='/page/createAcc' onClick={openAccountMenu}>Sign up</Link>
						</p>
						<p>
							Forgot password? <a href='#'>Reset</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Account;
