import React, {useEffect, useRef, useState} from "react";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";
import dynamic from "next/dynamic";
import AdminDash from "@/components/AdminDash";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";
import toast from "react-hot-toast";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    const  [isOpenE,setIsOpenE]=useState(false)

    const [xtxcc,xxxtt] = useState("dp.jpg");
    const cdata=useRef("")

    const [Editor,seteditor] = useState(null);



    function loaddataU(s="u") {

        axios.get("/api/admin/blog").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))


    },[])

    async function setvalueofdes  (rtzg)  {

        cdata.current=""+rtzg

    }




    return<>


        <div className="position-fixed btn end-0 bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4" style={{width:"60px",height:"60px",backgroundColor:"#f7a21a"}} onClick={u=>{

            setIsOpen(true)
        }}>


            <div className="h1 fw-bold text-white">+</div>
        </div>
        <div className="d-flex">

            <AdminDash/>



            <Modal show={isOpen} onHide={()=>{setIsOpen(false)}} fullscreen={true} >
                <Modal.Header>
                    <div className="w-100 h3 text-black">Add new Blog
                    </div>
                    <button onClick={event => {setIsOpen(false)}} className="bg-transparent border-0 h1 m-0 text-black">&times;</button>
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <div className="text-center"><img src={rtx.cdn+"/"+xtxcc} width={400} height={400} style={{objectFit:"scale-down"}}/></div>
                    <UploadX cb={xxxtt}/>

                    <input className="form-control my-3 h1"  id="coursexp" placeholder="title ......"/>
                    <input className="form-control py-3 h1"  id="coursex" placeholder="Subject ......"/>

                    {Editor?
                        <Editor form={setvalueofdes} hi={600}/>
                        :""}


                    <h3 className="p-3 rounded w-100 mt-3 fixed-bottom text-center btn" style={{backgroundColor:"#013571",color:"white"}} onClick={(e)=>{


                        Swal.fire({
                            title: `Do you want to  add blog`,
                            icon: "question",
                            showLoaderOnConfirm: true,
                            showCancelButton: true,
                            preConfirm() {


                                axios.post("/api/admin/blog", {

                                        dp: xtxcc,
                                        title: document.getElementById("coursexp").value,
                                        sub: document.getElementById("coursex").value,
                                        text: cdata.current

                                    }
                                ).then(() => {

                                    setIsOpenE(false)

                                    Swal.fire("Success","Blog has been added","success")
                                    location.reload()


                                })

                            }
                        })


                    }}> Add Blog </h3>

                </Modal.Body>


            </Modal>







            <div className="w-100 ">

                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Blog </h4>

                <div className=" text-center">


<div className="d-flex justify-content-between">

    <div className=""></div>




</div>

                    <ul className="list-group  ">
                        {getudat.map((item) => (
                            <li key={item._id} className="list-group-item d-flex justify-content-between">
                                {item.title}


                                <div className="">

                                    {item.course}


                                    <button
                                        onClick={() => {

                                            toast.promise(axios.delete(`/api/admin/blog?id=${item._id}`), {
                                                loading: 'deleting...',
                                                success: <b>deleted</b>,
                                                error: <b>Could not deleted.</b>,
                                            }).then(()=>

                                                {

window.location.reload()
                                                }
                                            )




                                        }}
                                        className="btn btn-danger btn-sm float-right mx-2"
                                    >
                                        Delete
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>



                </div></div>

        </div>
    </>
}