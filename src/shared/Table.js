import React from "react";
import './Table.css';

const Table = (props) => {
    return (
        <table>
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
            </tr>
            <tr>
                {props.data.map((data) => {
                    return <td>{data}</td>
                })}

            </tr>
        </table>
    )
};

export default Table;