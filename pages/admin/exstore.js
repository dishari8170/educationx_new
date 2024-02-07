import AdminDash from "@/components/AdminDash";
import Swal, {isLoading} from "sweetalert2";
import {Button, Modal} from "react-bootstrap";

import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";
import {rtx} from "@/lib/Rh";
import {Field, Form, Formik} from "formik";
import UploadX from "@/components/UploadX";

export default ()=>{


    const [xdat,setxdat] = useState([]);

    let descrtx;

    async function setvalueofdes  (rtzg)  {

        descrtx=""+rtzg

    }

    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };


    function loaddata() {


        axios.get("/api/admin/storex").then(value => {


            setxdat(value.data);

            console.log(value.data);

        })

    }

    useEffect(()=>{




        loaddata();

    },[])


    const [getk,setk]=useState("")

    const [editX,seteditX]=useState({})

    return <>
        <div className="position-fixed end-0 btn bottom-0 m-3 m-lg-5 justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4" style={{width:"60px",height:"60px",backgroundColor:"#f7a21a"}} onClick={u=>{


            seteditX({})
            showModal()



        }}>


            <div className="h1 fw-bold text-white">+</div>
        </div>

        <Modal show={isOpen} onHide={hideModal} fullscreen={true} >
            <Modal.Header style={{backgroundColor:"#013571",color:"white"}}>
                <div className="w-100 h3"><div className="text-center">Add New Item To Store</div>
                </div>
                <button onClick={hideModal} className="bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:"#013571",color:"white"}}>


                <Formik


                    initialValues={editX}


                    onSubmit={(e,u)=>{






                        Swal.fire({
                            title:"Confirm",

                            html:"are you sure ...?",
                            icon:"warning",
                            showCancelButton:true,

                            isLoading:true,
                            preConfirm:  () => {
                                hideModal()
                                e.thumb=getk;
                                let url=""
                                if (editX._id) {
                                    url = "/api/admin/storex?id="+editX._id
                                }else {
                                    url = "/api/admin/storex"
                                }
                                axios.post(url, e).then(value => {

                                    Swal.fire("Added To Store","Successfully added to Store ","success").then(yu=>{

                                        hideModal()
                                        window.location.reload()

                                    });


                                })

                            }
                        })





                    }}>
                    <Form >

                        <p className="fw-bold" >Item Thumbnail</p>
                        <UploadX  cb={setk} />

                        <p className="fw-bold mt-2" >Item Name</p>

                        <Field className="form-control" type="text" name="name" id="name" placeholder={"Name..."}/>

                        <p className="fw-bold mt-2">Item Price</p>

                        <Field className="form-control" type="text" name="price" id="price" placeholder={"Price..."}/>

                        <p className="fw-bold mt-2">Item INFO</p>
                        <Field className="form-control" type="text" name="bnr" id="bnr" placeholder={"short Des..."}/>


                        <p className="fw-bold mt-2">Item Url</p>
                        <Field className="form-control mb-3" type="text" name="vdo" id="vdo" placeholder={"https://amazon.com/3456yr"}/>

                        {/*<p className="fw-bold mt-2 ">Item Description</p>*/}
                        {/*<Field className="form-control my-2" as="textarea" name="dis" id="dis" placeholder={"short Des..."}/>*/}

                        <Button className="form-control" type="submit" name="" id="" >Add</Button>
                    </Form>
                </Formik>











                {/*<p className="fw-bold">Item Thumbnail</p>*/}
                {/*<input className="form-control py-3 " type={"file"}  id="thumb" />*/}
                {/*<p className="fw-bold mt-4">Item video</p>*/}
                {/*<input className="form-control py-3 my-2"  id="bnr" placeholder="https://www.youtube.com/watch?v=r2TLKVkhiqM" />*/}
                {/*<p className="fw-bold mt-4">Item Information</p>*/}
                {/*<input className="form-control py-3 "  id="coursex" placeholder="Name of the Items"/>*/}

                {/*<input className="form-control py-3 my-2 "  id="price" placeholder="Price"/>*/}

                {/*<textarea className="form-control py-3 "  id="coursex" placeholder="Subject ......"/>*/}



                {/*<h3 className="p-3 rounded w-100 mt-3 fixed-bottom btn-primary mb-4 text-center btn" style={{backgroundColor:"#013571",color:"white"}} onClick={(e)=>{*/}
                {/*    */}

                {/*}}> Send Message </h3>*/}

            </Modal.Body>


        </Modal>
        <div className="d-flex">
            <AdminDash/>
            <div className="w-100">


                <div className="d-flex justify-content-between   w-100 rounded-3">


                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage store Information </h4>




                </div>
                <div className="card bg-transparent" >

                    <div className="card-body ">

                        <div className="row">


                            {xdat.map((tp,n)=>{
                                return <div className="col-12 col-lg-3 mt-3" key={n}>

                                    <div className="card" >

                                        <img src={rtx.cdn+"/"+tp.thumb} alt="" className="p-3 align-self-center" style={{maxHeight:"300px",maxWidth:"250px"}}/>
                                        <div className="card-body">
                                            <div className="card-text text-center h2">
                                                {tp.name}
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="h5 ps-3 text-success">$ {tp.price}</div>
                                                <div className="btn btn-outline-danger text-center" onClick={()=> {

                                                    Swal.fire(
                                                        {
                                                            icon:"warning",
                                                            showDenyButton:true,
                                                            denyButtonText:"Delete",
                                                            confirmButtonText:"Edit",
                                                            title: "Delete",
                                                            showCancelButton:true
                                                        }
                                                    ).then((i)=>{


                                                        if (i.isConfirmed){
                                                            seteditX(tp)
                                                            setk(tp.thumb)
                                                            showModal();
                                                        }if (i.isDenied){
                                                            axios.delete("/api/admin/storex?id="+tp._id).then(ee=>{
                                                                loaddata()
                                                                Swal.fire("Deleted","Iteam Has Been Deleted","success")
                                                                seteditX({})

                                                            })
                                                        }



                                                    })
                                                }



                                                }>Delete</div>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                            })}
                        </div>

                    </div>


                </div>


            </div>


        </div>


    </>



}