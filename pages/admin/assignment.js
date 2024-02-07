import React from "react";
import QuizForm from "@/components/QuizeEditor";
import HeadderX from "@/components/headerx";
import AdminDash from "@/components/AdminDash";

export default ()=>{


    return<>
    <HeadderX/>
    <div className="d-flex">
        <AdminDash/>
<QuizForm/>

    </div>
</>
}


