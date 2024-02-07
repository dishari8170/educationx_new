import STDash from "@/components/STDash";
import AdminDash from "@/components/AdminDash";
import Futter from "@/components/futter";
import HeadderX from "@/components/headerx";
import FacultyX from "@/components/dashboard/FacultyX";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {coursesX} from "@/lib/Rh";
import {Modal} from "react-bootstrap"
import UserX from "@/lib/utils";


export default ()=>{
    const usr=UserX();

    const [progressX,setprogressX] = useState();

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };




    const [getfile,setfilex] = useState();
    const [xdat,setxdat] = useState([]);
    const [Editor,seteditor] = useState(null);

    const [mtitle,setmtitle] = useState(null);
    const [mdata,setmdata] = useState(null);


    function loaddata() {



        axios.get("/api/admin/asgn?id="+JSON.parse(localStorage.getItem("user")).group).then(value => {


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
                    setprogressX(  r.progress *100);
                }

            });

            if (Response) {

                setfilex(Response.data.name)

                toast("Attachment Successfully Added")
            }


        } catch (err) {
            console.log(err);
        }


    }
    let descrtx="raju";

    async function setvalueofdes(rtzg)  {

        descrtx=""+rtzg

    }
    return  <div className="">



        <HeadderX/>

        <Modal show={isOpen} onHide={hideModal} fullscreen={true} >
            <Modal.Header>
                <Modal.Title><div className="text-center text-black">{mdata?.title}</div></Modal.Title>
                <button onClick={hideModal} className="bg-transparent border-0 h1 m-0 text-black">&times;</button>
            </Modal.Header>
            <Modal.Body className="">

                <div className="overflow-scroll h-100">
                <div className="text-black">

                    <div dangerouslySetInnerHTML={{ __html: mdata?.data }}/>
                </div>

                    <h3 className="p-3 rounded w-100" style={{backgroundColor:"#013571",color:"white"}}> Write Your Assignment </h3>

                    <div  style={{backgroundColor:"lightgray"}} className="m-3">
                        {Editor?<Editor form={setvalueofdes} />:""}
                        <br/>
                        <input type={"file"} className="w-100 form-control px-3" onChange={hadlser}></input>
                        {
                            progressX>0 && progressX<99?<div style={{height:"40px",backgroundColor:"lightgoldenrodyellow",color:"white" ,width:progressX+"%" }}></div>:""
                        }




                    </div>


                    <div className="btn btn-primary w-100 py-3" onClick={


                        async (r) => {

                            toast.promise(axios.post("/api/assr",{name:usr?.name,id:mdata?._id,sid:usr?._id,course:"raju",file:getfile,ans:descrtx,email:usr?.email,phone:usr?.phone}), {
                                loading: 'Adding...',
                                success: <b>Successfully added</b>,
                                error: <b>Could not Add.</b>,
                            }).then(() => {


                                hideModal()

                                }
                            )


                        }


                    }> Submit</div>

                </div>


            </Modal.Body>

        </Modal>



        <div className="d-flex">
            <STDash/>
            <div className="d-flex w-100 justify-content-center  text-center text-white overflow-x-hidden" >

                <div className="w-100">


                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>New Assignment </h4>


                    {xdat.length>0?<div className="p-4 w-100 border rounded">
                        <li className="list-group-item mb-4 ">


                                <span className="float-start">
                                {xdat[0].title}
                                </span>
                            <div className="float-end ">

                                <button className="btn btn-primary  me-3 " onClick={()=>{


                                    setmdata(xdat[0])
                                    showModal()

                                }}>View</button>

                            </div>





                        </li>
                        </div>
                        :""}



                    {xdat.length>1? <h4 className="p-2 rounded w-100 mt-3 btn-primary " > Old Assignment </h4>:""}


                        <ul className="list-group mb-5 mt-2 ">
                        {xdat.map((item,inp) => (

                            inp!==0?<li key={item._id} className="list-group-item bg-black ">


                                <span className="float-start text-white">
                                {item.title}
                                </span>
                                <div className="float-end ">

                                    <button className="btn btn-primary  me-3 " onClick={()=>{


                                        setmdata(item)
                                        showModal()

                                    }}>View</button>

                                </div>





                            </li>:""












                        ))}
                    </ul>





                </div>



            </div>



        </div>



        <Futter/>




    </div>
}