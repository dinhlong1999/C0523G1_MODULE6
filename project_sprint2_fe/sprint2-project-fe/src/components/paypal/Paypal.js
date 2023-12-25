
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import * as orderService from "../../service/orderService";
import {useNavigate} from "react-router-dom";

// This value is from the props in the UI
const style = {"layout":"vertical"};


// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ currency,showSpinner,amount,payload,close }) => {
    const [{ isPending,options },dispatch] = usePayPalScriptReducer();
    const navigate = useNavigate();




    useEffect(()=>{
        // dispatch({
        //     type:'resetOptions',
        //     value : {
        //         ...options,currency: currency
        //     }
        // })

    },[])
    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style,currency,amount]}
                fundingSource={undefined}
                createOrder= {(data, actions) =>
                    actions.order.create({
                        purchase_units:[{
                            amount: {currency_code: currency,value:amount}}
                        ]
                    }).then(cartId => cartId)}
                onApprove={(data,actions) => {
                    actions.order.capture().then(async (response)=>{
                        if (response.status === 'COMPLETED'){
                            close();
                            const result = await orderService.saveOrder(payload);
                            if (result.status === 201) {
                                toast.success("Thanh toán thành công")
                                navigate("/history")
                            }
                            console.log(payload);
                        }
                    })
                }}

                onError={(err) =>{
                    toast.error("Thanh toán bằng paypal thất bại" + err)
                }}
            />

        </>
    );
}

export default function Paypal({amount,payload,close}) {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
                <ButtonWrapper payload={payload} currency={'USD'} amount={amount} showSpinner={false} close={close} />
            </PayPalScriptProvider>

        </div>
    );
}