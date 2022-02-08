import React, { Component, useState, useEffect, useLayoutEffect  }  from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";

//Common
import BackButton from '../common/BackButton';

function BookAddEditPage(){

    const [book, setBook ] = useState(0);

    let { id } = useParams();

    id = parseInt(id) || 0;


    function handleChange( event ){

        console.log("change", event.target.name, event.target.value );
        
        let auxBook = book;

        auxBook[event.target.name] = event.target.value;

        setBook(auxBook);
    }

    function handleSubmit(event) {
        
        console.log("submit",event);

        let [ name, description, date ] = event.target;

        let formData ={
            'bookid'        : id,
            'name'          : name.value,
            'description'   : description.value,
            'date_add'      : date.value,
            'action'        : 'edit'
        };
        
        axios("http://uifab.ddns.net/lara/api/library/book", {params:formData})
            .then((response) => {
            
                console.log("Edit response", response);
            });

        event.preventDefault();

      }
    

    function getData(){
        axios("http://uifab.ddns.net/lara/api/library/book?bid="+id)
                    .then((json) => {
                        setBook ( json.data.book );
                        console.log("init Book");
                    });
    }

    useLayoutEffect(() => {
        getData();
    }, [])


    return (
        <>
            { console.log("render", book.description) }
            <h1><GetEditOrAddText id={id} /> Book</h1>

            <form onSubmit={handleSubmit} >
                <table className="table table-striped w-100">
                    
                    <tbody>
                        <tr>
                            <td>
                                <b>Title</b>
                            </td>

                            <td>
                                <input type="text"  name="name" id="inputBookTitle" className="form-control"  placeholder="Book Title" defaultValue={ book.name || ''  } onChange={handleChange} />
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <b>Description</b>
                            </td>

                            <td>
                                <input type="textarea"  name="description" id="inputBookDescription" className="form-control" defaultValue={ book.description || '' } placeholder="Short description" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <b>Date Add</b>
                            </td>
                            
                            <td>
                                <input type="date" name="date_add" id="inputBookDate"  defaultValue={ book.date_add || '' } onChange={handleChange} />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            
                <button type="submit" name="inputSubmit" className="btn btn-success w-100 mb-5" > <GetEditOrAddText id={id} /> </button>

            </form>




            <BackButton />
        </>
    );

}

function Title( props  ){

    if( props.id )
        return (<h1>Edit book id { props.id  }</h1>);

    return (<h1>Add Book</h1>);
}

function GetEditOrAddText(props){

    if( props.id )
        return ( <>Edit</>);

    return ( <>Add</>);
}


export default BookAddEditPage;