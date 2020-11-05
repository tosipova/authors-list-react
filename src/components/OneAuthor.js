import React from 'react';
import '../oneAuthor.css'

function OneAuthor({ name, language, pages }) {
    console.log(name)
    return (
        <div className="one-author">
            <div> {name} </div>
            <div> {language} </div>
            <div> {pages} </div>
            <button> Edit Author</button>
            <button> Delete Author </button>
        </div>
    );
}
export default OneAuthor