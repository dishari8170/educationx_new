import HeadderX from "@/components/headerx";
import AboutUs from "@/components/AboutUs";
import Futter from "@/components/futter";
import StoreX from "@/components/StoreX";
import axios from "axios";
import {useEffect, useState} from "react";
import {rtx} from "@/lib/Rh";
import Swal from "sweetalert2";

export default function Store() {
    const [xdat,setxdat] = useState([]);


    function loaddata() {

        axios.get("/api/admin/storex").then(value => {


            setxdat(value.data);



        })

    }
    function addHttpsToUrl(url) {
        if (!url.startsWith("https://")) {
            url = "https://" + url;
        }
        return url;
    }


    useEffect(()=>{




        loaddata();

    },[])



    return  <><HeadderX/>
        <StoreX/>

<div className="" style={{backgroundColor:"white"}}>
        <div className="container mt-3">


            {/*<div className="d-flex justify-content-between py-3 mb-2  container w-100 rounded-3" style={{backgroundColor:"#013571",color:"white"}}>*/}
            {/*    <h3 >Manage store Information  </h3>*/}

            {/*    <div className="btn btn-primary" onClick={(i)=>{*/}
            {/*        seteditX({})*/}
            {/*        showModal()*/}
            {/*    }}>Add New </div>*/}
            {/*</div>*/}
            <div className=" ">

                <div className="card-body " style={{backgroundColor:"white"}}>

                    <div className="row">


                        {xdat.map((tp,n)=>{
                            return <div className="col-12 position-relative col-lg-3 mt-3 py-5" key={n} style={{height:"800px"}}>

                                <div className="card bg-black text-white position-relative" style={{height:"550px"}}>

                                    <img src={rtx.cdn+"/"+tp.thumb} alt="" className="p-3 align-self-center mt-4" style={{maxHeight:"300px",maxWidth:"250px"}}/>
                                    <div className="card-body">
                                        <div className="card-text text-center h2">
                                            {tp.name}

                                            <br/>


                                        </div>
                                        <div className="text-center mb-2">{tp.bnr}</div>

                                        <div className="position-absolute bottom-0 pb-4 w-100 pe-5">

                                        <div className="d-flex  justify-content-between align-items-center">
                                            <div className="h5 ps-3 text-success">$ {tp.price}</div>
                                            <div className="btn btn-primary text-center" onClick={()=> {

window.location.href=addHttpsToUrl(tp.vdo)




                                            }}>Buy</div>
                                        </div></div>
                                    </div>
                                </div>




                            </div>

                        })}
                    </div>

                </div>


            </div>

        </div>
        </div>
        <Futter/>
    </>
}