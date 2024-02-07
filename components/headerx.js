

import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import UserX from "@/lib/utils";
import {useRouter} from "next/router";
import {FaBars} from "react-icons/fa";

export  default ()=>{
    const usr=UserX();
    const rot= useRouter();

    return <>

        <Navbar expand="lg" >
            <Container>


                <Navbar.Brand href="/"><img src="/rlogo.png" alt="Logo" width={120} height={85} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"><FaBars/></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 d-flex justify-content-between">

                        <div className=""></div>
                        <a href="/" className="text-white mt-1 mt-lg-0">Home</a>


                        <a href="/about" className="text-white mt-1 mt-lg-0">About</a>


                        <a href="/store" className="text-white mt-1 mt-lg-0">Courses</a>


                        <a href="/storex" className="text-white mt-1 mt-lg-0">Store</a>


                        <a href="/contact" className="text-white mt-1 mt-lg-0">Contact Us</a>


                        <a href="/archives" className="text-white mt-1 mt-lg-0">Archives</a>

                        <div className="d-flex justify-content-center mt-1 mt-lg-0">

                            {
                                usr?.raju?
                                    <div className=""><div className="btn btn-outline-light me-2" onClick={()=>{

                                        rot.push("/dashboard")
                                    }}>
                                        Dashboard
                                    </div>
                                        <div className="btn btn-light" onClick={()=>{

                                            localStorage.clear()
                                            window.location.href=("/")
                                        }}>
                                            LogOut
                                        </div>
                                    </div>

                                    :
                                    <a href={"/account"} className="">
                                        <div className="d-flex btn  btn-outline-light">
                                            Login & Register
                                        </div>
                                    </a>

                            }
                        </div>

                    </Nav>

                </Navbar.Collapse>



            </Container>
        </Navbar>
    </>


}