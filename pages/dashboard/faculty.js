import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import FacultyX from "@/components/dashboard/FacultyX";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";

export default function About() {


    const  [getxdat,setxdat]=useState([])


    function loaddataU(s="u") {




        axios.get("/api/admin/fac?id="+JSON.parse(localStorage.getItem("user")).group).then(value => {


            setxdat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);


    return (
        <div className="">

<HeadderX/>
            <div className="d-flex">
                <STDash/>
                <div className="d-flex w-100 justify-content-center  text-center text-white overflow-x-hidden" >

                    <div className="w-100">


                        <h4 className="fw-bold w-100 py-3 text-center"
                            style={{backgroundColor: "#f7a21a", color: "white"}}>Faculty Member</h4>

                        <div className="row justify-content-center">
                        { getxdat.map(p=>{


                            return    <div className="d-flex col-12 col-lg-4 justify-content-between align-items-center pt-4 card bg-transparent border-0" style={{ width:"400px"}}>
                                <div className="text-center">
                                    <img className="rounded-circle mb-3" src={rtx.cdn+"/"+p.dp} alt="Person" width="200" height="200"/>
                                    <p className="h4 " style={{color:"#013571"}}>{p.name}</p>
                                    <p className="text-white">{p.position}</p>
                                </div>

                            </div>


                        })


                        }
                        </div>

                    </div>
                </div>


            </div>

            <Futter/>

        </div>
    );
}