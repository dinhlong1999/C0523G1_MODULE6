
import './App.css';
import {Login} from "./components/Login";
import {HomePages} from "./components/homepages/HomePages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<HomePages/>}></Route>
                  <Route path={"/login"} element={<Login/>}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
