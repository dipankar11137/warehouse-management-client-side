
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Home/Blogs/Blogs';
import Home from './Components/Pages/Home/Home/Home';

import Header from './Components/Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
