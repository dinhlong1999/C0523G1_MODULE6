import {Footer} from "./homepages/Footer";
import {Header} from "./homepages/Header";

export function UnAuthorization() {

    return(
        <div>
            <Header/>
            <h1 className={"p-5 text-center"}> Bạn không có quyền truy cập vào trang này</h1>
            <Footer/>
        </div>
    )
}