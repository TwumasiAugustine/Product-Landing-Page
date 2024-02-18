import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const createAcc = () => {
	const [passwordError, setPasswordError] = useState('')
	const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        
        setFormData(prevValue => ({ ...prevValue, [name]: value}))
    }

    const isPasswordValid = (password) => {
        const regex =
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        return regex.test(password);
    }

	const validateAndSubmit = async (e) => {
		e.preventDefault()
		if (!isPasswordValid(formData.password)) {
			setPasswordError("Password should contain at least one uppercase, lowercase, digit, symbol and must be at least 8 characters")
		} else if (formData.password !== formData.confirmPassword) {
			setPasswordError("Passwords do not match")
		} else {
			alert("Account Created Successfully");
			console.log(formData);
			window.location.reload();
		}
		
	};
		
	const togglePassword = () => {
		setShowPassword(!showPassword)
	}
	return (
		<div className='acc-container'>
			<div className='backHome'>
				<Link to='/'>
					<i className='fa fa-arrow-left'></i> Back
				</Link>
			</div>
			<h1>Create Account</h1>
			<div className='createAcc'>
				<form action='#' onSubmit={validateAndSubmit} id='form'>
					<div className='form-control'>
						<label htmlFor='username'>Username: </label>
						<input
							type='text'
							name='username'
							id='acc-user'
							required
							onChange={handleInputChange}
							placeholder='Enter your Username'
							value={formData.username}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email: </label>
						<input
							type='email'
							name='email'
							id='acc-email'
							required
							onChange={handleInputChange}
							placeholder='Enter your Email'
							value={formData.email}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='password'>Password: </label>
						<input
							type={showPassword ? 'text' : 'password'}
							name='password'
							id='password'
							required
							onChange={handleInputChange}
							placeholder='Enter Password'
							value={formData.password}
						/>
						<i className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'} onClick={togglePassword}></i>
						<small className='error'>{passwordError}</small>
					</div>
					<div className='form-control'>
						<label htmlFor='confirm-password'>
							Confirm Password:
						</label>
						<input
							type='password'
							name='confirmPassword'
							id='confirmPassword'
							required
							onChange={handleInputChange}
							placeholder='Confirm Password'
							value={formData.confirmPassword}
						/>
					</div>
					<button
						type='submit'
						tabIndex={0}
					>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default createAcc;
