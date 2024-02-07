import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {Modal} from "react-bootstrap";
import Aquiz from "@/pages/admin/Aquiz";
import AdminDash from "@/components/AdminDash";

export default ()=>{


    const [isOpen, setIsOpen] = useState(false);
    const [tar, star] = useState("");

    const  [getxdat,setxdat]=useState([])

    const  [getusr,setusrgrp]=useState([])


    const  [getudat,setudat]=useState([])

    const  [getclick,setclick]=useState([])



    const cdata=useRef("")
    const udata=useRef([])

    function loaddata() {



        axios.get("/api/admin/qgrp").then(value => {



            setxdat(value.data);


        })

        axios.get("/api/admin/grp").then(value => {



            setusrgrp(value.data);


        })




    }
    function loaddataU(s) {

        axios.get("/api/admin/qgrp?g="+s).then(value => {



            setudat(value.data);




        })

    }

    useEffect(()=>{


        loaddata();



    },[])


    return <>



        <Modal show={isOpen} onHide={()=>{setIsOpen(false)}} fullscreen={true} >
            {/*<Modal.Header>*/}
            {/*    <div className="text-center w-100 h4 ">Add title</div>*/}
            {/*    */}
            {/*</Modal.Header>*/}
            <Modal.Body style={{backgroundColor:"#F2F2F2"}}>
                <button onClick={e=>{
                    setIsOpen(false)
                }} className="bg-transparent border-0 h1 m-0 float-end text-black">&times;</button>

                <Aquiz sub={tar}/>

            </Modal.Body>

        </Modal>


        <div className="d-flex">

            <AdminDash/>


            <div className="w-100">



                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#f7a21a", color: "white"}}>Question Group </h4>



                <div className=" p-4 rounded border">
                    <div className="d-flex justify-content-between">

                        <select className="form-control w-50 " onChange={eve => {

                            loaddataU(eve.target.value)

                            star(eve.target.value)


                        }}>
                            <option>Select Question Set</option>
                            {getxdat.map(valu => {

                                return <option key={valu._id} value={valu.value}>{valu.name}</option>
                            })

                            }

                        </select><div className="d-flex">
                        <div className="btn  me-3" style={{backgroundColor:"pink"}} onClick={()=>{
setIsOpen(true)

                        }}>Add Question</div>
                        <div className="btn btn-danger me-3" onClick={(o)=>{

                            Swal.fire({
                                title: 'Delete',

                                html:"Do you want to delete this Question set",

                                showCancelButton: true,
                                confirmButtonText: 'Delete',
                                showLoaderOnConfirm: true,
                                preConfirm: (s) => {


                                    axios.get("/api/admin/qgrp?delete=" + tar).then(res => {


                                        Swal.fire("Success", "Group Created Successfully", "success").then(r => {

                                            loaddata()


                                        })


                                    })

                                }

                            }).then(r =>{})

                        }}>Delete</div>
                        <div className="btn btn-warning" onClick={(o)=>{
                            Swal.fire({
                                title: 'Question Set Name',
                                input: 'text',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                showCancelButton: true,
                                confirmButtonText: 'Create',
                                showLoaderOnConfirm: true,
                                preConfirm: (s) => {


                                    axios.post("/api/admin/qgrp?name=" + s).then(res => {


                                        Swal.fire("Success", "Group Created Successfully", "success").then(r => {

                                            loaddata()


                                        })


                                    })

                                }

                            }).then(r =>{})

                        }

                        }

                        > Create New Set</div>
                    </div>
                    </div>











                    <table className="table table-bordered text-white text-center mt-5 ite" style= {{backgroundColor:"#013571"}}>
                        <thead >
                        <tr className="bg-danger">
                            <th className="text-white" style= {{backgroundColor:"#2C2E43"}}>Questions</th>

                        </tr>
                        </thead>
                        <tbody>

                        {
                            getudat.map(value => {

                                return <tr className="bg-danger">

                                    <td className="text-white d-flex justify-content-between align-items-center" style= {{backgroundColor:"#013571"}}>

                                        <div><div dangerouslySetInnerHTML={{__html:value.q}} className="text-truncate"></div></div>


                                        <div>

                                        <input type={"button"} onClick={et =>
                                        {

                                            axios.delete("/api/admin/aquiz?id=" + value._id).then(res => {


                                                Swal.fire("Success", "Group Created Successfully", "success").then(r => {

                                                    loaddata()


                                                })


                                            })



                                        }} className="btn btn-danger" value="delete" />

 {/*<input type={"button"} onChange={event =>*/}
 {/*                                       {*/}

 {/*                                           if( udata.current.indexOf(value._id) !==-1)*/}
 {/*                                           {*/}
 {/*                                               udata.current= udata.current.filter(item => item !== value._id);*/}

 {/*                                           } else {*/}

 {/*                                               udata.current.push(value._id)*/}

 {/*                                           }*/}
 {/*                                       }} className="btn btn-primary mx-2" value="view" />*/}


                                        </div>
                                    </td>
                                </tr>

                            })

                        }


                        </tbody>
                    </table>



                    <div className="d-flex justify-content-between"
                    >

                        <select className="form-control w-75"  onChange={(e)=>{

                            cdata.current=e.target.value
                        }}>

                            <option value="" >Select a Classroom</option>
                            {getusr.map(valu => {
                                return <option key={valu._id} value={valu.name}>{valu.name}</option>
                            })

                            }

                        </select>
                        <div className="btn btn-info" onClick={(o)=>{




                            if (cdata.current=="") {

                                Swal.fire("Error","please select atleast one student group","error")

                                return
                            }


                            Swal.fire({
                                title: 'Assign to Classroom'+cdata.current,
                                html:"Do you want to assign this Question Set as a Test for the selected Classroom?  <p style='color:red'></p>",
                                // input: 'text',
                                // inputAttributes: {
                                //     autocapitalize: 'off'
                                // },
                                showCancelButton: true,
                                confirmButtonText: 'Assign',
                                showLoaderOnConfirm: true,
                                preConfirm: async (s) => {


                                    // return  new Promise((r,v)=>{
                                    //
                                    //    setTimeout(()=>{
                                    //
                                    //
                                    //        r(33);
                                    //    },10000)
                                    //
                                    //
                                    // })

                                    if (tar) {


                                    axios.post("/api/admin/grp", {grp: cdata.current, q: tar}).then(res => {


                                        Swal.fire("Success", "Test Assigned Successfully!", "success").then(r => {

                                            // loaddata()


                                        })


                                    })
                                }else {

                                        Swal.fire("Error", "Select a Question group First", "error").then(r => {

                                            // loaddata()


                                        })


                                    }

                                }

                            })


                        }}> Assign to Classroom.</div>
                    </div>



                </div>




            </div>



        </div>



    </>
}