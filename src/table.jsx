import React from 'react';
import tableData from './product.json';

function Table(){
    

    return <table>
    <thead>
        <tr>
            <th />
            <th>
                <img src={`../public/images/${tableData[0].image}`} alt={tableData[0].productName} />
            </th>
            <th>
                <img src={`../public/images/${tableData[1].image}`} alt="dark watch" />
            </th>
            <th>
                <img src={`../public/images/${tableData[1].image}`} alt="red watch" />
            </th>
            <th>
                <img src={`../public/images/${tableData[1].image}`} alt="orange watch" />
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Brand</td>
            <td>
                {tableData[0].brand}
            </td>
            <td>
                {tableData[1].brand}
            </td>
            <td>
                {tableData[2].brand}
            </td>
            <td>
                {tableData[3].brand}
            </td>
        </tr>
        <tr>
            <td>Price</td>
            <td>
                {tableData[0].price}
            </td>
            <td>
                {tableData[1].price}
            </td>
            <td>
                {tableData[2].price}
            </td>
            <td>
                {tableData[3].price}
            </td>
        </tr>
        <tr>
            <td>Color</td>
            <td>
                {tableData[0].color}
            </td>
            <td>
                {tableData[0].color}
            </td>
            <td>
                {tableData[0].color}
            </td>
            <td>
                {tableData[0].color}
            </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td />
            <td>
                <a href='#product' className="btn">Buy Now</a>
            </td>
            <td>
                <a href='#product' className="btn">Buy Now</a>
            </td>
            <td>
                <a href='#product' className="btn">Buy Now</a>
            </td>
            <td>
                <a href='#product' className="btn">Buy Now</a>
            </td>
        </tr>
        </tfoot>
    </table>;
}

export default Table;