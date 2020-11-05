import React from 'react';
import EditAuthor from './components/EditAuthor';
import OneAuthor from './components/OneAuthor';
import { fetchAuthors, fetchAuthor } from './services/fetch-author';
import { addAuthor as addAuthorToServer } from './services/fetch-author';

import './index.css'

function App() {

  const [authorList, setAuthorList] = React.useState([]);

  React.useEffect(() => {
    fetchAuthors().then(
      listResult => {
        setAuthorList(listResult)
      }
    )
  }, []);

  const addAuthor = (name, language, pages) => {
    addAuthorToServer(name, language, pages)
      .then(() => {
        return fetchAuthor()
      })
      .then(newAuthorList => {
        setAuthorList(newAuthorList)
      })
  }

  // const removeAuthor = (id) => {
  //   removeAuthorFromServer(id)
  //     .then(() => {
  //       setauthorList(authorList.filter(item => item.id !== id))
  //     })
  // }

  // const onClickEditAuthor = (id) => {
  //     const currentAuthor = authorList.find((item) => {
  //     if (item._id === id) {
  //       return true
  //     }
  //   })

  return (
    <div className="row">

      <EditAuthor addAuthor={addAuthor} />
      <div className="row" />

      {authorList.map((auth) => <OneAuthor {...auth} />)
      }
    </div>
  );
}

export default App;
