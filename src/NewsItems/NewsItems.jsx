import React from 'react';
import './newsItems.css';
import NewsElements from '../newsElement/NewsElements';

const NewsItems = ({ data }) => {

  return (
    <>
      <div className='Newsitems'>
        {data.map((item, index) => (
          <NewsElements key={item.id || index} item={item} />
        ))}
      </div>
    </>
  );
};

export default NewsItems;
