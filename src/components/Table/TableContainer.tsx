import React from 'react'
import TableRow from './TableRow';


export default function TableContainer(){
    return (
        <div>
            <table>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>NAME</td>
                    <td>LAST UPDATED</td>
                    <td>COGS%</td>
                    <td>COST PRICE(')</td>
                    <td>SALE PRICE</td>
                    <td>GROSS MARGIN</td>
                    <td>TAGS/ACTION</td>
                </tr>
                <TableRow />
            </table>
        </div>
    )
}
