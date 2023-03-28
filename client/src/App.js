import NavBarHeader from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Router>
        <NavBarHeader />
        <main className='py-3'>
          <Routes>
            <Route path='*' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
