import {FaEye, FaFrog, FaKey, FaLightbulb, FaLock, FaUser} from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

export default ()=>{


    return <>

        <div className="container-fluid" style={{
            backgroundColor: "darkblue"
        }}>
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center mb-4">Teacher Dashboard</h3>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    <FaUser className="icon" /> Email Id 
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    <FaLock className="icon" /> Password
                                </label>
                                <div className="d-flex align-items-center justify-content-end ">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <FaEye className="position-absolute me-3" onClick={e=>{
                                        let y=document.getElementById("password")
                                        if (y.type==="password") {

                                            y.type="text"

                                        }else {
                                            y.type="password"
                                        }

                                    }}/>
                                </div>
                            </div>
                            <div className="justify-content-between d-flex align-items-center">

                                <div className="btn btn-primary btn-block " onClick={e=>{


                                    let  l=document.getElementById("username")

                                    let  lx=document.getElementById("password")



                                    Swal.fire({
                                        title:"Please Wait For Response..!",

                                        allowOutsideClick:false,
                                        didOpen :async (popup) => {
                                            Swal.showLoading()

                                            await axios.post("/api/sales?x=login",{email:l.value,pass:lx.value}).then(
                                                r=>{
                                                    if (r.data){

                                                        window.localStorage.setItem("sales",JSON.stringify(r.data))




                                                        Swal.fire("Success","You Have Login Successfully","success").then(o=>{

                                                            window.location.href="/admin/"
                                                        })
                                                    }else {

                                                        Swal.fire("Sorry","Email / Password Mismatch","warning")
                                                    }

                                                }
                                            )

                                        }
                                    })


                                }}>
                                    <FaKey/> Login
                                </div>
                                <div className="link-primary" onClick={event => {

                                    Swal.fire({
                                        // title:"Forget Password",
                                        html:"Enter Your Email Address",
                                        input:"text",
                                        icon:"question",
                                        showCancelButton:true,
                                        allowOutsideClick:false,
                                        showConfirmButton:true,
                                        confirmButtonText:"Reset Password"
                                    })

                                }}>
                                    <FaFrog/> Forget Password
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}