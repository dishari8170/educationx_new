import HeadderX from "@/components/headerx";
import Futter from "@/components/futter";
import Homebnr from "@/components/homebnr";
import {Carousel, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"
import {rtx} from "@/lib/Rh";
import axios from "axios";
import {useRouter} from "next/router";
import {useSearchParams} from "next/navigation";
import {FaRegStar, FaStar, FaStarAndCrescent} from "react-icons/fa";
import {FaRankingStar} from "react-icons/fa6";
import StarRating from "@/components/StarRating";
import Swal from "sweetalert2";

const PersonCard = ({name, imageUrl}) => {
    return (
        <div className="d-flex justify-content-center align-items-center rounded-3 bg-white"
             style={{border: "2px #1E1E1E solid", height: "350px", width: "300px"}}>
            <div className="text-center">
                <img className="mb-3" src={imageUrl} alt="Person" width="150" height="250"/>
                <p className="h5">{name}</p>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {


    return {
        props: {
            raju: context.params.id,
        },
    }
    // Rest of `getServerSideProps` code
}

export default function Id(pro) {

    let prop = {}
    const [xdat, setxdat] = useState({});
    const [xrdat, setrdat] = useState({});

    const [rate, setrate] = useState(0);


    const searchParams = useSearchParams()

    function loaddata() {

        axios.get("/api/admin/store?id=" + pro.raju).then(value => {


            setxdat(value.data);
        })

        axios.get("/api/admin/revx?id=" + pro.raju).then(value => {


            setrdat(value.data);


            // setrate(value.data.stat[0].total)
        })

    }

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        console.log(pro)


        loaddata();

    }, [])

    const [mtitle, setmtitle] = useState({});


    return <>


        <Modal show={isOpen} onHide={() => {
            setIsOpen(false)
        }} fullscreen={false} centered={true}>
            <Modal.Header className="" style={{backgroundColor: "#000"}}>
                <div className="text-center w-100 h4 font-monospace  fw-bold">Write Your Review</div>
                <button onClick={() => {
                    setIsOpen(false)
                }} className="text-black bg-transparent border-0 h1 m-0">&times;</button>
            </Modal.Header>
            <Modal.Body className="" style={{backgroundColor: "#000"}}>


                <div className="font-monospace  fw-bold">Your Name:</div>
                <input type="text" name="name" className="form-control rtx"/>

                <div className="font-monospace mt-2 fw-bold">Your Email:</div>

                <input type="text" className="form-control mb-2 rtx" name="email"/>
                <div className="font-monospace  fw-bold">Your Review:</div>

                <textarea name="rev" className="form-control rtx" id="" cols="30" rows="10"></textarea>

                <div className="font-monospace  fw-bold">Your Rating:</div>
                <div className="d-flex justify-content-between">
                    <StarRating onRatingChange={setrate}/>
                    <div className="btn btn-primary btn-outline-light mt-2 rounded-4" onClick={po => {


                        let r = document.querySelectorAll(".rtx")

                        let dat = {}

                        r.forEach(rx => {
                            dat[rx.name] = rx.value
                        })

                        dat["star"] = rate
                        dat["id"] = xdat._id
                        dat["course"] = xdat.name


                        Swal.fire(
                            {
                                title: 'Are Your Sure', icon: "info",

                                showCancelButton: true,
                                showLoaderOnConfirm: true,

                                preConfirm: async () => {

                                    Swal.showLoading()

                                    return await axios.post("/api/admin/revx", dat).then(r => {

                                        Swal.fire("Success", "Review Submitted", "success").then(y => {

                                            // setIsOpen(false)

                                            window.location.reload()
                                        })


                                    })


                                }


                            })


                    }}>Submit
                    </div>
                </div>
            </Modal.Body>

        </Modal>


        <HeadderX/>


        <div className="bg-white text-black pt-5 ">
            <div className="row justify-content-center ">

                <div className="col-12 col-lg-6 bg-dark pt-5 ">

                    <div className="d-flex justify-content-center" style={{height: "350px"}}>

                        <img src={rtx.cdn + "/" + xdat.thumb} className="img-fluid " style={{objectFit: "scale-down"}}/>

                    </div>


                    <div className="d-flex justify-content-around my-3 align-items-center">
                        <div className="h3 text-white"> {xdat.name}</div>


            {/*            {xrdat.stat?.length > 0 ? <div className="d-flex align-items-center text-white">*/}
            {/*                {Array.from({length: 5}).map((_, index) => {*/}
            {/*                    const starValue = index + 1;*/}
            {/*                    const isFilled = xrdat.stat[0].avg >= starValue;*/}

            {/*                    return (*/}
            {/*                        <span*/}
            {/*                            key={index}*/}
            {/*                            style={{cursor: 'pointer'}}*/}
            {/*                            // onMouseEnter={() => setHoveredStar(starValue)}*/}
            {/*                            // onMouseLeave={() => setHoveredStar(0)}*/}
            {/*                            onClick={() => {*/}

            {/*                            }}*/}
            {/*                        >*/}
            {/*{isFilled ? (*/}
            {/*    <FaStar color="#FFD700" className="h1"/>*/}
            {/*) : (*/}
            {/*    <FaStar color="#DCDCDC" className="h3"/>*/}
            {/*)}*/}


            {/*                         </span>*/}
            {/*                    );*/}
            {/*                })*/}
            {/*                }*/}


            {/*                ({xrdat.stat[0].total})*/}
            {/*            </div> : <div className="d-flex align-items-center text-white">*/}
            {/*                <StarRating onRatingChange={setrate} rating={0}/>*/}
            {/*                (0)*/}
            {/*            </div>}*/}

                    </div>
                </div>


                <div className="col-12 col-lg-4 mt-2 mt-lg-0">


                    <div className="bg-dark h-100 text-white px-4 position-relative ">

                        <div className="d-flex align-items-center justify-content-between">

                            <h4 className="p-3">Intro : </h4>

                            <div className="" onClick={op => {


                                setIsOpen(true)
                            }}>
                                {/*<div*/}
                                {/*    className=" justify-content-center shadow rounded-circle text-center d-flex align-items-center border  border-4"*/}
                                {/*    style={{width: "40px", height: "40px", backgroundColor: "#f7a21a"}} onClick={u => {*/}

                                {/*    setIsOpen(true)*/}
                                {/*}}>*/}


                                {/*    <div className="h4 fw-bold mt-1">+</div>*/}
                                {/*</div>*/}

                            </div>

                        </div>


                        <div className="border rounded-4 p-3 overflow-y-scroll mb-2  h-50 "
                             style={{ overflowWrap: "break-word"}}>
                            {xdat.bnr}


            {/*                {xrdat.user?xrdat.user.map( (p,op)=>(*/}
            {/*                    <>*/}
            {/*                <div className="d-flex align-items-center justify-content-between">*/}



            {/*                    <p className="h5 fw-bold">{p.name}:</p>*/}

            {/*                    <div className="d-flex align-items-center">*/}
            {/*                        */}
            {/*                        {Array.from({length: 5}).map((_, index) => {*/}
            {/*                            const starValue = index + 1;*/}
            {/*                            const isFilled = p.star >= starValue;*/}

            {/*                            return (*/}
            {/*                                <span*/}
            {/*                                    key={index}*/}
            {/*                                    style={{cursor: 'pointer'}}*/}
            {/*                                    // onMouseEnter={() => setHoveredStar(starValue)}*/}
            {/*                                    // onMouseLeave={() => setHoveredStar(0)}*/}
            {/*                                    onClick={() => {*/}

            {/*                                    }}*/}
            {/*                                >*/}
            {/*{isFilled ? (*/}
            {/*    <FaStar color="#f7a21a" className="h5"/>*/}
            {/*) : (*/}
            {/*    <FaStar color="#DCDCDC" className="h5"/>*/}
            {/*)}*/}


            {/*                         </span>*/}
            {/*                            );*/}
            {/*                        })*/}
            {/*                        }*/}


            {/*                    </div>*/}


            {/*                </div>*/}
            {/*                <p className="ps-3">{p.rev}</p></>*/}
            {/*                        )*/}
            {/*                    ):""*/}
            {/*                }*/}


                        </div>


                        <div
                            className="d-flex align-items-center justify-content-around w-100 position-absolute d-none d-lg-flex bottom-0 mb-1">

                            <div className="fw-bold  h3"> $ {xdat.price} /-</div>
                            <div className="btn fw-bolder px-lg-5 rounded-4  btn-primary  btn-outline-light   bottom-0"
                                 onClick={(r) => {
                                     window.location.href = `/rext?rx=${xdat.name}&p=${xdat.price}`
                                 }}> Register
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-around w-100 d-lg-none bottom-0 mb-1">

                            <div className="fw-bold  h3"> $ {xdat.price} /-</div>
                            <div className="btn fw-bolder px-lg-5 rounded-4  btn-primary  btn-outline-light   bottom-0"
                                 onClick={(r) => {
                                     window.location.href = `/rext?rx=${xdat.name}&p=${xdat.price}`
                                 }}> Register
                            </div>
                        </div>

                    </div>


                    {/*<h1>{xdat.name}</h1>*/}


                    {/*<div className="h1 ps-5" style={{color: "#1c2697"}}>${xdat.price} /-</div>*/}


                </div>


                {/*<div className="row dn d-flex bg-white justify-content-evenly pb-5 pt-2">*/}

                {/*    <div className="col-1"></div>*/}
                {/*    <div className="col-5">*/}

                {/*    </div>*/}
                {/*    <div className="col-3 d-flex  ">*/}


                {/*        <div className="btn fw-bolder px-5 py-2 btn-outline-light ms-2"*/}
                {/*             style={{backgroundColor: "#013571"}} onClick={(r)=>{*/}
                {/*                 window.location.href=`/rext?rx=${xdat.name}&p=${xdat.price}`*/}
                {/*        }} > Register</div>*/}


                {/*    </div>*/}
                {/*</div>*/}
<div className=" col-12 bg-success">
                <div className="d-flex justify-content-center">

                    <iframe height="490" width={600} src={"https://www.youtube.com/embed/"+xdat.vdo+"?autoplay=1&mute=1"} frameBorder="0" allowFullScreen

                            className="d-block mx-auto me-5 mt-5 "
                    ></iframe></div>
                </div>
                <div className="col-10 mt-5 my-5 py-5 text-center">
                    <div dangerouslySetInnerHTML={{__html:xdat.dis}}>


</div>

                    </div>





                {/*    <div className="d-flex align-items-center  justify-content-center p-5 ">*/}
                {/*        <div className="col-md-4 mb-5">*/}
                {/*            <h1 >Explainer Video</h1>*/}
                {/*            <h1 >For the Course</h1>*/}

                {/*            <p>*/}

                {/*                {xdat.bnr}*/}
                {/*            </p>*/}
                {/*            <input type="button" className="btn fw-bolder p-2  btn-outline-light my-2 " style={{backgroundColor: "#013571"}} value="    Register   "/>*/}

                {/*        </div>*/}
                {/*        <div className="col-md-7">*/}

                {/*            <iframe height="490" width={650} src={"https://www.youtube.com/embed/"+xdat.vdo+"?autoplay=1&mute=1"} frameBorder="0" allowFullScreen*/}

                {/*                className="d-block mx-auto me-5 mt-5 "*/}
                {/*            ></iframe>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!*<h1 className="text-center pb-3 fw-semibold display-4">Related Course</h1>*!/*/}

                {/*    /!*<div className="d-flex justify-content-center ms-5 ">*!/*/}
                {/*    /!*    <div className="w-75 ">*!/*/}

                {/*    /!*        <Swiper className="mb-5 d-block "*!/*/}

                {/*    /!*                autoplay={{*!/*/}
                {/*    /!*                    delay: 500,*!/*/}
                {/*    /!*                    disableOnInteraction: false,*!/*/}
                {/*    /!*                }}*!/*/}
                {/*    /!*                spaceBetween={0}*!/*/}
                {/*    /!*                slidesPerView={3}*!/*/}
                {/*    /!*                onSlideChange={() => console.log('slide change')}*!/*/}
                {/*    /!*                onSwiper={(swiper) => console.log(swiper)}*!/*/}
                {/*    /!*        >*!/*/}

                {/*    /!*            <SwiperSlide className="">*!/*/}

                {/*    /!*                <PersonCard name={"Out OF Box"} imageUrl="/img/otb1_png.png"></PersonCard>*!/*/}
                {/*    /!*            </SwiperSlide>*!/*/}
                {/*    /!*            <SwiperSlide>*!/*/}

                {/*    /!*                <PersonCard name={"Cource 1"} imageUrl="/img/otb1_png.png"></PersonCard>*!/*/}
                {/*    /!*            </SwiperSlide>*!/*/}
                {/*    /!*            <SwiperSlide>*!/*/}

                {/*    /!*                <PersonCard name={"Course 2"} imageUrl="/img/otb1_png.png"></PersonCard>*!/*/}
                {/*    /!*            </SwiperSlide>*!/*/}

                {/*    /!*            <SwiperSlide>*!/*/}

                {/*    /!*                <PersonCard name={"Id 3"} imageUrl="/img/otb1_png.png"></PersonCard>*!/*/}
                {/*    /!*            </SwiperSlide>*!/*/}


                {/*    /!*        </Swiper>*!/*/}

                {/*    /!*    </div>*!/*/}

                {/*    /!*</div>*!/*/}
                {/*</div>*/}
                {/*/!*)*!/*/}


            </div>
        </div>


        {/*<Homebnr/>*/}
        {/*<Futter/>*/}

    </>
}