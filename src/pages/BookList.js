import React, { Component, useState }  from 'react';

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
        fetch( "http://uifab.ddns.net/lara/api/library/getBooks")
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
                            <td  colSpan="4">
                                <a className="btn btn-primary w-75 m-auto d-block"> Add book </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookList; 