// Home.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './Home.css';
import CatsCards from './CatsCards';
import Loader from '../Loader';
import NullCats from './NullCats';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

const Home = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOfflineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('offline', handleOfflineStatus);
    window.addEventListener('online', handleOfflineStatus);

    return () => {
      window.removeEventListener('offline', handleOfflineStatus);
      window.removeEventListener('online', handleOfflineStatus);
    };
  }, []);

  useEffect(() => {
    const API_KEY = 'live_dvK2fH3g0yWOKPiV3eXoDv7io5hlvw85ThwgrpGzr4HNDa4NK1WeJO72xB0YfxYx';
    const fetchCats = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("cats data: ", data);
        setCats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCats = cats.filter(cat => cat.id.toLowerCase().includes(searchTerm));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className='home'>
              <div className='filters search-bar'>
                <TextField
                  id="search"
                  className='grouped-demo'
                  label="Search by ID"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  sx={{ width: '100%' }}
                />
              </div>
              <div className='cats_sec'>
                <h1>Cats:</h1>
                <div className="cat-list">
                  <ul>
                    {filteredCats.map((cat, index) => (
                      <li key={index}>
                        <CatsCards
                          id={cat.id}
                          url={cat.url}
                          width={cat.width}
                          height={cat.height}
                        />
                      </li>
                    ))}
                  </ul>
                  {loading && <Loader />}
                  {!loading && filteredCats.length === 0 && (
                    <NullCats />
                  )}
                  {isOffline && <div className="offline-msg">Can't fetch Cats, you're offline.</div>}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Home;
