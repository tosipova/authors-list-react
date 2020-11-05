const API_URL = 'https://crudcrud.com/api/c26516e2471f402c90db47d04fbd50ad'


export function fetchAuthor(id) {
  return fetch(API_URL + `/authors/${id}`)
    .then(response => response.json())
    .then((result) => {
      return result
    });
}
export function fetchAuthors() {
  console.log("Calling get authors")
  return fetch(API_URL + `/authors`)
    .then(response => response.json())
    .then((result) => {
      console.log('response %s', JSON.stringify(result))
      return result
    });
}

export function addAuthor(name, language, pages) {
  return fetch(API_URL + "/authors", {
    method: 'POST',
    body: JSON.stringify({
      name,
      language,
      pages
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      console.log(response.status);
    })
}



// export function removeAuthor(id) {
//   const API_URL_SINGLE_BOOK = `${API_URL}/${id}`;
//   return fetch(API_URL_SINGLE_BOOK, {
//     method: 'DELETE'
//   })
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error();
//       }
//     })

// };

// export function editAuthor(id,name,language,pages) {
//   const API_URL_SINGLE_BOOK = `${API_URL}/${id}`;
//   return fetch(API_URL_SINGLE_BOOK, {
//     method: 'POST',
//     body: JSON.stringify({
//     name,
//     language,
//     pages
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//     .then(response => {
//       if (response.status !== 200) {
//         throw new Error();
//       }
//     })
// };
