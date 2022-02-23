import React, { Component, useState }  from 'react';
import { Link } from "react-router-dom";

const BookListComponent = props => {

    const { book } = props;

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
                <Link to={'viewBook/'+book.id } className="btn btn-primary w-100" > View</Link>
            </td>
            
            <td>
                <Link to={'edit/'+book.id }     className="btn btn-warning w-100" > Edit</Link>
            </td>
            
        </tr>
    );
}

export default BookListComponent;