import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AddressForm from './Pages/AddressForm'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewProduct from './Pages/NewProduct';
// Lazy load the components
const Navbar = lazy(() => import('./Components/Header/Navbar'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const Cart = lazy(() => import('./Pages/Cart'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const ProductList = lazy(() => import('./Pages/ProductsList'));
const Products = lazy(() => import('./Pages/Products'));
const ScrollToTop = lazy(() => import("./Components/ScrollToTop"));
const SearchPage = lazy(() => import("./Pages/SearchPage"));
const Error = lazy(() => import('./Pages/Error'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const SignUp = lazy(()=>import("./Pages/SignUp"))
// const Addresform = lazy(()=>import("./Pages/AddressForm"))
const AllAddress = lazy(()=>import("./Pages/AllAddress"))
const EditAddress = lazy(()=>import("./Pages/EditAddress"))
const Login = lazy(()=>import("./Pages/Login"))


const UserDashboard = () => {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  console.log(isLoggedIn);
  
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>



      <Routes>
        {/* Default Route to Homepage */}
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Loading HomePage...</div>}>
           {
            isLoggedIn?<HomePage/>:<SignUp/>
           }
             
            </Suspense>
          } 
        />


        {/* Routes for Product Details and Cart */}
        <Route 
          path="/home" 
          element={
            <Suspense fallback={<div>Loading HomePage...</div>}>
              <HomePage />
            </Suspense>
          } 
        />
        <Route 
          path="/ProductList" 
          element={
            <Suspense fallback={<div>Loading ProductList...</div>}>
              <ProductList />
            </Suspense>
          } 
        />
        <Route 
          path="/productDetails/:id" 
          element={
            <Suspense fallback={<div>Loading ProductDetails...</div>}>
              <ProductDetails />
            </Suspense>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <Suspense fallback={<div>Loading Cart...</div>}>
              <Cart />
            </Suspense>
          } 
        />
        <Route 
          path="/Products/:slug" 
          element={
            <Suspense fallback={<div>Loading Products...</div>}>
              <Products />
            </Suspense>
          } 
        />
        <Route 
          path="/search/:value" 
          element={
            <Suspense fallback={<div>Loading SearchPage...</div>}>
              <SearchPage />
            </Suspense>
          } 
        />
        <Route 
          path='/checkout' 
          element={
            <Suspense fallback={<div>Loading Checkout...</div>}>
              <Checkout />
            </Suspense>
          } 
        />
        <Route 
          path='/addresform' 
          element={
            <Suspense fallback={<div>Loading Error...</div>}>
              <AddressForm />
            </Suspense>
          } 
        />

          <Route 
          path='/addresses' 
          element={
            <Suspense fallback={<div>Loading Error...</div>}>
              <AllAddress />
            </Suspense>
          } 
        />


       <Route 
          path='/edit/:id' 
          element={
            <Suspense fallback={<div>Loading Error...</div>}>
              <EditAddress />
            </Suspense>
          } 
        />


          <Route 
          path='/signup' 
          element={
            <Suspense fallback={<div>Loading Error...</div>}>
              <SignUp /> 
            </Suspense>
          } 
        />

          <Route 
          path='/login'
          element={
            <Suspense fallback={<div>Loading.....</div>}>
              <Login/>
            </Suspense>
          }
          />

<Route 
          path='/new/product'
          element={
            <Suspense fallback={<div>Loading.....</div>}>
              <NewProduct/>
            </Suspense>
          }
          />
      
    
         <Route 
          path='*' 
          element={
            <Suspense fallback={<div>Loading Error...</div>}>
              <Error />
            </Suspense>
          } 
        />
       

      </Routes>
    </Router>
  );
};

export default UserDashboard;
