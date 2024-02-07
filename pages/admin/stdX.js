import Swal from "sweetalert2";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {Modal} from "react-bootstrap";
import AdminDash from "@/components/AdminDash";
import {rtx} from "@/lib/Rh";

export default ()=>{

    const  [getxdat,setxdat]=useState([])
    const  [getudat,setudat]=useState([])

    // const  [getclick,setclick]=useState([])

    const [isOpen, setIsOpen] = useState(false);



    const cdata=useRef("")
    const txc=useRef(null)
    const udata=useRef([])

    const clickx=useRef([])

    function loaddata() {
        axios.get("/api/admin/grp").then(value => {



            clickx.current=[]
            setxdat(value.data);


        })

    }
    function loaddataU(s="Not Assign") {
        axios.get("/api/admin/grp?g="+s).then(value => {



            udata.current=[]
            setudat(value.data);




        })

    }

    useEffect(()=>{


        loaddata();

        loaddataU()

    },[])


    return <>



        <Modal show={isOpen} onHide={i=>{setIsOpen(false)}} fullscreen={true} >
            <Modal.Header>
                <div className="text-center w-100 h4 text-black ">User Details</div>
                <button onClick={i=>{setIsOpen(false)}} className="text-black bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body>

                <div className="container-fluid bg-dark h-100">

                    <div className="d-flex justify-content-center text-white" style={{marginLeft:"20%"}}>

                        <div className="text-center w-100"><div className="w-75">
                            <img src={rtx.cdn+"/"+txc.current?.dp} alt="Image" className="img-fluid" /></div>
                            <div className="py-2 px-5 rounded mt-2 w-75 mt-3" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.name}</div>
                            <div className="w-75 d-flex">
                                <div className="py-2 px-5 rounded  mt-2 w-50  mt-3 me-1" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.age}</div>
                                <div className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.sex}</div>
                            </div>
                            <div className="w-75 d-flex">
                                <div className="py-2 px-5 rounded  mt-2 w-50 me-1 mt-3" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.phone}</div>
                                <div className="py-2 px-5 rounded  mt-2 w-50 mt-3 ms-1" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.email}</div>
                            </div>
                            <div className="py-2 px-5 rounded  mt-2 w-75 mt-3" style={{backgroundColor:"#cbcbcb"}}>{txc.current?.addr}</div>


                        </div>


                    </div>

                </div>




            </Modal.Body>

        </Modal>






<div className="d-flex">

    <AdminDash/>
<div className="w-100">



    <h4 className="fw-bold w-100 py-3 text-center"
        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Students </h4>



    <div className=" p-lg-4 pt-4 rounded border">
    <div className="d-flex justify-content-between"
    >

        <select className="form-control w-75" onChange={event => {



loaddataU(event.target.value)


        }}>


<option>Select Group</option>
            {getxdat.map(valu => {

                return <option key={valu._id} value={valu.name}>{valu.name}</option>
            })

            }

        </select>



        <div className="d-flex">
        <div className="btn btn-primary" onClick={(o)=>{
            Swal.fire({
                title: 'Classroom',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Create',
                showLoaderOnConfirm: true,
                preConfirm: (s) => {



                    axios.post("/api/admin/grp",{name:s}).then(res=>{


                        Swal.fire("Success","Classroom Created Successfully","success").then(r=>{

                            loaddata()


                        })



                    })

                }

            })

        }}> Creat Classroom</div>
    </div>
    </div>










<div className="table-responsive">
        <table className="table table-bordered text-white text-center mt-5 ite" style= {{backgroundColor:"#013571"}}>
            <thead >
            <tr className="bg-danger">
                <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Name</th>
                <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Email</th>
                <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Phone Number</th>
                <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Course</th>
                <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Action</th>
            </tr>
            </thead>
            <tbody>

            {
                getudat.map(value => {

                    return <tr className="bg-danger">
                        <td className="text-white" style= {{backgroundColor:"#2C2E43"}}>{value.name}</td>
                        <td className="text-white" style= {{backgroundColor:"#2C2E43"}}>{value.email}</td>
                        <td className="text-white" style= {{backgroundColor:"#2C2E43"}}>{value.phone}</td>
                        <td className="text-white" style= {{backgroundColor:"#2C2E43"}}>{value.role}</td>
                        <td  className="text-white " style= {{backgroundColor:"#2C2E43"}}>


                            <div className="d-flex justify-content-center">

                                <div className="mx-3 text-white btn d-none" onClick={t=>{

                                    txc.current=value
                                    setIsOpen(true)

                                }}>View</div>


                                <input type={"checkbox"} onChange={event =>
                                {

                                   if( udata.current.indexOf(value._id) !==-1)
                                   {
                                       udata.current= udata.current.filter(item => item !== value._id);

                                   } else {

                                       udata.current.push(value._id)

                                   }
                                }} /> </div>



                        </td>
                    </tr>

                })

            }


            </tbody>
        </table>


</div>

        <div className="d-flex justify-content-between"
        >

            <select className="form-control w-75"  onChange={(e)=>{

                cdata.current=e.target.value
            }}>

                <option value="" >Select a Classroom Name</option>
                {getxdat.map(valu => {
                    return <option key={valu._id} value={valu.name}>{valu.name}</option>
                })

                }

            </select>
            <div className="btn btn-info" onClick={(o)=>{




                if (udata.current.length<1) {

                    Swal.fire("Error","please select atleast one student","error")

                    return
                }

                if (cdata.current=="") {

                    Swal.fire("Error","please select a group","error")

                    return
                }


                Swal.fire({
                    title: 'Assign Classroom '+cdata.current,
                    html:"Do you want to assign selected Student to the  Classroom  <p style='color:red'></p>",
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

                       return  axios.post("/api/admin/grp",{grp:cdata.current,user:udata.current}).then(res=>{


                            Swal.fire("Success","Classroom assign Successfully","success").then(r=>{

                                loaddataU()


                            })



                        })

                    }

                })


            }}> Assign to Classroom</div>
        </div>



    </div>




</div>



            </div>



    </>
}