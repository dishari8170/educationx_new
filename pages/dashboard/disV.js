import {FaArrowRight} from "react-icons/fa6";
import {use, useEffect, useRef, useState} from "react";
import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import {FaPaperclip, FaTimes} from "react-icons/fa";
import UserX from "@/lib/utils";
import Swal from "sweetalert2";
import {rtx} from "@/lib/Rh";
import UploadX from "@/components/UploadX";



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
    const [attachx,setattach]=useState(true)




    const [ im,setk]=useState(null)

const [getmsg,setmsg]=useState([]);

const [sokt,setsok]=useState(null)


const up=useRef([])

    const usr=UserX()

    

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

  


            

            const socket = new WebSocket("wss://66.23.231.118:8888/");

           
            
            socket.onmessage=newmsg;




            socket.onopen = function (event) {
                
                
                
                
                setsok(socket)





            };




        }


    },[])


useEffect(()=>{

    if(usr&&sokt ){
    sokt.send(JSON.stringify({"g":usr?usr.group:"NotAssign","m":"new join rh"}))
    }

},[usr,sokt])


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
                <STDash/>
        <div className="vh-100" style={{width:"100%",backgroundColor:"lightgray"}}>
            <div className=" overflow-y-auto " id="wers" style={{height:"92%",}}>
                { getmsg.map((Chatx,u)=>{

return <div key={u}>   <div className={`w-75 d-flex mb-2 ${Chatx.name===usr.name?"float-end":""}` } style={{transform:`${Chatx.name===usr.name?"scaleX(-1)":""}`}}>

                        <img src={rtx.cdn+"/"+Chatx.dp} className="m-2 rounded-circle" width={50} height={50}/>
                        <div className="mt-1  px-4 p-2 shadow bg-white text-black  w-75 ms-2 rounded-3 " style=  {{transform: `${Chatx.name===usr.name?"scaleX(-1)":""}`}}>
                            <div className="d-flex  justify-content-between fw-bold text-primary " style={{marginBottom:-15}} >
                                <p className="">{Chatx.name} {Chatx.d}</p>
                                <p  className="">{Chatx.t?Chatx.t:"Student"}</p>
                            </div >

                            {Chatx.ix? Chatx.ix.toLowerCase().includes(".jpg") ||  Chatx.ix.toLowerCase().includes(".png") ||  Chatx.ix.toLowerCase().includes(".jpeg") ||  Chatx.ix.toLowerCase().includes(".webp")? <img className="" width={200} height={200} src={rtx.cdn+"/"+Chatx.ix} alt="dd" />:<a href={rtx.cdn+"/"+Chatx.ix} className="btn-primary btn">{Chatx.ix}</a>:Chatx.m }

                        </div>



                    </div>
                    
                    </div>


                }) }


            </div>

            <div style={{height:"80px",backgroundColor:"#2F01C7"}} className="d-flex align-items-center text-center bottom-0" >

                <div className="h1 px-3 text-white" onClick={e=>{


                    setattach(!attachx);



                }}>

                    {attachx ? <FaPaperclip/>:<FaTimes/>}

                </div>



                {attachx?<textarea id={"inputx"} style={{height:"80%",width:"88%"}} className="form-control"/>:
                    <UploadX  cb={setk} />}



                <div className="d-flex justify-content-center text-center" style={{width:"12%"}} onClick={(y)=>{


                    const td=document.getElementById("inputx");



                    attachx ?  sokt?.send(JSON.stringify({name:usr.name?usr.name:"Unregister",dp:usr.dp,g: usr.group?usr.group:"NotAssign" ,m:td.value ,d:getCurrentTime()})):sokt?.send(JSON.stringify({name:usr.name?usr.name:"Unregister",dp:usr.dp,g: usr.group?usr.group:"NotAssign", m:im,ix:im  ,d:getCurrentTime()}))







                }}>

           <h2 style={{color:"white "}} className="btn">Send </h2>
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