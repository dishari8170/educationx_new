import UploadX from "@/components/UploadX";
import Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Plybtn from "@/components/Plybtn";
import {useRef, useState} from "react";
import HeadderX from "@/components/headerx";
import PayPalButtonx from "@/components/Plybtn";
import {Modal} from "react-bootstrap";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/router";

export default ()=>{
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [getdatax, setdatx] = useState(null);

    const foemrt=useRef(null)
    const DisplayingErrorMessagesSchema = Yup.object().shape({
        // Fname: Yup.string()
        //     .required('Required'),
        // Lname: Yup.string()
        //     .required('Required'),
        // email: Yup.string().email('Invalid email').required('Required'),
        // phone: Yup.string().required('Required'),
        // email: Yup.string().required('Required'),
    });

   return<>

       <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
           <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
               <div className="w-100 h3"><div className="text-center">Register With Paypal</div>
               </div>
               <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
           </Modal.Header>
           <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>

               <PayPalButtonx onSuccess={()=>{

                   axios.post("/api/users/reg",getdatax).then(tx=>{








                       if (tx.data.message.indexOf("exists")){

                           Swal.fire("Error","Account already Exist..!","error")


                       }
                       Swal.fire("Successful","Account already Exist..!","success")

                       //localStorage.setItem("user",JSON.stringify(tx.data.user))

                     //  localStorage.setItem("raju","true")

                       // if (tx.data.user._id) {

                           window.location.href="/"


                       // }








                   })

               }}/>


           </Modal.Body>

       </Modal>
           <HeadderX/>
    <div className="container pt-3">
        <div className="card px-3 py-3 mt-5">
            <h1 className="justify-content-center d-flex">
                Registration form
            </h1>
            <Formik
                innerRef={(f) => (foemrt.current = f)}
                initialValues={{
                    Fname: '',
                    email: '',
                    Lname: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {




                    values.name=values.Fname+" "+values.lastName
                    setdatx(values)
                    setIsOpen(true)

                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">First Name</div>
                                <Field className={"form-control mb-3 " + (errors.Fname && touched.Fname ? " is-invalid" : "")} type="text" name="Fname" placeholder="Joe" />
                                {touched.Fname && errors.Fname && <div className="error-message text-danger">{errors.Fname}</div>}
                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Last Name</div>
                                <Field className={"form-control mb-3" + (errors.Lname && touched.Lname ? " is-invalid" : "")} type="Lname" name="lastName" placeholder="Cool" />
                                {touched.Lname && errors.Lname && <div className="error-message text-danger">{errors.Lname}</div>}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Enter Email</div>
                                <Field className={"form-control mb-3 " + (errors.Lname ? " is-invalid" : "")} type="text" name="email" placeholder="Email Address" />
                                {<div className="text-danger">{errors.email}</div>}
                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">
                                    Phone Number
                                </div>
                                <Field className={"form-control mb-3 " + (errors.phone ? " is-invalid" : "")} type="text" name="phone" id="" placeholder={"Phone"}/>
                                {<div className="text-danger">{errors.phone}</div>}


                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Enter Age</div>
                                <Field className={"form-control mb-3 " + (errors.age ? " is-invalid" : "")} type="text" name="age" placeholder="Your Age" />
                                {<div className="text-danger">{errors.age}</div>}
                            </div>
                            <div className="col-sm-6 col-mg-6">


                                <div className="mb-1 fw-bold">Gender</div>

                                <Field  as={"select"} className={"form-control mb-3 " + (errors.sex ? " is-invalid" : "")}  name="sex" id="" >

                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </Field>
                               
                                
                                {<div className="text-danger">{errors.sex}</div>}


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Enter Company</div>
                                <Field className="form-control mb-3" type="text" name="com" id="" placeholder={"My Company"}/>
                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Street Addresss</div>
                                <Field className="form-control mb-3" type="text" name="saddr" id="bnr" placeholder={"123 Some Street"}/>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Address Line 2.</div>
                                <Field className="form-control mb-3" type="text" name="a2" id="" placeholder={"Apt 1A"}/>
                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Address Line 3.</div>
                                <Field className="form-control mb-3" type="text" name="a2" id="bnr" placeholder={"Address Line 3"}/>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">City</div>
                                <Field className="form-control mb-3" type="text" name="city" id="" placeholder={"City"}/>

                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">State</div>
                                <Field className="form-control mb-3" type="text" name="state" id="bnr" placeholder={"State"}/>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-mg-6">

                                <div className="mb-1 fw-bold">Zip / Postal Code
                                </div>
                                <Field className="form-control mb-3" type="text" name="zip" id="" placeholder={"Zip"}/>

                            </div>
                            <div className="col-sm-6 col-mg-6">

                                <div  className="mb-1 fw-bold"> Country
                                </div>
                                <Field className="form-control mb-3" type="text" name="country" id="" placeholder={" Country"}/>
                            </div>

                        </div>



                        <div className="d-flex px-2 justify-content-center" >

                            <input type={"submit"} className="fw-bold btn btn-primary" value={"Submit"}/>




                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
    </>
}