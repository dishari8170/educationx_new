import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

import HeadderX from "@/components/headerx";
import {rtx} from "@/lib/Rh";
import Futter from "@/components/futter";


export default () =>{
const diya = useRouter()
const [getx,setx] = useState({})


useEffect(() =>{
    if (diya.query.id)
    {

        axios.get("/api/admin/blog?id="+diya.query.id).then(ttf=>{

        setx(ttf.data);



        })

    }

},
    [diya.query]

)




    return <>

    <HeadderX/>

<div className="container-fluid bg-white text-black mt-3 px-5">

<div className="row">
    <div className="col-12 d-flex justify-content-center p-3">
        <img  className="img-fluid" src={rtx.cdn+"/"+getx.dp} />
    </div>

    <div className="col-12 d-flex justify-content-center  p-3">
        <div className="h1">{getx.title}</div>
        <div className=" mt-4 ">{getx.sub}</div>

    </div>

</div>
    <div className="my-3 pb-5" dangerouslySetInnerHTML={{__html:getx.text}}>


    </div>



    </div>


        <Futter/>

    </>

}