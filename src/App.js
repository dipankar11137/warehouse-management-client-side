
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Home/Blogs/Blogs';
import Home from './Components/Pages/Home/Home/Home';
import MaltiCursore from './Components/Pages/Home/MaltiCursore/MaltiCursore';
import ShowAllProducts from './Components/Pages/Home/ShowAllProducts/ShowAllProducts';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Header/Header';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='background-color'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/showallproducts' element={<ShowAllProducts></ShowAllProducts>}></Route>
        <Route path='/malticursore' element={<MaltiCursore></MaltiCursore>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
