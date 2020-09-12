import React from 'react';
import BookList from './components/BookList.js';
import Navbar from './components/Navbar.js';
import ThemeToggle from './components/ThemeToggle.js';
import ThemeContextProvider from './context/ThemeContext.js';


function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
