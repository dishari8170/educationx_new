import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import Futter from "@/components/futter";
import DsFaq from "@/components/dashboard/DsFAQ";
import GradeC from "@/components/dashboard/GradeC";
import UserX from "@/lib/utils";
import {useEffect, useState} from "react";
import axios from "axios";



export default function () {
    const usr=UserX()
    const [getx,setx]=useState([])

    useEffect(()=>{

        if (usr)
            axios.get("/api/admin/qes?id="+usr?._id).then(r =>{


                setx(r.data)
            })


    },[usr])

    return <div className="">  <HeadderX/>



        <div className="d-flex">
            <STDash/>
            <div className="d-flex w-100 justify-content-center  text-center text-white overflow-x-hidden" >

                <div className="w-100">


                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>New Assignment </h4>

                    <div className="d-flex justify-content-center text-white" >





                            <table className="table table-bordered text-white" style= {{backgroundColor:"#013571"}}>
                                <thead >
                                <tr className="bg-danger">
                                    <th className="text-white" style= {{backgroundColor:"#847D9A"}}>Test Name</th>
                                    <th className="text-white" style= {{backgroundColor:"#847D9A"}}>Total Marks</th>
                                    <th className="text-white" style= {{backgroundColor:"#847D9A"}}>Marks Obtained</th>
                                    <th className="text-white" style= {{backgroundColor:"#847D9A"}}>Grade</th>
                                </tr>
                                </thead>
                                <tbody>



                                {getx.map(rt=> {
                                    return <tr>
                                        <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.q}</td>
                                        <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[0]}</td>
                                        <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[1]}</td>
                                        <td className="text-white" style={{backgroundColor: "#013571"}}>{rt.x[2]}</td>
                                    </tr>

                                })
                                }

                                </tbody>
                            </table>







                        

                    </div></div>
            </div>




</div>
        <Futter/>
    </div>

}