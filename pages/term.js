import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";

export  default ()=>{

const [getxdat, setxdat] = useState({})
function loaddataU() {

    axios.get("/api/admin/cms?name=terms").then(value => {

        setxdat(value.data);

    })

}


useEffect(()=>{


    loaddataU()
},[])

return (


    <>
        <HeadderX/>
        <div className="container-fluid bg-white d-flex justify-content-center pb-3" >
            {/*<img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5"/>*/}



        </div>

        <div className="w-100 bg-white">

            <div className="text-black container text-center pb-5" dangerouslySetInnerHTML={{__html:getxdat.text}}>


            </div>

        </div>
        <Futter/>

    </>

);

}

