import React, { Component, useState }  from 'react';

import BookListComponent from '../components/BookListComponent';


const BookList = () => {

    const books = [
        { name : "Book 1" },
        { name : "Book 2" },
        { name : "Book 3" },
        { name : "Book 4" }
    ];


    return (

        <div>
            <h1>
                Book List
            </h1>
            <table className="table table-striped w-100">
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Data 1
                        </th>
                        <th>
                            Data 2
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { books.map((element, i) => {     
                            return <BookListComponent book={element} />  
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default BookList; 