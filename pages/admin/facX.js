
import React, {useEffect, useRef, useState} from "react";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {FaEnvelope, FaKey, FaPeopleArrows, FaTrash, FaUser} from "react-icons/fa";
import dynamic from "next/dynamic";
import AdminDash from "@/components/AdminDash";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";
import Headerx from "@/components/headerx";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    const  [isOpenE,setIsOpenE]=useState(false)

    const [xtxcc,xxxtt] = useState("");
    const cdata=useRef("")



    const  [getxdat,setxdat]=useState([])


    function loaddataU(s="u") {


        axios.get("/api/admin/grp").then(value => {




            setxdat(value.data);


        })

        axios.get("/api/admin/fac").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);








    return<>



        <div className="position-fixed end-0 bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4" style={{width:"60px",height:"60px",backgroundColor:"#f7a21a"}} onClick={u=>{

            setIsOpen(true)
        }}>


            <div className="h1 fw-bold">+</div>
        </div>

<Headerx/>

        <div className="d-flex">

            <AdminDash/>






            <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
                <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                    <div className="w-100 h3"><div className="text-center">Add New Member</div>
                    </div>
                    <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                    <div className="card  bg-transparent p-5" style={{
                    }}>

                        <UploadX cb={xxxtt}/>
                        <input type="text"  name="name" className="form-control my-1 rtx" placeholder="Name"/>
                        
                        <input type="text"  name="position" className="form-control my-1 rtx" placeholder="Position"/>



                        <select name="grp" className="form-control rtx">
                            <option value="">

                                Select Classroom
                            </option>
                            {
                                getxdat.map((p)=>{
                                    return <option value={p.name}>{p.name}</option>
                                })
                            }
                        </select>










                        <div className="mt-3 align-self-center">

                            <div className="btn btn-primary" onClick={event => {


                                let r= document.querySelectorAll(".rtx")

                                let dat={}

                                r.forEach(rx=>{
                                    dat[rx.name]=rx.value
                                })

                                dat["dp"]=xtxcc


                                Swal.fire(
                                    {title:"Details are",html: '<div style="white-space: pre-wrap;">'+JSON.stringify(dat) +"</div>",icon:"info",

                                        showCancelButton:true,
                                        showLoaderOnConfirm:true,

                                        preConfirm:async () => {

                                            Swal.showLoading()

                                            return await axios.post("/api/admin/fac", dat).then(r => {

                                                Swal.fire("Success", "Member added", "success").then(y=>{

                                                    setIsOpen(false)

                                                    window.location.reload()
                                                })


                                            })


                                        }


                                    })



                            }}
                            ><FaUser/> Add </div>

                        </div>
                    </div>

                </Modal.Body>

            </Modal>





            <div className="w-100">




                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Faculty </h4>




                <div className="text-center table-responsive">





                    <table className="table table-bordered table-light text-white">
                        <thead>
                        <tr className="text-white">
                            <th scope="col" className="text-white" style= {{backgroundColor:"#595260"}}>Images</th>
                            <th scope="col"  className="text-white"  style= {{backgroundColor:"#595260"}}>Name</th>
                            <th scope="col" className="text-white"  style= {{backgroundColor:"#595260"}}>Position</th>
                            <th scope="col"  className="text-white" style= {{backgroundColor:"#595260"}}>Classroom</th>
                            <th scope="col"  className="text-white" style= {{backgroundColor:"#595260"}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>


                        {getudat.map( (et,ind)=>{



                            return <tr key={ind}>
                                <td className="text-white"  style={{backgroundColor: "#797770"}}><img src={rtx.cdn+"/"+ et.dp} width={60} height={60} alt=""/></td>
                                <td style={{backgroundColor: "#797770"}} className="text-white pt-4">{et.name}</td>
                                <td style={{backgroundColor: "#797770"}} className="text-white pt-4" >{et.position}</td>
                                <td style={{backgroundColor: "#797770"}} className="text-white pt-4">{et.grp}</td>
                                <td style={{backgroundColor: "#797770"}} className="text-white" onClick={r=>{

                                    axios.delete("/api/admin/fac?id="+et._id).then(o=>{

                                        window.location.reload()
                                    })
                                }}>
                                    <div className="btn text-white  border-black mt-2" style={{backgroundColor:"#FE0000"}}>

                                        <FaTrash/> delete
                                    </div>
                                </td>


                            </tr>


                        })
                        }
                        </tbody>
                    </table>
                </div></div>

        </div>
    </>
}