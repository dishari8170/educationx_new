import STDash from "@/components/STDash";
import StProfile from "@/components/StProfile";
import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import React from "react";

export default function About() {


    return (
<div className="overflow-x-hidden">    <HeadderX/>


    {/*<div className="row me-2"  style={{backgroundColor:"#cbcbcb"}}>*/}
    {/*    <h3 className="p-3 rounded col-12" style={{backgroundColor:"#013571",color:"white"}}>Faculty Member</h3>*/}

        <div className="d-flex">
        <STDash/>

    <StProfile/>

</div>

    <Futter/>

</div>
    );
}