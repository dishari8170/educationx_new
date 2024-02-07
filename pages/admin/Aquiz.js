import Swal from "sweetalert2";
import {useEffect, useRef, useState} from "react";
import {Field, Form, Formik} from "formik";
import dynamic from "next/dynamic";
import axios from "axios";


export default (pro)=>{
    const [Editor,seteditor] = useState(null);


    const [ismcq,setmcq]= useState(true);
    const [opt,setopt]=useState(0);


    const rtp=useRef("")

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))


    },[])

    let descrtx;

    async function setvalueofdes  (rtzg)  {


        rtp.current=rtzg

    }
    return <>


<div className="p-4 border mt-5  text-black ">



    <div className="disabled form-control"> Subjet -- {pro.sub} </div>


    <Formik initialValues={{}} onSubmit={e=>{


        e.q=rtp.current
        e.t=ismcq
        e.group=pro.sub


         Swal.fire({
            title:"Add Question",
            html:"Do you Want to Add Question",
            icon:"warning",
             showCancelButton:true,
           allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
            Swal.showLoading();
        }

        }).then(t=>{

            return axios.post("/api/admin/aquiz",e).then((ry)=>{

                Swal.fire("Done","Question Added..","success").then(y=>{})
            })
        })



    }}><Form>


    <div className=" mt-2 card">

        {Editor? <Editor form={setvalueofdes} ></Editor>:""

        }
    </div>

    <div className="d-flex mt-3 justify-content-between ">

        <div className="">
        <div className={"btn "+ (ismcq? "btn-primary":"")} onClick={r=>{


            r.target.parentElement.parentElement.parentElement
            setmcq(!ismcq)


        }}>MCQ</div>
        <div className={"mx-2 btn "+ ((!ismcq) ? "btn-primary":"")} onClick={o=>{

            o.target.parentElement.parentElement.parentElement
            setmcq(!ismcq)

        }}>Descript</div>
        </div>


    </div>

    {ismcq?
        <div className="mt-4" >


        { [...Array(opt)].map((_, i) =>(

         <div key={i} ig={"tttt"}>

        <h5>Option: {i} </h5>
        <div className="d-flex">
        <Field type="text" className="form-control" name={"option["+i+"]"} id=""/>




        </div>


    </div>))}



    </div>:null

    }
    <div className="d-flex justify-content-center ">
        <div className=" mt-4 ">
            {ismcq?
            <div className="btn btn-primary ms-2"  onClick={(ev)=>{

                setopt( opt+1)

                // let newx= document.createElement("input");
                //

                // newx.setAttribute("name","option["+i+"]")

                // ev.currentTarget.parentElement.parentElement.append(newx)

            }}>Add Option</div>:""} {ismcq?
        <div className="btn btn-outline-danger mx-4" onClick={o=>{


            setopt(0)
            o.target.parentElement.parentElement.parentElement.reset()
            console.log(o)

        }}>

            Clear Options

        </div>:""
        }
        <button className="btn-outline-primary  btn">

            Add Question

        </button>
    </div>
    </div>

</Form>
    </Formik>

</div>


    </>
}