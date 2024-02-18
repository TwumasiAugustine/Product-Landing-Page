import React from 'react';
import { Link } from 'react-router-dom';

function MaterialNav(){

    return(
        <div className='list'>
            <ul>
                <li>
                    <Link to='/page/collection'>Bracelet Watches</Link>
                </li>
                <li>
                    <Link to='/page/collection'>Leather Strap Watches</Link>
                </li>
                <li>
                    <Link to='/page/collection'>Bracelet Watches</Link>
                </li>
                <li>
                    <Link to='/page/collection'>Half bangle Watches</Link>
                </li>
            </ul>
        </div>
    )
}

export default MaterialNav;