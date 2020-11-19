import React from 'react';
import EditAuthor from './components/EditAuthor';
import OneAuthor from './components/OneAuthor';
import './index.css';
import { addAuthor as addAuthorToServer, fetchAuthors, removeAuthor, editAuthorFunk as editCurrentAuthorOnServer } from './services/fetch-author';

function App() {

  const [authorList, setAuthorList] = React.useState([]);
  const [currentAuthor, setCurrentAuthor] = React.useState();

  React.useEffect(() => {
    fetchAuthors().then(
      listResult => {
        setAuthorList(listResult)
      }
    )
  }, []);

  const removeAuthorById = id => {
    removeAuthor(id)
    fetchAuthors().then(
      listResult => {
        setAuthorList(listResult)
      }
    )
  }

  const addAuthor = (author) => {
    addAuthorToServer(author)
      .then(newAuthorList => {
        if (newAuthorList) {
          setAuthorList(newAuthorList)
        }
      }).catch(e => console.log(e))
  }

 
  const editAuthorFunk = (author) => {
    editCurrentAuthorOnServer(author)
      .then(newAuthorList => {
        if (newAuthorList) {
          setAuthorList(newAuthorList)
        }
      }).catch(e => console.log(e))
  }

  const onClickEditAuthor = (author) => {
    setCurrentAuthor(author)
  }

  return (
    <div className="row">
      <EditAuthor
        addAuthor={addAuthor}
        editAuthor={editAuthorFunk} 
        currentAuthor={currentAuthor} />
      <div className="row" />
      {authorList.map((author) => <OneAuthor key={author.id} {...author} onDelete={() => removeAuthorById(author.id)} onEdit={() => onClickEditAuthor(author)}
      />)}
    </div>
  );
}

export default App;