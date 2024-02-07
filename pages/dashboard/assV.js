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
    // const [Editor,seteditor] = useState(null);

    const [mtitle,setmtitle] = useState(null);
    const [mdata,setmdata] = useState(null);


    function loaddata() {
        axios.get("/api/admin/ass?id="+ (JSON.parse(localStorage.getItem("user")).group )).then(value => {


            setxdat(value.data);

            console.log(value.data);

        })

    }

    useEffect(()=>{
    //
    //
    //     seteditor(dynamic(() => import("@/components/Editor/index")))
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
                <Modal.Title><div className="text-center text-black">{mdata?.title}</div></Modal.Title>
                <button onClick={hideModal} className="bg-transparent border-0 h1 m-0 text-black">&times;</button>
            </Modal.Header>
            <Modal.Body className="text-black">      <div dangerouslySetInnerHTML={{ __html: mdata?.data }} />
            </Modal.Body></Modal>



        <div className="d-flex">
            <STDash/>
            <div className="d-flex w-100 justify-content-center   text-center overflow-x-hidden"  >

                <div className="w-100">

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>New Announcement </h4>

                    <div className="px-4 mt-5">
                    {xdat.length>0?<div className="p-4 text-white border-white border rounded w-100">
                            <li className="list-group-item mb-4">


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

                    {xdat.length>1? <h4 className="p-2 rounded w-100 mt-3 btn-primary text-white" > Old Announcement  </h4>:""}


                        <ul className="list-group mb-5 mt-4 bg-transparent  text-white ">
                            {xdat.map((item,inp) => (

                                inp!=0?<li key={item._id} className="list-group-item bg-transparent text-white  ">


                                <span className="float-start">
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



        </div>



        <Futter/>




    </div>
}