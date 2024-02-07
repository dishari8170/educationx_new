import UploadX from "@/components/UploadX";
import Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Plybtn from "@/components/Plybtn";

export default ()=>{
    const DisplayingErrorMessagesSchema = Yup.object().shape({
        Fname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Field Required'),
        Lname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Field Required'),
        email: Yup.string().email('Invalid email').required('Field Required'),
    });

   return  <div className="container pt-3">
        <div className="card px-3 py-3 mt-5">
            <h1 className="justify-content-center d-flex">
                Registration form
            </h1>
            <Formik
                initialValues={{
                    Fname: '',
                    email: '',
                    Lname: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
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
                                <Field className="form-control mb-3" type="text" name="email" placeholder="Email Address" />
                                {touched.email && errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">Enter Password</div>
                                <Field className="form-control mb-3" type="text" name="pass" placeholder="Password" />
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
                                <Field className="form-control mb-3" type="text" name="country" id="" placeholder={"Select Country"}/>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-mg-6">
                                <div className="mb-1 fw-bold">
                                    Phone Number
                                </div>
                                <Field className="form-control mb-3" type="text" name="phone" id="" placeholder={"Phone"}/>

                            </div>
                            <div className="col-sm-6 col-mg-6">

                                <div className="mb-1 fw-bold">Fax
                                </div>
                                <Field className="form-control mb-3" type="text" name="fax" id="" placeholder={"Fax"}/>
                            </div>

                        </div>

                        <div className="row px-2" onClick={(r)=>{}}>
                            <button className="form-control " >Register With... <Plybtn/></button>

                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    </div>
}