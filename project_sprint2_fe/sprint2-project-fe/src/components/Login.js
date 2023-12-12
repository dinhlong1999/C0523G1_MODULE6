import "../css/logincss.css"
import "../css/util.css"
import "../css/main.css"
import * as loginService from "../service/loginService";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Header} from "./homepages/Header";
export function Login() {
    const navigate =useNavigate();

    const initValue = {
        userName : "",
        password : "",
    }

    const validate = {
        userName : yup.string()
            .required("This field is required")
            .matches(/^[a-zA-Z0-9]+$/,"The name cannot contain special characters"),
        password: yup.string()
            .required("This field is required")
    }

    const login = async (account) => {
        try{
            const result = await loginService.login(account);
            console.log(result)
            if (result.status ===200){
                await loginService.addAccessToken(result.data.jwtToken);
                toast.success("Đăng nhập thành công")
                navigate("/")
            }
        }catch (e) {
            toast.error("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại")
        }

    }


    return(

    <div>
        <Header/>
        <div className="limiter">
            <div
                className="container-login100">
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <h1 className="login100-form-title ">Đăng nhập</h1>
                    {/*<a href="#" className="btn-face m-b-20">*/}
                    {/*    <i className="fa fa-facebook-official" />*/}
                    {/*    Facebook*/}
                    {/*</a>*/}
                    {/*<a href="#" className="btn-google m-b-20">*/}
                    {/*    <img src="https://i.pinimg.com/736x/74/65/f3/7465f30319191e2729668875e7a557f2.jpg" alt="GOOGLE"/>*/}
                    {/*    Google*/}
                    {/*</a>*/}

                        <Formik initialValues={initValue} onSubmit={(value)=>login(value)} validationSchema={yup.object(validate)}>
                        <Form>
                            <div className="p-t-31 p-b-9">
                                <h3 className="txt1">Tên tài khoản:<span style={{color:"red"}}>*</span></h3>
                            </div>
                            <div
                                className="wrap-input100 validate-input">
                                <Field className="input100" type="text" name="userName" />
                                <span className="focus-input100" />
                            </div>
                            <ErrorMessage name={"userName"} component={"div"} className={"error"} style={{color:"red"}}/>
                            <div className="p-t-13 p-b-9">
                                <h3 className="txt1">Mật khẩu:<span style={{color:"red"}}>*</span></h3>

                            </div>
                            <div
                                className="wrap-input100 validate-input">
                                <Field className="input100" type="password" name="password"/>
                                <span className="focus-input100" />
                            </div>
                            <ErrorMessage name={"password"} component={"div"} className={"error"} style={{color:"red"}}/>
                            <div className="container-login100-form-btn m-t-17">
                                <button className="login100-form-btn"><i className="fa-solid fa-sync fa-spin"></i>Đăng nhập </button>
                            </div>
                            <div className="w-full text-center p-t-55">
                                <span className="txt2">Not a member?</span>
                                <a href="#" className="txt2 bo1">
                                    Sign up now
                                </a>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
        <div id="dropDownSelect1" />
    </div>







    )
}