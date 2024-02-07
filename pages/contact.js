import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import {FaEnvelope, FaPhone} from "react-icons/fa6";
import {FaMapMarkerAlt} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";

export default function About() {
    const [getxdat, setxdat] = useState({})
    function loaddataU() {

        axios.get("/api/admin/cms?name=contract").then(value => {

            setxdat(value.data);

        })

    }

    useEffect(()=>{

        loaddataU()

    },[])

    return <>

        <HeadderX/>

        <div className="container-fluid pb-5 bg-white text-black">


            <img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5" alt={""}/>


            <div className="text-center mx-lg-5 px-lg-5" dangerouslySetInnerHTML={{__html:getxdat.text}}></div>
            <div className="row d-flex align-items-center justify-content-evenly mt-5">
                <div className="col-lg-3 text-center">
                    <FaPhone className="h1 mt-5 " style={{color:"#013571"}}/>

                    <div className="" dangerouslySetInnerHTML={{__html:getxdat.phone}}></div>
                </div> <div className="col-lg-3 text-center">
                <FaEnvelope className="h1" style={{color:"#013571"}}/>
                <div className="" dangerouslySetInnerHTML=
                    {{__html:getxdat.email}}></div>
            </div> <div className="col-lg-3 text-center">
                <FaMapMarkerAlt className="h1 mt-5" style={{color:"#013571"}}/>
                <div className="" dangerouslySetInnerHTML={{__html:getxdat.addr}}></div>
            </div>
            </div>


            <div className="d-flex flex-column justify-content-center px-lg-5 mx-lg-5 ">
                <input placeholder="First Name" className="mt-3 p-2 form-control"/>
                <input placeholder="Last Name" className="mt-3 p-2 form-control"/>
                <input placeholder="Email Subject" className="mt-3 p-2 form-control"/>
                <textarea placeholder="Write Someting here ...." className="mt-3 p-2 form-control"
                          style={{height: "200px"}}/>

                <input type="button" className="btn fw-bolder px-5  btn-primary mt-5 py-3 "
                       value=" SEND MESSAGE "/>

            </div>
        </div>







    <Futter/>
    </>
}