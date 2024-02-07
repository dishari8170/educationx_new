//
// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     usePayPalScriptReducer
// } from "@paypal/react-paypal-js";
//
//
// const style = {"layout":"vertical"};
//
// function createOrder() {
//
//
//
//
//
// }
// function onApprove(data) {
//
//
// }
//
//
// const ButtonWrapper = ({ showSpinner }) => {
//     const [{ isPending }] = usePayPalScriptReducer();
//
//     return (
//         <>
//             { (showSpinner && isPending) && <div className="spinner" /> }
//             <PayPalButtons
//                 disabled={false}
//                 forceReRender={[style]}
//                 fundingSource={undefined}
//
//                 createOrder={createOrder}
//
//                 onApprove={onApprove}
//
//                 className={"btn"}
//
//             />
//         </>
//     );
// }
//
// export default () =>{
//     return (
//         <div >
//             <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" , }}>
//                 <ButtonWrapper showSpinner={false}  />
//             </PayPalScriptProvider>
//         </div>
//     );
// }





import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalButtonx = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalButton
            createOrder={(data, actions) => {
                // Your logic to create and return the order ID
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount, // Adjust this value based on your requirements
                            },
                        },
                    ],
                });
            }}

            amount={amount}
            onSuccess={onSuccess}
            onError={(op,p)=>{
                console.log(op,p)
            }}
            options={{
                clientId: 'ARkJY3_eucW5kpeNuEyuIe7Sn40TshwxccSB5sZgfixAkSvDmxh_gm3Bnh7N2vO90IAbVx-Pq1dlan-o',
                currency: 'USD',
            }}
        />
    );
};

export default PayPalButtonx;
