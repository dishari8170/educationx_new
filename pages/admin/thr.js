import React, {useEffect, useRef, useState} from "react";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {FaEnvelope, FaKey, FaTrash} from "react-icons/fa";
import dynamic from "next/dynamic";
import AdminDash from "@/components/AdminDash";
import {FaPencil} from "react-icons/fa6";

export default ()=>{
    const  [getudat,setudat]=useState([])
    const  [isOpen,setIsOpen]=useState(false)
    const  [isOpenE,setIsOpenE]=useState(false)

    const [xtxcc,xxxtt] = useState({});


    const cdata=useRef("")

    const [Editor,seteditor] = useState(null);



    function loaddataU(s="u") {

        axios.get("/api/sales?x=index").then(value => {


            setudat(value.data);

        })

    }

    useEffect(() => {
        loaddataU()
    }, []);

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))


    },[])

    async function setvalueofdes  (rtzg)  {

        cdata.current=""+rtzg

    }






    return<>


        <div className="position-fixed end-0 bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4" style={{width:"60px",height:"60px",backgroundColor:"#f7a21a"}} onClick={u=>{

            setIsOpen(true)
        }}>


            <div className="h1 fw-bold">+</div>
        </div>


        <div className="d-flex">

            <AdminDash/>



            <Modal show={isOpen} onHide={(i)=>{setIsOpen(false)}} fullscreen={false}  centered={true} onEscapeKeyDown={ip=>{ip.preventDefault()}}>
                <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                    <div className="w-100 h3"><div className="text-center">Add New Teacher</div>
                    </div>
                    <button onClick={(i)=>{setIsOpen(false)}} className="bg-transparent border-0 h1 m-0">&times;</button>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                    <div className="card  bg-transparent p-5" style={{
                    }}>


                        <input type="text"  name="name" className="form-control mt-1 rtx" placeholder="Name" defaultValue={xtxcc?.name}/>
                        <input type="text"  name="email" className="form-control mt-1 rtx" placeholder="Email"  defaultValue={xtxcc?.email}/>



<div className="text-white  border rounded p-3">


    <input type="checkbox" name="Give Grades" value="/admin/grade" style={{transform:"scale(2)"}} className="mx-3" />Give Grades<br/>
    <input type="checkbox" name="Check Reviews" value="/admin/revX" style={{transform:"scale(2)"}} className="mx-3" />Check Reviews<br/>
    <input type="checkbox" name="Write Blog" value="/admin/blog" style={{transform:"scale(2)"}} className="mx-3" />Write Blog<br/>
<input type="checkbox" name="Manage Archives" value="/admin/ach" style={{transform:"scale(2)"}} className="mx-3" />Manage Archives<br/>
<input type="checkbox" name="Manage Banners" value="/admin/bnrx" style={{transform:"scale(2)"}} className="mx-3" />Manage Banners<br/>



    <input type="checkbox" name="Manage Course" value="/admin/coursemat" style={{transform:"scale(2)"}} className="mx-3"/>Manage Course Material
    <br/><input type="checkbox" name="Manage Announcements" value="/admin/assX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Announcements
    <br/><input type="checkbox" name="Manage Assignment" value="/admin/asgnX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Assignment
    <br/><input type="checkbox" name="Manage Course Information" value="/admin/CinfoX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Course Information
    <br/><input type="checkbox" name="Manage Notification" value="/admin/NotiX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Notification
    <br/><input type="checkbox" name="Manage User" value="/admin/stdX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Students
    <br/><input type="checkbox" name="Manage Test" value="/admin/Mqs" style={{transform:"scale(2)"}} className="mx-3"/>Manage Test
    <br/><input type="checkbox" name="Manage Faculty" value="/admin/facX" style={{transform:"scale(2)"}} className="mx-3"/>Manage Faculty
    <br/><input type="checkbox" name="Manage Teacher" value="/admin/thr" style={{transform:"scale(2)"}} className="mx-3"/>Manage Teacher

    <br/><input type="checkbox" name="Manage Courses" value="/admin/store" style={{transform:"scale(2)"}} className="mx-3"/>Manage Courses
    <br/><input type="checkbox" name="Manage Store" value="/admin/exstore" style={{transform:"scale(2)"}} className="mx-3"/>Manage Store

    <br/>
    <input type="checkbox" name="Manage Meeting" value="/admin/meet" style={{transform:"scale(2)"}} className="mx-3"/>Manage Class
    <br/><input type="checkbox" name="Manage FAQ" value="/admin/apqfile" style={{transform:"scale(2)"}} className="mx-3"/>Manage FAQ
    <br/>

    <input type="checkbox" name="Edit Pages" value="/admin/cms" style={{transform:"scale(2)"}} className="mx-3"/>Edit Pages
    <br/>

    <input type="checkbox" name="Discussion Area" value="/admin/disV" style={{transform:"scale(2)"}} className="mx-3"/>Discussion Area


