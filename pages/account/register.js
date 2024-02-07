import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa6";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";
import {Router, useRouter} from "next/router";
import {redirect} from "next/navigation";
import UserX from "@/lib/utils";
const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say', 'Other'];

export default function Register() {
    const [Saving, setSaving] = useState(false);
    const router = useRouter();
const  rt=UserX();
    if (rt && rt.raju){

        router.push("/dashboard")

    }
    return <section className="text-center">
        <div className="p-5 bg-image" style={{
        backgroundImage: "url('/img/171.jpg')",
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
                        <h2 className="fw-bold mb-5">Registration Form</h2>
                        <Formik initialValues={{

                            email:"",
                            name:"",
                            sex:"",
                            age:"",
                            phone:"",
                            addr:"",



                        }}
                                onSubmit={async (feil) => {


                                    if (feil.email=="") {

                                        toast("Add email address")
                                        return;
                                    }
                            setSaving(true);

                            const Response = await axios.post("/api/users/reg",feil);
                            // setSaving(false);

                            // If all good, redirect to meeting page.
                                    toast(Response.data.message);

                                    localStorage.setItem("user",JSON.stringify(Response.data.user))

                                    localStorage.setItem("raju","true")

                                    if (Response.data.user._id) {


                                        router.push("/dashboard")


                                    }





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
                                Sign up
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
    </section>;

}




