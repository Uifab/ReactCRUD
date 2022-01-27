import React, { Component, useState }  from 'react';
import { Link } from "react-router-dom";

const BookListComponent = props => {

    const { book } = props;

    console.log(book);
    return (

        <tr key={book.id} className={book.id}>
            <td>
               <b>{book.name}</b>
            </td> 

            <td>
                {book.description}
            </td>

            <td>
                {book.date_add}
            </td>

            <td>
                <Link to={'viewBook'} className="btn btn-primary" > View</Link>
            </td>
        </tr>
    );
}

export default BookListComponent;