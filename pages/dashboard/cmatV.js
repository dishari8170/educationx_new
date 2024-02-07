import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import Futter from "@/components/futter";
import DsFaq from "@/components/dashboard/DsFAQ";
import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";



export default function () {
    const [xdat,setxdat] = useState([]);

    function loaddata() {
        axios.get("/api/admin/mat?id="+(JSON.parse(localStorage.getItem("user")).group )).then(value => {


            setxdat(value.data);


        })

    }

    useEffect(()=>{


        loaddata();
    },[])

    return <div>


        <div className="">    <HeadderX/>

            <div className="d-flex" >
                <STDash/>

                <div className="w-100 overflow-x-hidden" >
                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Downloads Course Materials</h4>



                    <ul className="list-group m-5">
                        {xdat.map((item) => (
                            <li key={item._id} className="list-group-item d-flex justify-content-between">
                                {item.title}


                                {<a href={`https://edux.codeyourbusiness.site/${item.link}`} className="btn btn-primary btn-sm float-right">Download</a>}

                            </li>
                        ))}
                    </ul>

                </div>

            </div>

            <Futter/>


        </div>
    </div>

}