import Futter from "@/components/futter";
import HeadderX from "@/components/headerx";
import axios from "axios";
import { useEffect, useState} from "react";
import {useRouter} from "next/router";



export default ()=>{


    const [mdata,setmdata] = useState(null);



    useEffect(()=>{



    },[])

    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {


            axios.get( ("/api/assr?gid="+router.query.id) ).then(value => {


                setmdata(value.data[0]);

            })
        }
    }, [router.isReady]);



    return  <div className="bg-dark">

        <HeadderX/>

        <div className="d-flex justify-content-between px-5">

        <h5 className="">Student : {mdata?.name} </h5>
        <h5 className="">Email : {mdata?.email} </h5>

    </div>
        <div className="d-flex w-100 justify-content-center">

            <div dangerouslySetInnerHTML={{ __html: mdata?.ans }}/>


        </div>
<div className="w-100 d-flex justify-content-center m-5">


    {(mdata)?<a href={`https://edux.codeyourbusiness.site/${mdata?.file}`} className="btn btn-primary py-3 text-center  w-50  ">Download File</a> :""

        }

</div>

        <Futter/>




    </div>
}