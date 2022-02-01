import React, { Component, useState, useEffect  }  from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";


function BookPage(){

    let { id } = useParams();
    let [book, fetchBook] = useState([]);
    
    function getData(){
        axios("http://uifab.ddns.net/lara/api/library/getBooks?bid="+id)
                    .then((json) => {
                        fetchBook ( json.data.book );
                    });
    }

    
    useEffect(() => {
        getData()
      }, [])

      console.log("antes del return");


    if( !book )
        return <h1>Loading...</h1>

    return (
       <div>
            <h1>
                Book index {id}
            </h1>

            <table className="table table-striped w-100">
                
                <tbody>
                    <tr>
                        <td>
                            <b>Title</b>
                        </td>

                        <td>
                            {book.name}
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <b>Description</b>
                        </td>

                        <td>
                            {book.description}
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <b>Date Add</b>
                        </td>
                        
                        <td>
                            {book.date_add}
                        </td>
                    </tr>
                    
                </tbody>
            </table>

            <Link to="/" className="btn btn-primary w-75 d-block m-auto">Back</Link>
        </div>
    );
    
    /**/
}


/*
class BookPage extends Component {
/*
     // Constructor 
     constructor(props) {
        super(props);

        this.state = {
            book: [],
            DataisLoaded: false,
       //     book_id: this.props.match.params.id
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {

        console.log("dismount props",this.props)

        if( this.props.match == undefined )
            return ;

        var book_id = this.props.match.params.id;


        fetch( "http://uifab.ddns.net/lara/api/library/getBooks?"+ book_id )
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    book: json.book,
                    DataisLoaded: true
                });
            })
    }
*//*
    render(){

        let { data } = useParams();

        const { match } = this.props;

        console.log("render",match);

        return "caca" + match.params.id;

        if( !this.state.DataisLoaded ){
            return "Loading Book";
        }

        console.log("render",this);
        const { book } = this.state.book;

        console.log(book);

        if( book == undefined )
            return "not found";

        const BookData = {
            name:"Book 1",
            data1: "Data 1",
            data2: "Data 2",
        }


        return (

            <div>
                <h1>
                    Book Page
                </h1>

                <table className="table table-striped w-100">
                    
                    <tbody>
                        <tr>
                            <td>
                                <b>Title</b>
                            </td>

                            <td>
                                {book.name}
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <b>Description</b>
                            </td>

                            <td>
                                {book.description}
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <b>Date Add</b>
                            </td>
                            
                            <td>
                                {book.date_add}
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
*/
export default BookPage;