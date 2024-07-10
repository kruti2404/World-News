import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Header/Header';
import NewsPage from './NewsContainer/NewsPage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Search/Search';

function App() {
  const [category, setcategory] = useState("general");

  return (
    <BrowserRouter>
      <>
        <Header setcategory={setcategory} />
        <Routes>
          <Route path='/' element={<NewsPage category={category} />} />
          
          <Route path='/search/:query' element={<Search />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
