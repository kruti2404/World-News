import React, { useEffect, useState } from 'react';
import NewsItems from '../NewsItems/NewsItems';

import './newsPage.css'
function NewsPage({category}) {
    const [data, setData] = useState([]);
    const [totalResults, settotalResults] = useState([]);
    const [loading, setLoading] = useState(['false']);

    useEffect(() => {
        async function loadNews() {
            setLoading(true)
            const api = "19cf35eaf2564fffbfafd3b56722ee23";
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category? category :'general'}&apiKey=${api}`;
            try {

                const response = await fetch(url);
                const result = await response.json();
                setData(result.articles);
                settotalResults(result.totalResults);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
            finally {
                setLoading(false);
            }
        }
       
        loadNews();
    }, [category]);

    return (
        <div className='news'>
            <h1 id='heading'>News - Top Headlines</h1>
        <div className='page'>
        {loading ? <p id='loading'>Loading, please wait...</p> : <NewsItems data={data} totalResults={totalResults}/> }
        </div>
        </div>
    );
}

export default NewsPage;
