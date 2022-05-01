
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Home/Blogs/Blogs';
import Home from './Components/Pages/Home/Home/Home';
import MaltiCursore from './Components/Pages/Home/MaltiCursore/MaltiCursore';
import ShowAllProducts from './Components/Pages/Home/ShowAllProducts/ShowAllProducts';
import Login from './Components/Pages/Login/Login/Login';
import SignUp from './Components/Pages/Login/Login/SignUp/SignUp';
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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
