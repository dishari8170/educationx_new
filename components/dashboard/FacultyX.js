import React from "react";



export default function () {
    const PersonCard = ({name, imageUrl}) => {
        return (

            <div className="d-flex" style={{width:150}}>
                <div className="text-center">
                    <img className="rounded-circle mb-3" src={imageUrl} alt="Person" width="100" height="100"/>
                    <p className="h5" style={{color:"#013571"}}>{name}</p>
                    <p className="text-black">Position</p>
                </div>

            </div>
        );
    };




    return <div className="container-fluid bg-white">
<h2 className="text-center py-3 text-white "  style={{backgroundColor:"#013571"}}>Facalty Member</h2>

        <div className=" text-white mt-5" style={{paddingLeft: "15%",paddingRight:"15%"}}>

            <div className="row d-flex justify-content-between">
                <div className="col-3"><PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>     <div className="col-3">
                <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>     <div className="col-3">
                <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>
            </div>

            <div className="mt-5"></div>
            <div className="row d-flex justify-content-between">
                <div className="col-3">
                    <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>  <div className="col-3">
                <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>     <div className="col-3">
                <PersonCard name={"Faculty Name"} imageUrl="/img/ellipse_2.png"></PersonCard></div>
            </div>
        </div>



    </div>;

}
