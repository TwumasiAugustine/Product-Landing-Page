import React from "react";
import { Link } from 'react-router-dom';
function CollectionNav () {

    return (
		<div className='list'>
			<ul>
				<li>
					<Link to='/page/collection'>Automatic & Mechanical</Link>
				</li>
				<li>
					<Link to='/page/collection'>Elegance</Link>
				</li>
				<li>
					<Link to='/page/collection'>Diamond</Link>
				</li>
				<li>
					<Link to='/page/collection'>Gold Watch</Link>
				</li>
				<li>
					<Link to='/page/collection'>Pendant Watch</Link>
				</li>
				<li>
					<Link to='/page/collection'>Pocket Watch</Link>
				</li>
				<li>
					<Link to='/page/collection'>Wall Clock</Link>
				</li>
			</ul>
		</div>
	);
}

export default CollectionNav;