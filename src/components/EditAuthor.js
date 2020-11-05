import React, { useState } from 'react';
import { addAuthor } from '../services/fetch-author';
import '../editAuthor.css';

// Добавить поле с названием книги и кнопку +, при нажатии на кнопку появляется ещё один инпут для ввода названия книги

// При сабмите формы необходимо собрать данные по всем книгам в массив и отправить на сервер

function EditAuthor() {

    const [name, setName] = useState("Pushkin");
    const [language, setLanguage] = useState("russian");
    const [pages, setPages] = useState("356");


    const onSubmit = (event) => {
        event.preventDefault()
        addAuthor(name, language, pages)
        console.log(addAuthor)
    }

    return (
        <form onSubmit={onSubmit} className="edit-form">

            <input
                type="text"
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
            <input
                type="text"
                value={language}
                onChange={(event) => {
                    setLanguage(event.target.value)
                }}
            />
            <input
                type="text"
                value={pages}
                onChange={(event) => {
                    setPages(event.target.value)
                }}
            />
            {/* <input
                type="text"
                value={form}
                onChange={(event) => {
                    setForm(event.target.value)
                }}
            /> */}

            {/* <input value="Капитанская дочка" />

            <input value="Евгений Онегин" />

            <input /> */}

            {/* <button
            type="text"
            value=""
            onClick={(event) => {
                <input
                type="text"
                value={form}
                onChange={(event) => {
                    setForm(event.target.value)
                }}
            />
            }
            }
            >+</button >  */}


            <button className="button-save" onClick={() => addAuthor(name, language, pages)}> Save </button>
        </form>
    );
}
export default EditAuthor;