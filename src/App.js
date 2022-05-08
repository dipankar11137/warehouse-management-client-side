
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/Pages/Home/AddItem/AddItem';
import Blogs from './Components/Pages/Home/Blogs/Blogs';
import Home from './Components/Pages/Home/Home/Home';
import ManageItems from './Components/Pages/Home/ManageItems/ManageItems';
import MyProducts from './Components/Pages/Home/MyProducts/MyProducts';
import PutOutProducts from './Components/Pages/Home/PutOutProducts/PutOutProducts';
import ShowAllProducts from './Components/Pages/Home/ShowAllProducts/ShowAllProducts';
import UpdateProducts from './Components/Pages/Home/UpdateProducts/UpdateProducts';
import Login from './Components/Pages/Login/Login/Login';
import SignUp from './Components/Pages/Login/Login/SignUp/SignUp';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import Header from './Components/Pages/Shared/Header/Header';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className='background-color'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route path='/updateproducts/:updateproductsId' element={
          <RequireAuth>
            <UpdateProducts></UpdateProducts>
          </RequireAuth>
        }></Route>
        <Route path='/putoutproduct/:PutOutProductsId' element={
          <RequireAuth>
            <PutOutProducts></PutOutProducts>
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myproducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path='/showallproducts' element={<ShowAllProducts></ShowAllProducts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
