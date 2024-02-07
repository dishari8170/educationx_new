import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";

export  default ()=>{

const [getxdat, setxdat] = useState({})
function loaddataU() {

    axios.get("/api/admin/cms?name=policy").then(value => {

        setxdat(value.data);

    })

}


useEffect(()=>{


    loaddataU()
},[])

return (


    <>
        <HeadderX/>

        <div className="w-100 bg-white pt-4">

            <div className="text-black container text-center pb-5" dangerouslySetInnerHTML={{__html:getxdat.text}}>


            </div>

        </div>
        <Futter/>

    </>

);

}

