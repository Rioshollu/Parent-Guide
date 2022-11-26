import NavBar from './component/navbar';
import Footer from './component/footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';

function App() {
  return (
    <>
    <main>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/article' />
          <Route path='/about-us' />
        </Routes>
      <Footer />
    </main>
    </>
  );
}

export default App;
