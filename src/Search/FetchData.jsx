import React from 'react';
import NewsElements from '../newsElement/NewsElements';
import './search.css';

function FetchData({ result, value }) {
  return (
    <div className='search'>
      {result.map((res, i) => {
        const { title } = res;
        const containsValue = (title && title.toLowerCase().includes(value.toLowerCase())) ;

        return (
          <React.Fragment key={i}>
            {containsValue && (
              <NewsElements item={res} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FetchData;
