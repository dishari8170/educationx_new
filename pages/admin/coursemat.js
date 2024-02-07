import STDash from "@/components/STDash";
import AdminDash from "@/components/AdminDash";
import Futter from "@/components/futter";
import HeadderX from "@/components/headerx";
import FacultyX from "@/components/dashboard/FacultyX";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";



export default ()=>{

    const [xt,setxt] = useState([]);


    const [getfile,setfilex] = useState();
    const [progressX,setprogressX] = useState();
    const [xdat,setxdat] = useState([]);


    function loaddata() {


        axios.get("/api/admin/grp").then(value => {



            setxt(value.data);


        })

        axios.get("/api/admin/mat").then(value => {


            setxdat(value.data);

            console.log(value.data);

        })

    }

useEffect(()=>{


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


    return   <div >    <HeadderX/>

        <div className="d-flex text-white ">
            <AdminDash/>
            <div className="d-flex w-100 justify-content-center  text-center">

                <div className="w-100 ">

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Manage Course Materials </h4>



                    <Formik initialValues={{
                        title:"",
                        link:null
                    }} onSubmit={async (fe) => {

                        console.log(fe.toString());


                    }}>


                        <form id="xrt" className="">



                            <select  id="course" name="course" className="form-control my-2">



                                <option value={"1234567890"}>Select Classroom</option>
                                {xt.map(valuex => <option className="form-control" value={valuex.name}>{valuex.name}</option>)}

                            </select>


                            <textarea name="title" id="rtfile"   placeholder="Title.........." className="form-control mt-3 h-25">

                            </textarea>



                            <input type="file"  className="mt-2 form-control w-50" onChange={hadlser}>
                            </input>
                            <br/>


                            <div className="d-flex justify-content-center text-center">
                            <div className="w-75 position-relative" onClick={
                                async event => {

                                    if (progressX==1) {


                                        const Response = await axios.post("/api/admin/mat", {


                                            title: document.getElementById("rtfile").value,
                                            course: document.getElementById("course").value,
                                            link: getfile, // Assuming getfile is defined elsewhere
                                        });
                                        const form = document.getElementById("xrt");
                                        form.reset();
                                        loaddata()
                                    }
                                }
                            }>
                                {progressX >0 ?<div className="rounded bg-warning position-absolute btn h-100" style={{width:`${(progressX*100)}%`}}><p className="text-white"> {progressX==1?"Add New Item":progressX *100+"%"} </p></div>:""}
                            <button type="submit" className="btn  w-100 bg-transparent text-black" >.</button>
                            </div>
                            </div>
                        </form>

                    </Formik>



<div className="p-3">
                    <ul className="list-group mb-5 mt-2 ">
                        {xdat.map((item) => (
                            <li key={item._id} className="list-group-item mt-2 d-flex justify-content-between">
                                {item.title}


                                <div className="">

                                    {item.course}


                                <button
                                    onClick={() => {

                                        toast.promise(axios.delete(`/api/admin/mat?id=${item._id}`), {
                                            loading: 'deleting...',
                                            success: <b>deleted</b>,
                                            error: <b>Could not deleted.</b>,
                                        }).then(()=>

                                        {

loaddata()
                                        }
                                        )




                                    }}
                                    className="btn btn-danger btn-sm float-right mx-2"
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



        </div>



        <Futter/>




    </div>
}