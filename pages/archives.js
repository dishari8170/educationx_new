import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import {Modal} from "react-bootstrap";

export  default ()=>{
    const [bochax,mochax] =useState("")
    const hideModal = () => {
        setIsOpen(false);
    };

const [getxdat, setxdat] = useState([])
function loaddataU() {

    axios.get("/api/admin/ach").then(value => {

        setxdat(value.data);

    })

}
    const [isOpen, setIsOpen] = useState(false);


useEffect(()=>{


    loaddataU()
},[])

return (<>
    <Modal show={isOpen} onHide={hideModal} fullscreen={true}>


        <Modal.Body className="bg-dark m-0 position-relative">
            <button onClick={hideModal} className="text-black bg-transparent position-absolute end-0 pe-5 text-white border-0 h1 m-0">&times;</button>

            <img  className="vw-100 vh-100" style={{objectFit:"scale-down"}} src={bochax}  alt={"kk"}/>
        </Modal.Body>
    </Modal>

        <HeadderX/>
        {/*<div className="container-fluid bg-white d-flex justify-content-center" >*/}
        {/*    <img src={rtx.cdn+"/"+getxdat.dp} className="img-fluid p-lg-5"/>*/}



        {/*</div>*/}

        <div className="w-100 bg-white px-4 pb-5">
            <div className="row text-black" >
            {getxdat.map((op,inx)=>{


                return  <>

                    <div className="col-lg-4 col-md-6 col-12" onClick={avc=>{
                       mochax(rtx.cdn+"/"+op.dp)
                        setIsOpen(true);
                    }}>
                        <div className="bg-black  d-flex rounded justify-content-center p-3 mt-4">
                    <img  className="  " height={300} width={300} src={rtx.cdn+"/"+op.dp}  alt={"kk"}/>
                        </div></div>
                </>

            })}
            </div>

        </div>

        <Futter/>

    </>

);

}

