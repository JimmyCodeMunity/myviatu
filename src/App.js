import logo from './logo.svg';
import './App.css';
import BlogPage from './pages/BlogPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (

    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='/blog' element={<BlogPage />}></Route>

    </Routes>

  );
}

export default App;
