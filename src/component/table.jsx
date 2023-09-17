import React from 'react';
import '../style/table.css';
import { useGlobalContext } from '../context';
import tableData from '../data/table.json'
function Table() {
    const {  addToCart } = useGlobalContext();

    return (
        <div className="compareTable">
            <table className="product-table">
                <tbody>
                    {tableData.map((item) => {
                        const { id, image,  brand, productName: name, price } = item;
                        return (
                            <tr key={id}>
                                <td>
                                    <img src={`./images/${image}`} alt={name} loading="lazy"/>
                                </td>
                                <td>{brand}</td>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td>
                                    <button onClick={() => addToCart(item)} aria-label='Add to cart'>Add to Cart</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

