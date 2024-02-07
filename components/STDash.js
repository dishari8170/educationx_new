import {FaAngleRight} from "react-icons/fa6";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {FaArrowLeft, FaTimes} from "react-icons/fa";

const STDash = () => {


    const router = useRouter()
    const [current, setCurrent] = useState(router.pathname);

    const [tsxx, settsxx] = useState(router.pathname);
    const [tog, setlog] = useState(false);


    const [ws,setws]=useState(null);

    useEffect ( () => {
        setCurrent(router.pathname)
     


        console.log(router.pathname)

    }, [router.pathname])



    useEffect(()=>{

        if(localStorage){

         settsxx( localStorage?.getItem("user") ? JSON.parse( localStorage.user).role:"")

        }


       
        

    },[])


    return(

        <div className="d-flex ">

        <div className={`d-flex  flex-column ${tog ? "d-none":""}`} style={{backgroundColor:"#000",color:"white",width:"300px"}}>

            <h4 className="fw-bold w-100 p-2 py-3 text-center"  style={{ background: '#f7a21a'}}>{tsxx}</h4>

            <p className="px-2"><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard"}> Student Dashboard</a></p>

            <h5 className="fw-bold w-100 p-2 "  style={{ background: '#f7a21a'}}> Course Introduction</h5>

            <p className={(current=="/dashboard/cinfo"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/cinfo"}> Course Information</a></p>
            {/*<p className={(current=="/dashboard/faculty"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/faculty"}>Faculty Information</a></p>*/}
            <h5 className="fw-bold w-100 p-2 "  style={{ background: '#f7a21a'}}> Course Work</h5>

            <p className={(current=="/dashboard/assV"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/assV"}>Announcement</a></p>
            <p className={(current=="/dashboard/asgnV"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/asgnV"}> Assignment</a></p>
            <p className={(current=="/dashboard/cmatV"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/cmatV"}> Course Material</a></p>
            <p className={(current=="/dashboard/Qtest"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /><a className="text-white" href={"/dashboard/Qtest"}> Take Test</a></p>
            <p className={(current=="/dashboard/meet"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/meet"}> Current Class</a></p>
            <p className={(current=="/dashboard/disV"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/disV"}> Discussion Area</a></p>
            <p className={(current=="/dashboard/faculty"?"bg-info p-2":"px-2")}><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/faculty"}> Course Faculty</a></p>


          <h5 className="fw-bold w-100 p-2 "  style={{ background: '#f7a21a'}}> My Portal</h5>

            <p className={(current=="/dashboard/grade"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /><a href={"/dashboard/grade"} className="text-white"> My Grades</a></p>
            {/*<p className={(current=="/admin/grade"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /> Profile Settings</p>*/}
            <h5 className="fw-bold w-100 p-2 "  style={{ background: '#f7a21a'}}> <a className="text-white" href={"/dashboard/faq"}> Help </a></h5>
            {/*<p className={(current=="/dashboard/cnt"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white"  /><a className="text-white" href={"/dashboard/cnt"}> Contact Support</a></p>*/}
            <p className={(current=="/dashboard/faq"?"bg-info p-2":"px-2")} ><FaAngleRight className="text-white" /> <a className="text-white" href={"/dashboard/faq"}>FAQ</a> </p>

        </div>
            <div className={`h3 text-white mt-2 ${tog?"":"me-3"}`} style={{marginLeft:tog?"0px":"-40px"}} onClick={o=>{
            //
            // let y=    document.getElementById("sid")
            //
            //     console.log(y)
            //
            //     y.classList.toggle("d-none")
                setlog(!tog)

            }}>

                <div className={tog?"position-absolute  ms-2":"position-relative ms-2"} style={{zIndex:"123"}}>{tog?<FaTimes/>:<FaArrowLeft />}</div></div>
        </div>

            );



}
export  default  STDash;