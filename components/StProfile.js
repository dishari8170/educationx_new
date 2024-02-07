import UserX from "@/lib/utils";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";
import {FaPencil} from "react-icons/fa6";
import axios from "axios";


export default function () {


    const [dp, setdp] = useState("dp.jpg")
    const [xx, chx] = useState(true)

    const usr = UserX();


    useEffect(() => {

        setdp(JSON.parse(window.localStorage.getItem('user')).dp)

    }, [])
    const shox = (ti, v) => {

        Swal.fire({
            title: "" + ti,


            icon: "question",
            showConfirmButton: true,
            confirmButtonText: "Change",
            input: "text",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: async (inputValue) => {


                let yi = {}
                yi[v] = inputValue
                let h = await axios.post("/api/users/updatex?id=" + usr._id, yi)

                localStorage.setItem("user", JSON.stringify(h.data))

                window.location.reload()

            }

        }).then(ii => {

        })

    }

    const changedp = async (ty) => {


        let h = await axios.post("/api/users/updatex?id=" + usr._id, {dp: ty})

        localStorage.setItem("user", JSON.stringify(h.data))
        window.location.reload()


    }

    return <div className="w-100 fw-bold text-white">

        <h4 className="fw-bold w-100 py-3 text-center"
            style={{backgroundColor: "#f7a21a", color: "white"}}>Profile</h4>
        <div className="row  text-center justify-content-center">

            <div className="col-12 justify-content-center d-flex ">

                <div className="">

                    <div className={xx ? "rounded-circle p-1" : ""} style={{backgroundColor: xx ? "gray" : "white"}}>
                        {xx ? <img src={rtx.cdn + "/" + dp} width={150} height={150} alt="Image"
                                   className="rounded-circle"/> : <UploadX cb={changedp}/>}
                    </div>
                    <div className="rounded-4 text-bg-dark  border-primary border mt-2" onClick={r => {
                        chx(!xx)
                    }}><small style={{cursor: "pointer"}}>  {xx ? "Change image" : "Cancel"}</small></div>
                </div>
            </div>


            <div className="col-12 mt-3 col-lg-10 ">
                <div className="rounded py-2  w-100" style={{backgroundColor: "#f7a21a"}} onClick={(o) => {

                    shox("Name...?", "name")
                }}>
                    <div className="w-100">{usr?.name} <FaPencil className="float-end me-3 mt-1"/></div>
                </div>

            </div>


            <div className="col-12 mt-3 col-lg-5  ">


                <div onClick={i => {
                    shox("What is Your Age")
                }} className="rounded py-2  w-100" style={{backgroundColor: "#f7a21a"}}>
                    <div className="w-100"><div className=""></div>{usr?.age}<FaPencil className="float-end me-3 mt-1"/></div>
                </div>


            </div>

            <div className="col-12 mt-3 col-lg-5">

                <div onClick={i => {
                    shox("What is Your Gender...?", "sex")
                }} className="rounded py-2  w-100" style={{backgroundColor: "#f7a21a"}}>
                    <div className="w-100"><div className=""></div>{usr?.sex}<FaPencil className="float-end me-3 mt-1"/></div>
                </div>

            </div>
            


            <div className="col-12 mt-3 col-lg-5">

                <div onClick={(o) => {

                    shox("Whats Your Phone Number...?", "phone")


                }} className="rounded py-2  w-100" style={{backgroundColor: "#f7a21a"}}>
                    <div className="w-100">{usr?.phone}
                       <FaPencil className="float-end me-3 mt-1 "/>

                    </div>

                </div>
            </div>

            <div className="col-12 mt-3 col-lg-5">

                <div onClick={(o) => {

                        shox("Whats Your Email Address...?", "email")
                    }}

                    className="rounded py-2  w-100 d-flex" style={{backgroundColor: "#f7a21a"}}>

                    <div className="text-truncate " style={{width:"90%"}}>
                       {usr?.email}

                    </div>
                    <div className="" style={{width:"10%"}}>
                    <FaPencil className="float-end me-3 mt-1"/>
                </div>


                </div>

            </div>

            <div className="col-12 mt-3 col-lg-10">
            <div onClick={(o) => {

                shox("Whats Your Address...?", "addr")
            }} className="rounded py-2  w-100" style={{backgroundColor: "#f7a21a"}}>
                <div className="w-100"><div className=""></div>
                    {usr?.addr}
                   <FaPencil className="float-end me-3 mt-1"/></div>
            </div>

            </div>


        <div className="mt-3 text-center col-6">

            <div className="btn btn-primary w-100" onClick={r => {


                shox(" Enter Your New Password", "password")


            }}> Change Password
            </div>


        </div>
        </div>

    </div>
}