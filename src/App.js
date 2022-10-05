import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './components/Blog/Blog'
import BlogArticle from './components/Blog/BlogArticle';
import Clubs from './pages/Clubs/Clubs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Franchise from './pages/Franchise';
import Structures from './pages/Structures';
import Structure from './pages/Structure';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        {/* PUBLIC ROUTES */}
        <Route path='/' element={<Home />} />
        <Route path='/clubs' element={<Clubs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/article' element={<BlogArticle />} />

        {/* PROTECTED ROUTES */}
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/structure' element={<Structure />} />
        <Route path='/structures' element={<Structures />} />
      </Route>
    </Routes>
  );
}

export default App;
