import Homebnr from "@/components/homebnr";
import React from "react";

export default function (){


    const PersonCard = ({name, imageUrl}) => {
        return (

            <div className="d-flex" style={{width: 150}}>
                {/*<div className="text-center">*/}
                {/*    <img className="rounded-circle mb-3" src={imageUrl} alt="Person" width="100" height="100"/>*/}
                {/*    <p className="h5" style={{color: "#013571"}}>★★★★★</p>*/}
                {/*    <p className="text-black">Position</p>*/}

                {/*</div>*/}

            </div>
        );
    }

    return(


        // <Homebnr/>




        <div className="row mx-5">
            <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard>


    </div>




    );

}