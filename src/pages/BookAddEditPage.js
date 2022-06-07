import React, { Component, useState, useEffect, useLayoutEffect  }  from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';

//Common
import BackButton from '../common/BackButton';

function BookAddEditPage(){

    const [book, setBook ] = useState(0);

    let { id } = useParams();

    id = parseInt(id) || 0;

    let requestAxios = false; 


    function handleChange( event ){

        let auxBook = book;

        auxBook[event.target.name] = event.target.value;

        setBook(auxBook);
    }

    function setNotification( msg, type ){

        if( !msg )
            return ;
        
            console.log("asd");


        $("#root").prepend('<div class="alert alert-'+type+'">'+msg+'</div>');

        setTimeout(function(){
            $(".alert").remove();
        },5000);

    }

    function handleSubmit(event) {
        
        let [ bid, name, description, date ] = event.target;

        let formData ={
            'bookid'        : id,
            'name'          : name.value,
            'description'   : description.value,
            'date_add'      : date.value,
            'action'        : id?"edit":"add"
        };

        console.log(formData);
        
        if( requestAxios )
        {
            console.log( 'Peticion en curso' );
            event.preventDefault();
            return;
        }

        requestAxios = true;

        axios("http://uifab.ddns.net/lara/api/library/book", {params:formData})
            .then((response) => {
                
                let notType = "success";
                if(response.data.code >= 200)
                    notType = "warning";
                

                setNotification(  response.data.text, notType );


                requestAxios = false;

                console.log("Edit response", response);


            });

        event.preventDefault();

        }
    

    function getData(){

        if( !id ){
            //Create empty book
            let bookAux = {
                'id'            : 0,
                'name'          : '',
                'description'   : '',
                'date_add'      : new Date().toISOString().slice(0,10)
            }
            setBook(bookAux);
            return;
        }

        axios("http://uifab.ddns.net/lara/api/library/book?bid="+id)
                    .then((json) => {
                        setBook ( json.data.book[0] );
                    });
    }

    useLayoutEffect(() => {
        getData();
    }, [])


    return (
        <>
            <h1><GetEditOrAddText id={id} /> Book</h1>

            <form onSubmit={handleSubmit} >
                <table className="table table-striped w-100">
                    
                    <tbody>
                        <tr>
                            <td>
                                <b>Id</b>
                            </td>

                            <td>
                                <input readOnly type="text"  name="id" id="inputBookId" className="disabled form-control"  placeholder="Id" defaultValue={ book.id || ''  } />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <b>Title</b>
                            </td>

                            <td>
                                <input required type="text"  name="name" id="inputBookTitle" className="form-control"  placeholder="Book Title" defaultValue={ book.name || ''  } onChange={handleChange} />
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
                                <input required type="date" name="date_add" id="inputBookDate"  defaultValue={ book.date_add || '' } onChange={handleChange} />
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