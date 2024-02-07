import STDash from "@/components/STDash";
import AdminDash from "@/components/AdminDash";
import Futter from "@/components/futter";
import HeadderX from "@/components/headerx";
import FacultyX from "@/components/dashboard/FacultyX";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {coursesX} from "@/lib/Rh";
import {Modal} from "react-bootstrap"
import Swal from "sweetalert2";


export default ()=>{


    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };


    const progressX=1;


    const [getfile,setfilex] = useState();
    const [xdat,setxdat] = useState([]);
    const [Editor,seteditor] = useState(null);

    const [mtitle,setmtitle] = useState(null);

    const [mdata,setmdata] = useState(null);

    const xty = useRef(null);


    function loaddata() {
        axios.get("/api/admin/noti").then(value => {


            setxdat(value.data);

            console.log(value.data);

        })

    }

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))

        loaddata();
    },[])

    async function hadlser(d) {
        const file = d.currentTarget.files[0];


        let f = new FormData()
        f.append("file", file);
        try {
            const Response = await axios.post("/api/upload", f,{

                onUploadProgress(r){
                    setprogressX(  r.progress);
                }
            });

            if (Response) {

                setfilex(Response.data.name)

                toast("added")
            }


        } catch (err) {
            console.log(err);
        }


    }
    let descrtx;

    async function setvalueofdes  (rtzg)  {

        descrtx=""+rtzg

    }


    return  <div className="">

        <HeadderX/>

        <Modal show={isOpen} onHide={hideModal} fullscreen={true} >
            <Modal.Header>
                <div className="w-100 h3"><div className="text-center text-black">Sending Message To {mdata?.email}</div>
                </div>
                <button onClick={hideModal} className="text-black bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"lightgray"}}>

                <input className="form-control py-3 h1"  id="coursex" placeholder="Subject ......"/>

                {Editor?
                <Editor form={setvalueofdes} hi={600}/>
:""}

                <h3 className="p-3 rounded w-100 mt-3 fixed-bottom text-center btn" style={{backgroundColor:"#013571",color:"white"}} onClick={(e)=>{



                    Swal.fire({

                        title:"Sending Email....",
                        allowOutsideClick:false,
                        didOpen() {
                            Swal.showLoading()


                            axios.post("/api/admin/noti", {

                                email: mdata?.email,
                                sub: document.getElementById("coursex").value,
                                body: descrtx


                            }).then(y=>{


                                Swal.hideLoading()

                                Swal.fire("Success","Email Has Sent","success")
                            })
                        }}

                            )
                        }





                }> Send Message </h3>

            </Modal.Body>


        </Modal>
        <div className="d-flex">
            <AdminDash/>
            <div className="d-flex w-100 justify-content-center   text-center" >

                <div className="w-100">


                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Notification </h4>



                        <form id="xrt" className="">



                            <select  id="course" className="form-control my-2 py-4" onChange={r=>{



                                xty.current=xdat.filter( io =>(io.group === r.target.value  )).map(y=>y.email)











                            }}>
                                <option value={"1234567890"}>Select Classroom</option>
                                {[ ... new Set(xdat.map(i=>i.group))].map((valuex,ing) => <option key={ing} className="form-control py-5" value={ valuex }>{valuex}</option>)}

                            </select>

                            <input name="title" id="rtfile"   placeholder="Mail Subject" className="form-control mt-3">
                            </input>


                           <div className="bg-white my-3 rounded">
                               {Editor? <Editor form={setvalueofdes}></Editor>:""}

                           </div>
                            <div className="d-flex mb-4 justify-content-center text-center">
                                <div className="w-75 position-relative" onClick={

                                    rty=> {


                                        Swal.fire({

                                            title:"Sending Email....",
                                            allowOutsideClick:false,
                                            didOpen() {
                                                Swal.showLoading()


                                                axios.post("/api/admin/noti", {

                                                    gx: xty.current,
                                                    sub: document.getElementById("rtfile").value,
                                                    body: descrtx


                                                }).then(y=>{


                                                    Swal.hideLoading()
                                                    Swal.fire("Success","Email Has Sent","success")


                                                })
                                            }}

                                        )
                                    }
                                    // async event => {
                                    //
                                    //     const  rt=document.getElementById("course").value;
                                    //
                                    //     if (rt==="1234567890") return toast.error("Select course");
                                    //
                                    //     //     const Response = await axios.post("/api/admin/noti", {
                                    //     //         title: document.getElementById("rtfile").value,
                                    //     //         data: descrtx,
                                    //     //         course: rt ,
                                    //     //     });
                                    //     // seteditor(dynamic(() => import("@/components/Editor/index")))
                                    //
                                    //     const form = document.getElementById("xrt");
                                    //         form.reset();
                                    //         // loaddata()
                                    //     }
                                    }
                                >
                                    {progressX >0 ?<div className="rounded bg-warning position-absolute btn w-100 h-100" ><p className="text-white "> {progressX==1?"Send Email to all Student":progressX *100+"%"} </p></div>:""}
                                    <button type="submit" className="btn  w-100 bg-transparent" >.</button>
                                </div>
                            </div>
                        </form>










                <table className="table table-bordered text-white text-center" style= {{backgroundColor:"#013571"}}>
                    <thead >
                    <tr className="bg-danger">
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Name</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Student Email</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Phone Number</th>
                        <th className="text-white" style= {{backgroundColor:"#e4b845"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        xdat.map(value => {

                            return <tr className="bg-danger">
                                <td className="text-white" style= {{backgroundColor:"#595260"}}>{value.name}</td>
                                <td className="text-white" style= {{backgroundColor:"#595260"}}>{value.email}</td>
                                <td className="text-white" style= {{backgroundColor:"#595260"}}>{value.phone}</td>
                                <td  className="text-white" style= {{backgroundColor:"#595260"}}>

                                        <div className="btn btn-info" onClick={()=>{

                                            setmdata(value);
                                            showModal()

                                        }}> Send</div>


                                </td>
                            </tr>

                        })

                    }


                    </tbody>
                </table>

                </div>

            </div>



        </div>



        <Futter/>




    </div>
}