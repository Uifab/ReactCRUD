import React, { Component, useState, useEffect  }  from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//Common
import BackButton from '../common/BackButton';


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

            <BackButton />
        </div>
    );
}

export default BookPage;