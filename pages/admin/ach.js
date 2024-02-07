import UploadX from "@/components/UploadX";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import {FaCheck, FaTimes} from "react-icons/fa";
import dynamic from "next/dynamic";
import {FaPencil} from "react-icons/fa6";
import AdminDash from "@/components/AdminDash";
import Headerx from "@/components/headerx";

export default ()=>{


    const [dp,setdp]=useState([])
    const [dpx,setdpx]=useState(null)



    function loaddataU(s="u") {

        axios.get("/api/admin/ach").then(value => {


            setdp(value.data);

        })

    }

    const [Editor, seteditor] = useState(null);
    const [ed, seted] = useState("");

const rxd=useRef("");

    const editx = () => {

        seteditor(dynamic(() => import("@/components/Editor/index")))

    }
    const setvalueofdes = ( cfv) => {

        rxd.current=cfv;


    }

    useEffect(() => {
        editx()
        loaddataU()
    }, []);



    return<>

        <Headerx/>

        <div className="d-flex">
        <AdminDash/>
        <div className="container">

            <div className="mt-2">


                <UploadX cb={(o=>{


                  setdpx(o)




                })}




                />

<div className="row mt-2">
    <div className="col-12 col-lg-6">

        <img src={rtx.cdn+"/"+dpx} className="img-fluid" alt=""/>
        {dpx?<div className="btn btn-primary w-100 my-3 d-none d-lg-block" onClick={o=>{


            axios.post("/api/admin/ach",{dp:dpx,text:rxd.current}).then(value => {

                window.location.reload();

            })

        }}> Submit</div>:""}
    </div>
    <div className={`col-12 ${dpx?"col-lg-6":""}`}>

        {Editor? <Editor form={setvalueofdes} value={ed } ></Editor>:""}

        {dpx?<div className="btn btn-primary w-100 my-3 d-lg-none" onClick={o=>{


            axios.post("/api/admin/ach",{dp:dpx,text:rxd.current}).then(value => {

                window.location.reload();

            })

        }}> Submit</div>:""}
    </div>



</div>
                <div className="mt row">

                    {dp.map((op,inx)=>{

                        return <div className="col-12 col-md-6 col-lg-4 mt-2 position-relative">


                            <div className="position-absolute end-0 me-4 display-4">


                                {op._id?
                                <FaTimes style={{cursor:"pointer"}} onClick={p=>{


                                    axios.delete(`/api/admin/ach?id=${op._id}`).then(o=>{
                                        window.location.reload()
                                    })
                                }}/>
                                    :""}


                            </div>



                            <img src={rtx.cdn+"/"+op.dp} className="img-fluid" alt=""/>



                        </div>
                    })}


                </div>

            </div>
        </div>

        </div>


    </>

}