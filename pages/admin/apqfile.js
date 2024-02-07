import STDash from "@/components/STDash";
import AdminDash from "@/components/AdminDash";
import Futter from "@/components/futter";
import HeadderX from "@/components/headerx";

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
    const [Editor,seteditor] = useState(null);

    const [mtitle,setmtitle] = useState(null);
    const [mdata,setmdata] = useState(null);


    const [srt,setgrp] = useState([]);

    const [xt,setxt] = useState([]);


    function loaddata() {










        axios.get("/api/admin/faq").then(value => {


            setxdat(value.data);

            console.log(value.data);

        })

    }
    function loaddatax() {



        axios.get("/api/admin/store").then(value => {


            setgrp(value.data);

            console.log(value.data);

        })

    }





    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))
        loaddata();

        loaddatax();

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

        <Modal show={isOpen} onHide={hideModal} fullscreen={true}  className="">
            <Modal.Header>
                <Modal.Title><div className="text-center text-black">{mtitle}</div></Modal.Title>
                <button onClick={hideModal} className="bg-transparent border-0 h1 m-0 text-black">&times;</button>
            </Modal.Header>
            <Modal.Body className="bg-dark">      <div dangerouslySetInnerHTML={{ __html: mdata }} />
            </Modal.Body></Modal>
        <div className="d-flex ">
            <AdminDash/>
            <div className="d-flex w-100 justify-content-center  text-center" >

                <div className="w-100">


                    <h4 className="fw-bold w-100 py-3  text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage FAQ </h4>


                    <form id="xrt" className="">

                        <input name="title" id="rtfile"   placeholder="Title.........." className="form-control mt-3">
                        </input>











                        <div className="bg-white my-3 rounded">
                            {Editor? <Editor form={setvalueofdes}></Editor>:""}

                        </div>



                        <div className="d-flex justify-content-center text-center">
                            <div className="w-75 position-relative" onClick={
                                async event => {


                                    const Response = await axios.post("/api/admin/faq", {
                                        title: document.getElementById("rtfile").value,
                                        data: descrtx, // Assuming getfile is defined elsewhere

                                    });
                                    seteditor(dynamic(() => import("@/components/Editor/index")))

                                    const form = document.getElementById("xrt");
                                    form.reset();
                                    loaddata()
                                }
                            }
                            >
                                {progressX >0 ?<div className="rounded bg-warning position-absolute
                                 btn w-100 h-100"><p className="text-white">
                                    {progressX===1?"Add New Item":progressX *100+"%"} </p></div>:""}
                                <button type="submit" className="btn  w-100 bg-transparent" >.</button>
                            </div>
                        </div>
                    </form>




                    <ul className="list-group mb-5 mt-2 ">
                        {xdat.map((item) => (
                            <li key={item._id} className="list-group-item mx-5 mt-2">


                                {item.title}

                                <div className="float-end">

                                    {item.course}

                                    <button className="btn btn-primary btn-sm mx-3"  onClick={()=>{

                                        setmdata(item.data)
                                        setmtitle(item.title)
                                        showModal()

                                    }}>View</button>
                                    <button
                                        onClick={() => {

                                            toast.promise(axios.delete(`/api/admin/faq?id=${item._id}`), {
                                                loading: 'deleting...',
                                                success: <b>deleted</b>,
                                                error: <b>Could not deleted.</b>,
                                            }).then(()=>

                                                {

                                                    loaddata()
                                                }
                                            )




                                        }}
                                        className="btn btn-sm float-right border-black text-white" style={{backgroundColor:"#FE0000"}}

                                    >
                                        Delete
                                    </button>
                                </div>





                            </li>












                        ))}
                    </ul>





                </div>



            </div>



        </div>



        <Futter/>




    </div>
}