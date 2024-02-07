import {Button, Card, Collapse} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FaArrowDown} from "react-icons/fa6";
import axios from "axios";

function CollapsibleContent({ title }) {

    const [open, setOpen] = useState(false);

    let p={};

    p.d=""



    return (
        <div className="text-center w-100 px-5">

                <Button
                    className="py-2 w-100 mt-1 d-flex justify-content-around"
                    onClick={() => setOpen(!open)}

                    aria-expanded={open}
                    style={{backgroundColor:"black"}}
                >
                    {title.title}
                    <FaArrowDown/>

                </Button>
            <Collapse in={open}>
                <div id={`collapse-${title}`}>
                    <Card>
                        <Card.Body>
<div className="text-center"

     dangerouslySetInnerHTML={{__html:title.data}}
>

</div>
                        </Card.Body>
                    </Card>
                </div>
            </Collapse>
        </div>
    );
}

export default  function DsFaq () {
    const [open, setOpen] = useState(false);
    const [getx, setx] = useState([]);


    useEffect(()=>{
        axios.get("/api/admin/faq").then(value => {


            setx(value.data);

            console.log(value.data);

        })
    },[])




        const titles = [


    ];

    return<div className="w-100 bg-white py-4">

        {getx.map((a,i)=>{

            return <div>
                <CollapsibleContent title={a}/>
            </div>

        })}
        <div className="" style={{minHeight:"100px"}}></div>
    </div>

}