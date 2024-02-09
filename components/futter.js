import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6";

const  Futter=() =>
{

    return (


        <div className="container-fluid bg-black text-white py-5">

            <div className="row py-5">
            <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                <img src="/rlogo.png"/>
            </div>
            <div className="col-lg-4 col-12">

                <h4>Quick Links</h4>

                <div className="row mt-4">

                    <div className="col-6 ">
<h6 onClick={()=>{
    window.location.href="/"
}} style={{cursor:"pointer"}}>   Home</h6>
<h6 onClick ={()=>{
    window.location.href="/about"
}} style={{cursor:"pointer"}}>
About Us</h6>
<h6
    onClick={()=>{
        window.location.href="/store"
    }} style={{cursor:"pointer"}}
>Courses</h6>
<h6
    onClick={()=>{
        window.location.href="/contact"
    }} style={{cursor:"pointer"}}
>Contact Us</h6>

                    </div>

                    <div className="col-6">
                        <h6
                            onClick={()=>{
                                window.location.href="/teacher"
                            }} style={{cursor:"pointer"}}
                        >Teacher Login</h6>
                        <h6
                            onClick={()=>{
                                window.location.href="/term"
                            }} style={{cursor:"pointer"}}
                        >Terms & Condition</h6>
                        <h6
                            onClick={()=>{
                                window.location.href="/policy"
                            }} style={{cursor:"pointer"}}
                        >Privacy Policy</h6>
                        <h6
                            onClick={()=>{
                                window.location.href="/Faq"
                            }} style={{cursor:"pointer"}}
                        >FAQ</h6>




                    </div>
                </div>

            </div>

            <div className="col-lg-4 col-12  text-center"><h3> Follow Us On</h3>

                <div className="display-5">
                    <FaFacebook className=""/>
                    <FaInstagram className="mx-3"/>
                    <FaTwitter className=""/>
                </div>

            </div>
            </div>

        </div>

    );

}

export default Futter;