</div>








                        <input type="text"  name="pass" className="form-control mt-1 rtx" placeholder="Password"/>

                        <div className="mt-3 align-self-center">

                            <div className="btn btn-primary" onClick={event => {


                                let r= document.querySelectorAll(".rtx")

                                let checkboxes = document.querySelectorAll('input[type="checkbox"]');
                                let checkedCheckboxes = Array.from(checkboxes).filter(function (checkbox) {
                                    return checkbox.checked;
                                });

                                let rg=[]
                                checkedCheckboxes.forEach(function (checkbox) {

                                    let p={}
                                    p[checkbox.name]=checkbox.value
                                    rg.push(p)


                                })

                                let dat={}

                                dat["id"]=JSON.stringify(rg)

                                r.forEach(rx=>{
                                    dat[rx.name]=rx.value
                                })





                                Swal.fire(
                                    {title:"Details are",html: '<div style="white-space: pre-wrap;">'+JSON.stringify(dat) +"</div>",icon:"info",

                                        showCancelButton:true,
                                        showLoaderOnConfirm:true,

                                        preConfirm:async () => {

                                            Swal.showLoading()

                                            return await axios.post("/api/sales?x=reg", dat).then(r => {

                                                Swal.fire("Success", "Teacher Tables Updates", "success").then(y=>{

                                                    setIsOpen(false)
                                                })


                                            })


                                        }


                                    })



                            }}
                            ><FaKey/> Register </div>

                        </div>
                    </div>

                </Modal.Body>

            </Modal>





            <div className="w-100 pb-3  rounded">

                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#f7a21a", color: "white"}}>New Teacher </h4>


                <div className="text-center">

                    <table className="table  table-bordered table-striped table-light align-middle">
                        <thead>
                        <tr>
                            <th scope="col ">Name</th>
                            <th scope="col">Permission</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>


                        {getudat.map( (et,ind)=>{



                            return <tr key={ind} className="">
                                <td>{et.name}</td>
                                <td><pre>{

                                    JSON.parse( et.id).map((obj, index) => {
                                            const [key, value] = Object.entries(obj)[0];
                                            return (
                                                <div key={index}>
                                                    <p>{key}</p>

                                                </div>
                                            );
                                        })




                                }</pre></td>
                                <td>{et.email}</td>

                                <td className="">

                                <div className=" " onClick={y=>{

                                    axios.get("/api/sales?x=del&del="+et._id).then(y=>{

                                        window.location.reload()
                                    })

                                }}>
                                    <div className="btn btn-danger">

                                        <FaTrash/> Delete
                                    </div>
                                </div>

                                        <div className=" " onClick={y=>{

                                            xxxtt(et)
                                            setIsOpen(true)



                                            let r= document.querySelectorAll(".rtx")

                                            let checkboxes = document.querySelectorAll('input[type="checkbox"]');

                                            checkboxes.forEach(ty=>{


                                            })


                                }}>
                                    <div className="btn btn-info mt-2">

<div className="px-2">  <FaPencil /> Edit</div>

                                    </div>


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