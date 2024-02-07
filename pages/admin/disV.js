import {FaArrowRight} from "react-icons/fa6";
import {use, useEffect, useRef, useState} from "react";
import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import {FaCross, FaPaperclip, FaTimes} from "react-icons/fa";
import UserX from "@/lib/utils";
import Swal from "sweetalert2";
import AdminDash from "@/components/AdminDash";
import axios from "axios";
import UploadX from "@/components/UploadX";
import {rtx} from "@/lib/Rh";



function getCurrentTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'short' }); // Months are zero-based
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}   ${day}/${month}`;

    return formattedTime;
}

export default function Home() {

    const  [getxdat,setxdat]=useState([])

    const [getmsg,setmsg]=useState([]);

    const [sokt,setsok]=useState(null)


    const [attachx,setattach]=useState(true)


    const [usr,setusr]=useState(null)

    const [ im,setk]=useState(null)


    const up=useRef([])






    useEffect(
        ()=>{

                axios.get("/api/admin/grp").then(value => {


                    // clickx.current=[]
                    setxdat(value.data);


                })


        },[]
    )


    const newmsg=(u)=>{


        try{


            const m=JSON.parse(u.data)



            setmsg(uy=>[...uy,m])




            setTimeout(()=>{

                let io=document.getElementById("wers")
                io.scrollTop = io.scrollHeight;
            },100)

        }catch(p){

            console.log(p);
        }


        console.log(up.current);

    }

    useEffect(()=>{


        if(WebSocket){






            const socket = new WebSocket("wss://edu.codeyourbusiness.site:8888/");



            socket.onmessage=newmsg;




            socket.onopen = function (event) {




                setsok(socket)





            };




        }


    },[])




    // ]
    // let ty = "gfdfghj3cgfg3hjhjgjgh3hjnjkhgjjghjkkhj3jkljhgjkjh3bjhvgcfgghjghfdg3yutrdf";
    //
    // ty = ty.split("3");
    //
    //
    // let x = [2345, 7, 8, 9]
    //
    // ty.map(val => {
    //
    //     return <h1>{val}</h1>
    // })



    return <>
        <div className="bg-white">

            <div className="d-flex" >
                <AdminDash/>


                <div className="vh-100  w-100 " style={{width:"75%",backgroundColor:"lightgray"}}>

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Discussion Room </h4>


                    <div className="w-100 bg-info text-center">

                        <select className="form-control rounded-0" onChange={event => {

                            setmsg([])
                          setusr(  event.target.value)

                            sokt.send(JSON.stringify({"g":event.target.value,"m":"new join rh"}))



                        }}>
                            <option>Select Group</option>
                            {getxdat.map(valu => {

                                return <option key={valu._id} value={valu.name}>{valu.name}</option>
                            })

                            }

                        </select>

                    </div>



                    <div className=" overflow-y-auto " id="wers" style={{height:"80%",}}>
                        { getmsg.map((Chatx,u)=>{

                            return <div key={u}>   <div className={`w-75 d-flex mb-2 ${Chatx.name==="Admin"?"float-end":""}` } style={{transform:`${Chatx.name=="Admin"?"scaleX(-1)":""}`}}>

                                <img src="/img/ellipse_3.png" className="m-2" width={50} height={50}/>
                                <div className="mt-1  px-4 p-2 shadow bg-white   w-75 ms-2 rounded-3 " style=  {{transform: `${Chatx.name=="Admin"?"scaleX(-1)":""}`}}>
                                    <div className="d-flex  justify-content-between fw-bold text-primary " style={{marginBottom:-15}} >
                                        <p className="">{Chatx.name} {Chatx.d}</p>
                                        <p  className="">{Chatx.t?Chatx.t:"Student"}</p>

                                    </div >

                                    {Chatx.ix? Chatx.ix.toLowerCase().includes(".jpg") ||  Chatx.ix.toLowerCase().includes(".png") ||  Chatx.ix.toLowerCase().includes(".jpeg") ||  Chatx.ix.toLowerCase().includes(".webp")? <img width={200} height={200} src={rtx.cdn+"/"+Chatx.ix} alt="dd" />:<a href={rtx.cdn+"/"+Chatx.ix} className="btn-primary btn text-black">{Chatx.ix}</a>:<div className="text-black">{Chatx.m} </div>}


                                </div>



                            </div>

                            </div>


                        }) }


                    </div>





                    {/*</div>*/}
                    <div style={{height:"8%",backgroundColor:"#013571"}} className="d-flex align-items-center text-center" >

                        <div className="h1 px-3 text-white" onClick={e=>{


                            setattach(!attachx);



                        }}>

                            {attachx ? <FaPaperclip/>:<FaTimes/>}
                        </div>






                        {attachx?<textarea id={"inputx"} style={{height:"80%",width:"88%"}} className="form-control"/>:
                        <UploadX  cb={setk} />}



                        <div className="d-flex justify-content-center text-center btn" style={{width:"12%"}} onClick={(y)=>{


                            const td=document.getElementById("inputx");


                            attachx ? sokt?.send(JSON.stringify({name:"Admin",dp:"dp.jpg",t:"Admin",g: usr,m:td.value ,d:getCurrentTime()})): sokt?.send(JSON.stringify({name:"Admin",dp:"dp.jpg",t:"Admin",g:usr,m:im,ix:im ,d:getCurrentTime()}))






                        }}>
                            <h2 style={{color:"white "}}>Send </h2>
                        </div>
                        {/*<FaArrowRight style={{height:"100%",width:"12%",padding:"1em",color:"white"}} onClick={(y)=>{*/}


                        {/*    const td=document.getElementById("inputx");*/}

                        {/*    setmsg([...getmsg,{ name:Math.random()>0.5?"Abcd Efgh":"Ijkl Monp", role: "Student", msg: td.value,mera:Math.random()>0.5}])*/}



                        {/*}} />*/}


                    </div>
                </div>
            </div>
        </div>
    </>


        ;
}