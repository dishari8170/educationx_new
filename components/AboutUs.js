import React, {useEffect, useState} from "react";
import Homebnr from "@/components/homebnr";
import axios from "axios";
import {rtx} from "@/lib/Rh";

const AboutUs = () => {




    const [getxdat, setxdat] = useState({})
    function loaddataU() {

        axios.get("/api/admin/cms?name=about").then(value => {

            setxdat(value.data);

        })

    }


    useEffect(()=>{


        loaddataU()
    },[])

    return (


<>
        <div className="container-fluid bg-white d-flex justify-content-center" >
            <img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5"/>



        </div>

    <div className="w-100 bg-white">

         <div className="text-black container text-center pb-5" dangerouslySetInnerHTML={{__html:getxdat.text}}>


         </div>

    </div>

</>

    );






}

export default AboutUs;