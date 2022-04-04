import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
