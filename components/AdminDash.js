import {FaAngleRight} from "react-icons/fa6";
import styles from "./AdminDash.module.css"
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {FaArrowLeft, FaSignOutAlt, FaTimes} from "react-icons/fa";

export default () => {

    const router = useRouter()
    const [current, setCurrent] = useState(router.pathname);
    const [user, setusr] = useState(null);
    const [tog, setlog] = useState(false);

    useEffect(() => {
        setCurrent(router.pathname)

        console.log(router.pathname)

    }, [router.pathname])


    useEffect(() => {

        if (localStorage.getItem("sales")) {

            setusr(JSON.parse(localStorage.getItem("sales")))
        }


    }, [])


    return (
        <>


            {/*{user ? <>*/}

            {/*        <div className={`d-flex  flex-column ddd w-25 `}*/}
            {/*             style={{backgroundColor: "#013571", color: "white"}}>*/}

            {/*            <div className="fw-bold w-100 p-2 "*/}
            {/*                 style={{background: 'linear-gradient(to right, #e4b845, #f8e685)'}}>*/}
            {/*                <div className="h4">Teachers Panel</div>*/}

            {/*                {user.name}*/}


            {/*            </div>*/}

            {/*            <div className="tx mt-3">*/}


            {/*                {*/}

            {/*                    JSON.parse(user.id).map((obj, index) => {*/}
            {/*                        const [key, value] = Object.entries(obj)[0];*/}
            {/*                        return (*/}
            {/*                            <div key={index}>*/}


            {/*                                <p className={(current === value ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
            {/*                                    className="text-white"/><a href={value} className="text-white"> {key}</a>*/}
            {/*                                </p>*/}

            {/*                            </div>*/}
            {/*                        );*/}
            {/*                    })*/}


            {/*                }*/}


            {/*                <p className={"px-2 text-danger "} onClick={r => {*/}

            {/*                    localStorage.removeItem("sales")*/}
            {/*                    window.location.href = "/teacher"*/}

            {/*                }}><FaAngleRight className="text-white"/> Logout</p>*/}


            {/*            </div>*/}

            {/*        </div>*/}


            {/*    </> :*/}

            {user ?   <div className="d-flex">


                    <div className={`d-flex  flex-column ${tog ? "d-none" : ""}`}
                         style={{backgroundColor: "#000", color: "white", width: "300px"}}>

                        <h4 className="fw-bold w-100 p-3 "
                            style={{background: '#f7a21a'}}>  {user?.name? user.name +" Panel":""}
                            <br/>

                        </h4>
                        <div className="tx">


                        </div>

                        {/*<h5 className="fw-bold w-100 p-2 "  style={{ background: 'linear-gradient(to right, #e4b845, #f8e685)'}}> My Portal</h5>*/}



                        {
                            user?.id?
                            JSON.parse(user?.id).map((obj, index) => {
                                const [key, value] = Object.entries(obj)[0];
                                return (
                                    <div key={index}>


                                        <p className={(current === value ? "bg-info p-2" : "px-2")}><FaAngleRight
                                            className="text-white"/><a href={value}
                                                                       className="text-white">{key}</a></p>


                                        {/*<p className={(current === value ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                                        {/*    className="text-white"/><a href={value} className="text-white"> {key}</a>*/}
                                        {/*</p>*/}

                                    </div>
                                );
                            }):""


                        }
                        <p className={"px-2 text-danger "} style={{cursor:"pointer"}} onClick={r => {

                            localStorage.removeItem("sales")
                            window.location.href = "/teacher"

                        }}><FaAngleRight className="text-white"/> Logout</p>





                    {/*    <p className={(current == "/admin/grade" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a href={"/admin/grade"}*/}
                    {/*                                   className="text-white"> Give Grades</a></p>*/}

                    {/*    <p className={(current == "/admin/facX" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a href={"/admin/facX"} className="text-white"> Manage Faculty</a>*/}
                    {/*    </p>*/}
                    {/*    <p className={(current == "/admin/coursemat" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a href={"/admin/coursemat"}*/}
                    {/*                                   className="text-white"> Manage Course*/}
                    {/*        Material</a></p>*/}
                    {/*    <p className={(current == "/admin/assX" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a className="text-white"*/}
                    {/*                                   href={"/admin/assX"}> Manage*/}
                    {/*        Announcements </a></p>*/}
                    {/*    <p className={(current == "/admin/asgnX" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a className="text-white"*/}
                    {/*                                   href={"/admin/asgnX"}> Manage*/}
                    {/*        Assignment </a></p>*/}
                    {/*    <p className={(current == "/admin/CinfoX" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a className="text-white"*/}
                    {/*                                   href={"/admin/CinfoX"}> Manage Course Information </a></p>*/}
                    {/*    <p className={(current == "/admin/NotiX" ? "bg-info p-2" : "px-2")}><FaAngleRight*/}
                    {/*        className="text-white"/><a className="text-white"*/}
                    {/*                                   href={"/admin/NotiX"}> Manage Notification </a></p>*/}
                    {/*    <p className={(current == "/admin/stdX" ? "bg-info p-2" : "px-2")}>*/}
                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/stdX"}> Manage Students</a>*/}
                    {/*    </p>*/}


                    {/*    <p className={(current == "/admin/meet" ? "bg-info p-2" : "px-2")}>*/}
                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/meet"}>Manage Class</a>*/}
                    {/*    </p>*/}

                    {/*    <p className={(current == "/admin/disV" ? "bg-info p-2" : "px-2")}>*/}
                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/disV"}>Discussion Area</a>*/}
                    {/*    </p>*/}
                    {/*    <p className={(current == "/admin/Mqs" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/Mqs"}>Manage Test</a>*/}
                    {/*    </p>*/}

                    {/*    <p className={(current === "/admin/store" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/store"}>Manage Courses</a>*/}
                    {/*    </p>*/}

                    {/*    <p className={(current === "/admin/exstore" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/exstore"}>Manage Store</a>*/}
                    {/*    </p>*/}

                    {/*    <p className={(current == "/admin/thr" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/thr"}>Manage Teacher</a>*/}
                    {/*    </p>*/}
                    {/*    <p className={(current == "/admin/blog" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/blog"}>Manage Blog</a>*/}
                    {/*    </p>*/}
                    {/*    <p className={(current == "/admin/cms" ? "bg-info p-2" : "px-2")}>*/}

                    {/*        <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                                 href={"/admin/cms"}>Edit Pages</a>*/}
                    {/*    </p><p className={(current == "/admin/revX" ? "bg-info p-2" : "px-2")}>*/}

                    {/*    <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                             href={"/admin/revX"}>Manage Review</a>*/}
                    {/*</p><p className={(current == "/admin/apqfile" ? "bg-info p-2" : "px-2")}>*/}

                    {/*    <FaAngleRight className="text-white"/><a className="text-white"*/}
                    {/*                                             href={"/admin/apqfile"}>Manage FAQ</a>*/}
                    {/*</p>*/}


                        {/*<p className="px-2"><FaAngleRight className="text-white" /> <a className="text-white" href={"faq"}>FAQ</a> </p>*/}


                    </div>

                    <div className={`h3 text-white mt-2 ${tog ? "" : "me-3"}`}
                         style={{marginLeft: tog ? "0px" : "-40px"}}
                         onClick={o => {
                             //
                             // let y=    document.getElementById("sid")
                             //
                             //     console.log(y)
                             //
                             //     y.classList.toggle("d-none")
                             setlog(!tog)

                         }}>

                        <div className={tog ? "position-absolute  ms-2" : "position-relative ms-2"}
                             style={{zIndex: "123"}}>{tog ? <FaTimes/> : <FaArrowLeft/>}</div>
                    </div>


                </div>:""

            }


        </>


    );


}
