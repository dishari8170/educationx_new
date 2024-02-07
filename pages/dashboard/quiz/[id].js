import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";
import STDash from "@/components/STDash";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import UserX from "@/lib/utils";

export async function getServerSideProps(context) {

    const res = await fetch("http://localhost:3000/api/admin/qgrp?g="+context.params.id);
    const data = await res.json();


    return {
        props: {
            data,
            idx:context.params.id
        },
    };
}


export default (pro)=>{
    const usr=UserX();




    const [Editor,seteditor] = useState(null);

    const  [getxdat,setxdat]=useState([])

    const  aa= useRef([])
    const  aaa= useRef("")

    const  [curr,setcurrent] = useState({})

    const  currentx=useRef(0)

    useEffect(()=>{


        seteditor(dynamic(() => import("@/components/Editor/index")))




    },[])
    useEffect(()=>{


        setxdat(pro.data)
        setcurrent(pro.data[0])

        console.log(pro)

    },[])



    const setvalueofdes=(d)=>{

aaa.current=d;

    };


    return <>

        <HeadderX/>

        <div className="d-flex">
            <STDash/>
            <div className="d-flex w-100 justify-content-center   text-white overflow-x-hidden" >


                <div className="w-100">

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Test Session</h4>


                    { getxdat.length>0?
        <div className="me-lg-3 ms-0 pt-4 border">
            <h1 className="text-center">
                Question Number {currentx.current+1} of {getxdat.length}  </h1>


            <div className="my-5" onClick={l=>{
                console.log(pro)

            }}>




                      <div className="border p-5">

                        <div className="mb-4" dangerouslySetInnerHTML={{__html: curr.q }}></div>


                          { curr.t?<>


                          {
                              curr.option.map((tx,xc)=> {
                            return <div className="form-check" key={tx}>
                                <input className="form-check-input" type="radio" name="exampleRadios" id={"exampleRadios"+xc} value={tx}  onChange={e=>{

                                    aaa.current=e.target.value

                                }}/>

                                    <label className="form-check-label" htmlFor={"exampleRadios"+xc}>
                                        {tx}
                                    </label>

                            </div>

                              
                          })
                          }
                              
                          </>  :(Editor? <Editor form={setvalueofdes} ></Editor>:"")

                }

                          </div>

                <div className="d-flex justify-content-between px-3 mt-4">

                    <div className="btn btn-danger" onClick={i=>{


window.location.reload()
                        // if(getxdat.length<=currentx.current -1) {
                        //
                        //     currentx.current = currentx.current + -
                        //
                        //     setcurrent(getxdat[currentx.current])
                        //
                        // }else {
                        //
                        //
                        //     Swal.fire("Error","This is the Last Question","error")
                        //
                        // }
                    }}>
                        Restart   </div>


                    <div className="btn btn-primary" onClick={async e => {


                        // if ( aaa.current!=="") {
                        //
                        //     Swal.fire("1234567890")
                        //     return e.preventDefault()
                        // }


                        if ((aaa.current==="")) {
                            await Swal.fire("Error","Give Your Answer First....","error")


                            return ;
                        }



                        if (getxdat.length > currentx.current + 1) {

                            currentx.current = currentx.current + 1

                            setcurrent(getxdat[currentx.current])

                            aa.current.push(aaa.current)

                            aaa.current = ""

                        } else {


                            aa.current.push(aaa.current)
                            aaa.current = ""
                            Swal.fire({
                                title: "Success",
                                html: "Test Successfully",

                                showCancelButton: true,
                                confirmButtonText: 'Done',
                                showLoaderOnConfirm: true,
                                preConfirm: async (s) => {


                                    axios.post("/api/admin/qes", {q: pro.idx, u: usr?._id, a: aa.current}).then(res => {


                                            Swal.fire("Complete", "your task has been complete", "success").then(r => {

                                                window.location.href="/dashboard/Qtest"
                                                    // loaddata()
                                                }
                                            )
                                        }
                                    )

                                }

                            })
                        }
                    }}>Next</div>

                </div>



            </div>


        </div>:""}

                </div>
            </div>
        </div>

        <Futter/>
    </>


}