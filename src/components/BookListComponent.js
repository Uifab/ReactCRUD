import React, { Component, useState }  from 'react';


const BookListComponent = props => {

    const { book, setList } = props;

    const bookData = {
        name:"Book 1",
        data1: "Data 1",
        data2: "Data 2",
    }


    return (

        <tr>
            <td>
               <b>{book.name}</b>
            </td>

            <td>
                {book.data1}
            </td>

            <td>
                {book.data2}
            </td>

            <td>
                <div className="btn btn-primary">View</div>
            </td>
        </tr>
    );
}

export default BookListComponent;