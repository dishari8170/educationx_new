import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import Futter from "@/components/futter";
import Cinfo from "@/components/dashboard/Cinfo";
import {useEffect, useState} from "react";
import {Button, Card, Collapse} from "react-bootstrap";
import axios from "axios";
import {FaArrowDown, FaArrowRight} from "react-icons/fa6";


function CollapsibleContent({ title,datax }) {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="text-center w-100">
            <Button
                className="py-2 w-100 mt-1 d-flex justify-content-between"
                onClick={() => setOpen(!open)}
                aria-controls={`collapse-${title}`}
                aria-expanded={open}

            >
                {title}
                <FaArrowDown/>

            </Button>

            <Collapse in={open}>
                <div id={`collapse-${title}`}>
                    <Card>
                        <Card.Body>
                            <div dangerouslySetInnerHTML={{__html:datax}}></div>

                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
        </>
    );
}

export default () =>{
    const [xdat,setxdat] = useState([]);

    function loaddata() {
        axios.get("/api/admin/cinfo?id="+JSON.parse(localStorage.getItem("user")).group).then(value => {


            setxdat(value.data);


        })

    }

    useEffect(()=>{


        loaddata();
    },[])

    return (
        <div className=""> <HeadderX/>

            <div className="d-flex overflow-x-hidden" >
                <STDash/>


                <div className="w-100">
                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Course Information</h4>

                   <div className="">
                    {xdat.map((title, index) => (
                        <CollapsibleContent key={index} title={title.title} datax={title.data} />
                    ))}
                   </div>
                </div>


            </div>

            <Futter/>

        </div>
    );
}