import React, { useEffect, useState } from 'react';
import './search.css';
import FetchData from './FetchData';
import { useParams } from 'react-router-dom';

function Search() {
  const { query } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=19cf35eaf2564fffbfafd3b56722ee23`)
        .then((res) => res.json())
        .then((data) => {
          setResult(data.articles || []);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [query]);

  return (
    <div className='searchPage'>
      <h1>Search Results for "{query}"</h1>
      <FetchData result={result} value={query} />
    </div>
  );
}

export default Search;
