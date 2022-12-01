import NavBar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ArtikelPage from './pages/artikel-page';
import DetailPage from './pages/detail-page';
import AboutPage from './pages/about-page';
import { useState, useMemo, useEffect } from 'react';
import ThemeContext from './contexts/themeContent';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  
  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, [theme]);
  
  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <main data-theme={theme}>
          <NavBar />
          <Routes>
            <Route path="/*" element={<p>Halaman Tidak Ditemukan..</p>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/article" element={<ArtikelPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/article/detail/:id" element={<DetailPage />} />
          </Routes>
          <Footer />
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
