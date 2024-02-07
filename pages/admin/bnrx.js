import UploadX from "@/components/UploadX";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import {FaTimes} from "react-icons/fa";
import Headerx from "@/components/headerx";
import AdminDash from "@/components/AdminDash";

export default ()=>{


    const [dp,setdp]=useState([])



    function loaddataU(s="u") {

        axios.get("/api/admin/bnr").then(value => {


            setdp(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);



    return<>
        <Headerx/>

        <div className="d-flex">
            <AdminDash/>


<div className="container">
    <h4 className="fw-bold w-100 py-3 text-center"
        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Banner Images ( Use 500px height ) </h4>


    <div className="mt-2">

        <div className="upload"></div>
        <UploadX cb={(o=>{


            axios.post("/api/admin/bnr",{dp:o}).then(value => {


                setdp([...dp,{dp:o}]);

            })




        })}/>


        <div className="mt row">

            {dp.map((op,inx)=>{

                return <div className="col-12 col-md-6 col-lg-4 mt-2 position-relative">


                    <div className="position-absolute end-0 me-4 display-4">

                        <FaTimes style={{cursor:"pointer"}} onClick={p=>{


                            axios.delete(`/api/admin/bnr?id=${op._id}`).then(o=>{
                                window.location.reload()
                            })
                        }}/>

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