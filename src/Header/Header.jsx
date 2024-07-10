import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './header.css';
import newsLogo from '../media/newsLOGO.png';
import { useNavigate } from 'react-router-dom';

function ColorSchemesExample({ setcategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };
  const handleClickcategory = (category) => {
    // e.preventDefault();
      setcategory(category);
      navigate(`/`);
    
  };

  return (
    <div bg="light" data-bs-theme="light" fixed='top' id='navbar'>
      <div className='Container'>
        <div id='NavHead' onClick={()=>handleClickcategory('general')}><img src={newsLogo} alt=""  /> </div>
        <ul>
          <li onClick={() => handleClickcategory("general")} >General</li>
          <li onClick={() => handleClickcategory("business")}>Business</li>
          <li onClick={() => handleClickcategory("entertainment")}>Entertainment</li>
          <li onClick={() => handleClickcategory("health")}>Health</li>
          <li onClick={() => handleClickcategory("science")}>Science</li>
          <li onClick={() => handleClickcategory("sports")}>Sports</li>
          <li onClick={() => handleClickcategory("technology")}>Technology</li>
        </ul>
        <Form className="d-flex" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search"
            className="inputfield"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" id='searchbtn' type="submit">Search</Button>
        </Form>
      </div>
    </div>
  );
}

function Header({ setcategory }) {
  return (
    <>
      <ColorSchemesExample setcategory={setcategory} />
    </>
  );
}

export default Header;
export { ColorSchemesExample };
