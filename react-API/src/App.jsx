import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  const getData = () => {
    axios.get(
      axios
        .get('https://reactnd-books-api.udacity.com/books', {
          headers: { Authorization: 'whatever-you-want' },
        })
        .then((response) => {
          const books = response.data.books;
          setState(books);
          console.log(response);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            console.log('status code : 404');
            console.log('Website not found');
          }
        })
    );
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {state.map(function (ele, index) {
        return (
          <div key={index}>
            <h1>{ele.title}</h1>
            <div className='flex'>
              <img src={ele.imageLinks.smallThumbnail} alt="" />
              <p className="description">{ele.description}</p>
            </div>
            <h4>{ele.authors}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default App;
