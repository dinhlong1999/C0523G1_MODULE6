import './App.css';
import {Login} from "./components/Login";
import {HomePages} from "./components/homepages/HomePages";
import {Route, Routes} from "react-router-dom";
import {Order} from "./components/order/Order";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {ProductList} from "./components/product/ProductList";
import {ProductDetail} from "./components/about/ProductDetail";
import {BrandList} from "./components/product/BrandList";
import {History} from "swiper/modules";
import {HistoryBuy} from "./components/history/HistoryBuy";
import {Manager} from "./components/manager/Manager";
import {requestFilter} from "./service/RequestFilter";
import Authorization from "./authorization/Authorization";
import {EnumRole} from "./authorization/EnumRole";
import {UnAuthorization} from "./components/UnAuthorization";

function App() {

    requestFilter();
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePages/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/product/detail/:id"} element={<ProductDetail/>}></Route>
                <Route path={"/product/:id"} element={<ProductList/>}></Route>
                <Route path={"/product/brand/:id"} element={<BrandList/>}></Route>
                <Route path={"/403"} element={<UnAuthorization />}></Route>
                <Route path={"/order"} element={<Order/>}></Route>
                <Route path={"/history"} element={<HistoryBuy/>}></Route>
            </Routes>
            {/*<Routes>*/}
            {/*    <Route element={<Authorization*/}
            {/*        allowedRoles={[*/}
            {/*            EnumRole.ADMIN,*/}
            {/*            EnumRole.USER*/}
            {/*        ]}/>}>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            <Routes >
                <Route element={<Authorization
                    allowedRoles={
                       [EnumRole.ADMIN]
                }/>}>
                    <Route path={"/admin"} element={<Manager/>}></Route>
                </Route>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
