import AdminDash from "@/components/AdminDash";
import HeadderX from "@/components/headerx";
import {Button, Card, Collapse, Modal} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import {FaArrowDown, FaFacebook, FaInstagram, FaPencil, FaTwitter} from "react-icons/fa6";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";


export default (xxx) => {

    const [open, setOpen] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const progressX = 1;


    const [gettext, settext] = useState([]);
    const [selecttext, setselecttext] = useState({});


    const [xdat, setxdat] = useState([]);


    const [xt, setxt] = useState([]);


    const [xdatt, setxdatt] = useState([]);


    const [Editor, seteditor] = useState(null);

    const [mtitle, setmtitle] = useState({});
    const [mdata, setmdata] = useState(null);


    function loaddata() {


        axios.get("/api/admin/cms").then(value => {


            setxdat(value.data);


        })

    }

    const defh=useRef("")

    async function setvalueofdes  (rtzg)  {

        defh.current=""+rtzg

    }


    useEffect(() => {


        seteditor(dynamic(() => import("@/components/Editor/index")))
        loaddata();


    }, [])

    return <>


        <Modal show={isOpen} onHide={hideModal} fullscreen={true}>
            <Modal.Header>
                <div className="text-center w-100 h4 text-black">{mtitle.name}</div>
                <button onClick={hideModal} className="text-black bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body className="bg-dark">

                {/*<div className="se"></div>*/}
                <div className="my-3 rounded">
                    {Editor? <Editor form={setvalueofdes} value={gettext[1] } hi={600}></Editor>:""}

                </div>




            </Modal.Body>


            <Modal.Footer className="bg-dark">


                <div className="text-center btn btn-primary w-100 py-2" onClick={o=>{

                    let tez = JSON.parse( mtitle.about)


                    tez[gettext[0]] = defh.current


                    axios.post("/api/admin/cms?name=" + mtitle.name, {about: JSON.stringify(tez)}).then(u => {


                            window.location.reload();
                        }
                    )
                }}>Update</div>

            </Modal.Footer>
        </Modal>


        <div
            className="position-fixed end-0 bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4"
            style={{width: "60px", height: "60px", backgroundColor: "#f7a21a"}} onClick={u => {


            Swal.fire({
                input: "text",

                preConfirm: (inputValue) => {

                    axios.post("/api/admin/cms?name=" + inputValue, {about: {}}).then(o => {

                        Swal.close()

                        Swal.fire("done").then(o => {

                            Swal.close()

                        })


                    })


                }
            })


        }}>


            <div className="h1 fw-bold">+</div>
        </div>


        <HeadderX/>
        <div className="d-flex">

            <AdminDash/>
            <div className="w-100">


                <h4 className="fw-bold w-100 py-3 text-center"
                    style={{backgroundColor: "#595260", color: "white"}}>Edit Content </h4>

                <div className="w-100 ">


                    {xdat.map((o, p) => {


                        return <div className="text-center w-100" key={p}>

                            <Button
                                className="py-2 w-100 mt-1 d-flex justify-content-around"
                                onClick={() => {

                                    let newArray = Array(length).fill(false);


                                    newArray[p] = (!open[p])

                                    setOpen(newArray)
                                }}
                                // aria-expanded={()=>p===open}
                                style={{backgroundColor: "#013571"}}
                            >
                                {o.name}
                                <FaArrowDown/>

                            </Button>
                            <Collapse in={open[p]}>
                                <div>
                                    <Card>
                                        <Card.Body className="bg-dark">


                                            {Object.entries(o.about).length > 0 ? Object.entries(JSON.parse(o.about)).map(([keyx, value], t) => {
                                                    return <div className=" " key={t}>
                                                        <div className="align-self-center">

                                                            <div className="text-white ">

                                                                {keyx.includes("dp") ? <img src={rtx.cdn + "/" + value}
                                                                                            className="mb-3 img-fluid"/> : <div dangerouslySetInnerHTML={{__html:value} }></div>}


                                                            </div>

                                                            {keyx.includes("dp") ? <UploadX cb={(xp) => {

                                                                let tez = JSON.parse(o.about);

                                                                tez[keyx] = xp


                                                                axios.post("/api/admin/cms?name=" + o.name, {about: JSON.stringify(tez)}).then(u => {


                                                                        window.location.reload();
                                                                    }
                                                                )


                                                            }}/> : <div className="d-flex justify-content-center">
                                                                <div className=" end-0 bottom-0 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4"
                                                                style={{
                                                                    width: "50px",
                                                                    height: "50px",
                                                                    backgroundColor: "#f7a21a"
                                                                }}
                                                                onClick={u => {

                                                                    setmtitle(o)
                                                                    settext([keyx,value])
                                                                    setIsOpen(true)


                                                                }}>
                                                                <FaPencil className="h5  fw-bold text-white mt-2"/>
                                                           </div>
                                                            </div>
                                                            }
                                                            <div className=""></div>

                                                        </div>
                                                        <hr style={{color:"white"}}/>
                                                    </div>
                                                }
                                            ) : <div className="text-white d-flex justify-content-center">


                                                <div
                                                    className="justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4"
                                                    style={{width: "50px", height: "50px", backgroundColor: "#f7a21a"}}
                                                    onClick={u => {

                                                        setmtitle(o.name)


                                                        settext(JSON.parse(o.about))


                                                        setIsOpen(true)


                                                    }}>
                                                    <FaPencil className="h5  fw-bold text-white mt-2"/>

                                                </div>

                                            </div>}


                                        </Card.Body>
                                    </Card>
                                </div>

                            </Collapse>

                        </div>


                    })}
                    <div className="row justify-content-center text-center mt-5 ">


<div className="col-lg-3 col-12">
                            <FaFacebook className="display-5  "/>
    <input name="" className="form-control mt-2"/></div>
                        <div className="col-lg-3 py-2 p-lg-0 col-12"> <FaInstagram className="display-5"/>
                            <input name="" className="form-control  mt-2"/></div>
                          <div className="col-lg-3  col-12">  <FaTwitter className="display-5"/>
                              <input name="" className="form-control mt-2"/></div>


                    </div>
                    <div className="row align-items-center justify-content-center">
                    <div className="btn col-4 text-center  mt-3 btn-primary">Update</div>
                    </div>
                </div>

            </div>

        </div>
    </>

}