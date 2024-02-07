import {Field, Form, Formik} from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa6";
import {useState} from "react";
import {useRouter} from "next/router";
import {Modal} from "react-bootstrap";
import PayPalButtonx from "@/components/Plybtn";
import Swal from "sweetalert2";
import HeadderX from "@/components/headerx";


//
// export async function getServerSideProps(context) {
//
//
//     return {
//         props: {
//             raju: context.params.id,
//         },
//     }
//     // Rest of `getServerSideProps` code
// }



export default ()=>{


 const idx= useRouter().query


    const [Saving, setSaving] = useState(false);
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [getdatax, setdatx] = useState(null);



    return <>


        <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
            <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                <div className="w-100 h3"><div className="text-center">Register With Paypal</div>
                </div>
                <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>

                <PayPalButtonx amount={idx.p} onSuccess={(v,p)=>{




                    let ctp=getdatax;
                    ctp.payment=JSON.stringify(v);
                    ctp.role=idx.rx


                    axios.post("/api/users/reg",ctp).then(tx=> {




                        Swal.fire({
                            title:"Success",
                            html:"Your Registration is Complete.<br/> You will get a Confirmation Email when we will assign you to a classroom",
                            icon:"success",
                            showConfirmButton:true

                        }).then(rt=>{


                            window.location.href="/"


                        })

                    }
                    )


                    //     if (tx.data.message.indexOf("exists")){
                    //
                    //         Swal.fire("Error","Account already Exist..!","error")
                    //
                    //
                    //     }
                    //     Swal.fire("Successful","Account already Exist..!","success")
                    //
                    //     //localStorage.setItem("user",JSON.stringify(tx.data.user))
                    //
                    //     //  localStorage.setItem("raju","true")
                    //
                    //     // if (tx.data.user._id) {
                    //
                    //     // window.location.href="/"
                    //
                    //
                    //     // }
                    //
                    //
                    //
                    //
                    //
                    //
                    //
                    //
                    // })

                }}/>


            </Modal.Body>

        </Modal>
        <HeadderX/>


        <section className="text-center">
        <div className="p-5 bg-image" style={{
            backgroundColor:"lightgray",
            height: "300px"
        }}></div>

        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)"
        }}>
            <div className="card-body py-5 px-md-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">{"Registration Form For Course  " +idx.rx }</h2>
                        <Formik initialValues={{





                        }}
                                onSubmit={async (feil) => {


                                    if (feil.email==="") {

                                        toast("Add email address")
                                        return;
                                    }else if (feil.phone==="") {

                                            toast("Phone Can't be Empty")
                                            return;

                                    }else if (feil.sex==="") {

                                            toast("Gender Can't be Empty")
                                            return;

                                    }else if (feil.name==="") {

                                            toast("Name Can't be Empty")
                                            return;

                                    } else if (feil.age==="") {

                                            toast("Age Can't be Empty")
                                            return;

                                    } else if (feil.addr==="") {

                                            toast("Add  address")
                                            return;

                                    }else {

                                        setdatx(feil);

                                        setIsOpen(true)

                                    }




                                    // setSaving(true);




                                    // const Response = await axios.post("/api/users/reg",feil);


                                    // setSaving(false);
                                    //
                                    // // If all good, redirect to meeting page.
                                    // toast(Response.data.message);
                                    //
                                    // localStorage.setItem("user",JSON.stringify(Response.data.user))
                                    //
                                    // localStorage.setItem("raju","true")
                                    //
                                    // if (Response.data.user._id) {
                                    //
                                    //
                                    //     router.push("/dashboard")
                                    //
                                    //
                                    // }
                                    //




                                }

                                }

                        >
                            <Form>
                                <div className="form-outline mb-4">
                                    <Field name="name"  className="form-control" placeholder="Full Name"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <Field as="select" name="sex" className="form-control" >
                                                <option value="">Select a gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>


                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <Field name="age"  className="form-control" placeholder="Age"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <Field name="addr"  className="form-control" placeholder="Your address"/>
                                </div>
                                <div className="form-outline mb-4">
                                    <Field name="email"  className="form-control" placeholder="Email address"/>
                                </div>

                                <div className="form-outline mb-4">
                                    <Field name="phone"  className="form-control" placeholder="Phonne Number"/>

                                </div> <div className="form-outline mb-4">


                            </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value=""
                                    />
                                    <span className="form-check-label" >
                                    agree terms & conditions
                                </span>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Register
                                </button>
                            </Form>
                        </Formik>
                        <div className="text-center">
                            <p>or sign up with:</p>
                            <button name="button" className="btn btn-link btn-floating mx-1">
                                <FaFacebookF />
                            </button>

                            <button name="button" className="btn btn-link btn-floating mx-1">
                                <FaGoogle/>
                            </button>

                            <button name="button" className="btn btn-link btn-floating mx-1">
                                <FaTwitter/>
                            </button>

                            <button name="button" className="btn btn-link btn-floating mx-1">
                                <FaInstagram/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section></> ;

}