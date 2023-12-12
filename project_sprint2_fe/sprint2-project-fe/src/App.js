
import './App.css';
import {Login} from "./components/Login";
import {HomePages} from "./components/homepages/HomePages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Detail} from "./components/about/Detail";
import {Order} from "./components/order/Order";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {ProductList} from "./components/product/ProductList";
import {ProductDetail} from "./components/about/ProductDetail";
import {BrandList} from "./components/product/BrandList";
function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<HomePages/>}></Route>
                  <Route path={"/login"} element={<Login/>}></Route>
                  <Route path={"/product/detail/:id"} element={<ProductDetail/>}></Route>
                  <Route path={"/order/:id"} element={<Order/>}></Route>
                  <Route path={"/product/:id"} element={<ProductList/>}></Route>
                  <Route path={"/product/brand/:id"} element={<BrandList/>}></Route>
              </Routes>
          </BrowserRouter>
          <ToastContainer/>
      </>
  );
}

export default App;
