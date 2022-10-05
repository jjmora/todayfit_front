import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from './components/Blog/Blog'
import BlogArticle from './components/Blog/BlogArticle';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/article' element={<BlogArticle />} />
      </Route>
    </Routes>
  );
}

export default App;
