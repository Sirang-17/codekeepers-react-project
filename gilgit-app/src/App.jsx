import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
  const [searchQuery, setSearchQuery] = useState(""); // New search state
  const [selectedCategory, setSelectedCategory] = useState("All"); //catagory state

  useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f121a] transition-colors duration-300">
        {/* Pass searchQuery and the setter to Navbar */}
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} 
        />
        <main>
          <Routes>
            {/* Pass searchQuery to Home to filter products */}
            <Route path="/" element={<Home 
            searchQuery={searchQuery} 
            selectedCategory={selectedCategory}/>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;