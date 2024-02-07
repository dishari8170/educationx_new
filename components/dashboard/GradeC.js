import {useEffect, useState} from "react";
import axios from "axios";
import UserX from "@/lib/utils";


export default function (){

    const usr=UserX()
    const [getx,setx]=useState([])

    useEffect(()=>{

        if (usr)
        axios.get("/api/admin/qes?id="+usr?._id).then(r =>{


            setx(r.data)
        })


    },[usr])

    return ;
}