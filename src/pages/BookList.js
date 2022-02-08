import React, { Component, useState }  from 'react';
import { Link } from "react-router-dom";

import BookListComponent from '../components/BookListComponent';


class BookList extends Component{

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            DataisLoaded: false,
            booksAux: []
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch( "http://uifab.ddns.net/lara/api/library/book")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    books: json.books,
                    DataisLoaded: true
                });
            })
    }

    

    render(){

        const { DataisLoaded, books } = this.state;

        console.log(books);

        if (!DataisLoaded) 
            return <div>
                        <h1> Loading </h1> 
                    </div> ;

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
                                Description
                            </th>
                            <th>
                                Date Add
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { books.map((element, i) => {     
                                return <BookListComponent book={element} key={element.id} />  
                        })}
                        
                        <tr>
                            <td  colSpan="5">
                                <Link to="/add" className="btn btn-success w-75 d-block m-auto" >Add book</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookList; 