import {useEffect, useState} from "react";
import axios from "axios";
import STDash from "@/components/STDash";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import UserX from "@/lib/utils";

export default ()=>{

    const usr=UserX();

    const  [getxdat,setxdat]=useState([])


    useEffect(()=>{

        if (usr)

            axios.get("/api/admin/qgrp?h="+ usr.group ).then(value => {


                setxdat(value.data);


            })

    },[usr])

    return <>


        <HeadderX/>

        <div className="d-flex">
            <STDash/>
            <div className="d-flex w-100 justify-content-center  text-center text-white overflow-x-hidden" >

                <div className="w-100">

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Class Tests </h4>


<div className="p-5">
                    { getxdat.map(r=>{

                   return  <div className="form-control mt-1  d-flex align-items-center justify-content-between">
<div className="">{r}</div>


                       <div className="btn-primary btn
                        " onClick={sd=>{
                           window.location="/dashboard/quiz/"+r
                       }}>


                           Take Test
                       </div>

                   </div>

                }) }


            </div>


        </div>
            </div>

        </div>
        <Futter/>
    </>


}