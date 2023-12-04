
import './App.css';
import {Login} from "./components/Login";
import {HomePages} from "./components/homepages/HomePages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Detail} from "./components/about/Detail";
import {Order} from "./components/order/Order";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<HomePages/>}></Route>
                  <Route path={"/login"} element={<Login/>}></Route>
                  <Route path={"/detail"} element={<Detail/>}></Route>
                  <Route path={"/order"} element={<Order/>}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
