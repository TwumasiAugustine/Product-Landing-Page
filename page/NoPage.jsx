/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom'; 

const NoPage = () => {
	return (
		<div className='not-found'>
			<h1>404 - Page Not Found</h1>
			<p>The page you are looking for doesn't exist.</p>
			<p>Here are some things you can do:</p>
			<ul>
				<li>Check the URL for typos or errors.</li>
				<li>
					Return to the <Link to='/'>homepage</Link>.
				</li>
				<li>
					Contact our <Link to='/contact'>support</Link> for
					assistance.
				</li>
			</ul>
		</div>
	);
};

export default NoPage;
