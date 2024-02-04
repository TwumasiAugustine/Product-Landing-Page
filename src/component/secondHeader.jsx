import React from 'react';
import { NavLink } from 'react-router-dom';

function SecondHeader () {
    
	return (
		<div className='secondHeader'>
			<nav className='navbar'>
				<NavLink to='/' exact="true" activeclassname='activeLink'>
					Home
				</NavLink>
				<NavLink to='/page/about' activeclassname='activeLink'>
					About
				</NavLink>
				<NavLink to='/page/collection' activeclassname='activeLink'>
					Collections
				</NavLink>
				<NavLink to='/page/contact' activeclassname='activeLink'>
					Contact
				</NavLink>
			</nav>
		</div>
	);
}

export default SecondHeader;
