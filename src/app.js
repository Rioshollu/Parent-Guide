import NavBar from './component/navbar';
import Footer from './component/footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ArtikelPage from "./pages/artikel-page";
import DetailPage from "./pages/detail-page";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" />
          <Route path="/about-us" />
          <Route path="/article/:id" />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
