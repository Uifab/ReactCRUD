import React, { Component, useState }  from 'react';


const BookPage = () => {

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

            <h4>{ BookData.name }</h4>
            <span>{ BookData.data1 }</span>
            <span>{ BookData.data2 }</span>

        </div>
    );
}

export default BookPage;