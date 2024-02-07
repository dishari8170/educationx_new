import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";

export  default ()=>{

const [getxdat, setxdat] = useState([])
function loaddataU() {

    axios.get("/api/admin/ach").then(value => {

        setxdat(value.data);

    })

}


useEffect(()=>{


    loaddataU()
},[])

return (


    <>
        <HeadderX/>
        {/*<div className="container-fluid bg-white d-flex justify-content-center" >*/}
        {/*    <img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5"/>*/}



        {/*</div>*/}

        <div className="w-100 bg-white px-4 pb-5">
            <div className="row text-black" >
            {getxdat.map((op,inx)=>{


                return  inx%2===0? <>
                    <div className="col-12 col-md-7 p-3 " >
                        <img  className="img-fluid" src={rtx.cdn+"/"+op.dp}  alt={"h"}/>
                    </div>

                    <div className="col-12 col-md-5 p-3">
                        <div className=" " dangerouslySetInnerHTML={{__html:op.text}}></div>

                    </div></>

                :<>
                        <div className="col-12 col-md-5 p-lg-3 ">

                            <div className="text-wrap overflow-x-scroll" dangerouslySetInnerHTML={{__html:op.text}}></div>

                        </div>
                    <div className="col-12 col-md-7 pt-3">
                        <img  className="img-fluid" src={rtx.cdn+"/"+op.dp}  alt={"kk"}/>
                    </div>



                </>

            })}
            </div>

        </div>
        <Futter/>

    </>

);

}

