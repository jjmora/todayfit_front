import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Blog from './Components/Blog'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
