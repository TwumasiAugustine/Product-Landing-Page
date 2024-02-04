import React from 'react';
import '../style/contact.css';
const Contact = () => {
	return (
		<div className='contact-info'>
			<h1>Contact Us</h1>
			<p>For any inquiries or feedback, please reach out to us:</p>
			<div className='table-container'>
				<table>
					<tr>
						<th>Contact Method</th>
						<th>Contact Details</th>
					</tr>
					<tr>
						<td>Email</td>
						<td>info@example.com</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>123-456-7890</td>
					</tr>
					<tr>
						<td>Address</td>
						<td>123 Main Street, City, Country</td>
					</tr>
				</table>
			</div>
			<h2>Branches</h2>
			<div className='branch'>
				<table>
					<tr>
						<th>Branch</th>
						<th>Location</th>
					</tr>
					<tr>
						<td>Branch 1</td>
						<td> Address 1</td>
					</tr>
					<tr>
						<td>Branch 2</td>
						<td> Address 2</td>
					</tr>
					<tr>
						<td>Branch 3</td>
						<td> Address 3</td>
					</tr>
				</table>
			</div>
			<div className='social-media'>
				<h2>Social Media</h2>
				<ul>
					<li>
						<a href='https://www.facebook.com/example'>Facebook</a>
					</li>
					<li>
						<a href='https://www.twitter.com/example'>Twitter</a>
					</li>
					<li>
						<a href='https://www.instagram.com/example'>
							Instagram
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
