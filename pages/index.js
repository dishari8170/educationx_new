import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadderX from "@/components/headerx";
import CarouselRow from "@/components/homebnr";
import Founder from "@/components/founder";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import CourceList from "@/components/courcesbnnr";
import CarouselRow2 from "@/components/homebnr2";
import Slider from "@/components/Slider";
import Homebnr from "@/components/homebnr";
import Clienntsay from "@/components/clienntsay";
import Futter from "@/components/futter";
import AboutUs from "@/components/AboutUs";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {rtx} from "@/lib/Rh";


// ;;;;kk
export default function Home() {

    const [xdat,setxdat] = useState([]);
    const [bnr,setbnr] = useState([]);


    function loaddata() {

        axios.get("/api/admin/store").then(value => {

            if (value.data.length>1){
                setxdat(value.data);
            }




        })

        axios.get("/api/admin/bnr").then(value => {

                setbnr(value.data);




        })

    }


    const [getudat, setudat] = useState({})
    const [getbdat, setbdat] = useState([])

    function loaddataU() {

        axios.get("/api/admin/cms?name=founder").then(value => {

            setudat(value.data);

        })
        axios.get("/api/admin/blog").then(value => {

            setbdat(value.data);

        })

    }






    useEffect(()=>{




        loaddata();
        loaddataU()

    },[])


    return (
    <>

      <HeadderX/>


        {/*cccc*/}

        <div className="bg-white ">
            
            <div className="text-black ">
            <Row>
                <Col md={12}>
                    <Carousel controls={false} interval={4000}  pause={false} className="pb-2 pt-1">


                        {bnr.map( (r,t )=>{return <Carousel.Item  key={t}>

<div className="" style={{maxHeight:"500px"}}>
                            <img src={rtx.cdn+"/"+r.dp}  alt="" className="img-fluid "/>


</div>{/*<div className="d-lg-flex justify-content-evenly align-items-center my-3">*/}



                        {/*    <div className=" d-flex justify-content-center">*/}
                        {/*        <img*/}
                        {/*            src="/img/otb1_png.png"   height={400} width={400}*/}
                        {/*            className="object-fit-scale"*/}
                        {/*            alt="Image 1"*/}
                        {/*        />*/}

                        {/*    </div>*/}

                        {/*    <div className="d-none d-lg-block w-25"></div>*/}
                        {/*    <div className="mb-5 ">*/}
                        {/*        <h1>{r.name}</h1>*/}
                        {/*        <p>{r.bnr}</p>*/}
                        {/*        <div className="btn text-white fw-bold px-5 rounded-5 btn-primary btn-outline-light mt-4" onClick={r=>{*/}

                        {/*            window.location='/courses/'+JSON.stringify(r);*/}
                        {/*        }}>Buy Now</div>*/}
                        {/*    </div>*/}



                        {/*</div>*/}
                    </Carousel.Item>})}


                    </Carousel>
                </Col>
            </Row>
        </div>
        </div>

        {/*cccc*/}


        <div className="text-white p-0 d-lg-flex text-black justify-content-center" style={{backgroundColor:"#E6E6E6"}}>
            <div className="container d-lg-flex text-black ">
                <div className="w-25 d-none d-lg-block"></div>
                <div className="d-flex justify-content-center">
                    <img
                        src={rtx.cdn+"/"+getudat.dp} height={500} width={300}
                        className="d-block py-4"
                        style={{objectFit:"scale-down"}}
                        alt="Image 1"
                    />
                </div>
                <div className="w-25 d-none d-lg-block"></div>
                <div className="text-center p-3 d-flex justify-content-center ">
                    <div className="" dangerouslySetInnerHTML={{__html:getudat.text}}>
                        {/*<h2 className="my-4">Meet The Founder</h2>*/}

                        {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error facilis nihil officia omnis praesentium quod? Atque delectus error esse illum labore natus necessitatibus nisi obcaecati odit quasi. Accusamus adipisci architecto asperiores beatae commodi consequuntur cupiditate earum, eligendi eos, facere hic illo impedit incidunt iste iusto laudantium molestias natus nemo, neque nesciunt nihil nisi non officiis omnis porro rerum soluta suscipit tempora ut velit veniam vero voluptatem voluptatibus. Culpa, id.</p>*/}
                        {/*<div className="btn fw-bold px-5 rounded-0 btn-outline-light mb-3" style={{backgroundColor: "#013571"}}>Know More</div>*/}
                    </div>


                </div>




            </div>
        </div>


        <div className="bg-white vw-100 " style={{height:"30px"}}></div>


        {xdat.length>1?(


                             <div className=" container-fluid text-center bg-white pb-4" >

                             <div className="row gap-4 justify-content-center  bg-white ">

                         {xdat.map((u,o) => {

                             return <div className="col-12 col-lg-5 border py-2" key={o}>
    <div className="position-relative bg-black  ">

        <img src={rtx.cdn+"/"+u.thumb} alt={rtx.cdn+"/"+JSON.stringify(u)} className="p-4" style={{
            width: "350px",

            height: "400px",

            objectFit: "scale-down"

        }}/>
        <div className="position-absolute top-0 end-0 m-2">


            {/*<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="red" className="m-4">*/}
            {/*    <path stroke={"red"} strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.75-3.4 6.86-8.55 10.54L12 21.35z"/>*/}
            {/*</svg>*/}


        </div>

        <div className="h5 fw-bolder" style={{marginTop: -15}}>{u.name}</div>

        {/*<div className="h5 text-warning" style={{marginTop:-10}} >{u.star}</div>*/}

        <div className="mx-5  ">
            <div className="bg-dark mx-5 rounded-4 my-2 ">
                <span className="h5 fw-semibold">$ {u.price} </span>
            </div>
            <div>

                {u.bnr}
            </div>

            <div className="btn fw-bolder px-5 rounded-0  my-3 btn-primary rounded-4" onClick={occc=>{

                window.location='/courses/'+u._id;

            }}
                 >Buy Now
            </div>
        </div>
    </div>


    </div>


})}


</div>


    <div className="btn border btn-primary border-2 mt-4 px-5 " onClick={o => {

        window.location.href = "/store"
    }}> Find More
    </div>

</div>
):""}




        <div className="container-fluid pb-5 text-white ">

            <Container className="">
                <Row>
                    <Col md={12}>

                            <Carousel controls={false}  pause={false} indicators={false}>

                                {getbdat.map((value, index) => {

                                    return <Carousel.Item key={index}>

<div className="row d-lg-none">
                                        <div className="col-12">
                                            <img
                                                src={rtx.cdn+"/"+value.dp} height={400}
                                                className="d-block mx-auto me-5 mt-5"
                                                alt="Image 1"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <h1>{value.title}</h1>
                                            <hr/>
                                            <div className="" style={{height:"25px"}}></div>


                                            <p>


                                            </p>
                                            <div className="btn btn-primary text-white border fw-bold px-5 rounded-0"

                                                 onClick={()=>{
                                                     window.location.href="/blog?id="+value._id
                                                 }} style={{cursor:"pointer"}}
                                            > Know more
                                            </div>
                                        </div>
</div>
                                    <div className=" d-none d-lg-flex ">


                                        <div className="col-md-5">
                                            <div className="" style={{height:"25px"}}></div>

                                            <h1>{value.title}</h1>
                                            <hr/>
                                            <div className="" style={{height:"25px"}}></div>


                                            <p>

                                                {value.sub}
                                            </p>
                                            <div className="btn btn-primary text-white  fw-bold px-5 rounded-0"

                                                 onClick={()=>{
                                                     window.location.href="/blog?id="+value._id
                                                 }}

                                                 >Know more
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <img
                                                src={rtx.cdn+"/"+value.dp} height={400}
                                                className="d-block mx-auto me-5 mt-5"
                                                alt="Image 1"
                                            />
                                        </div>
                                    </div>
                                </Carousel.Item>})}



                            </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>

        {/*<Slider/>*/}
        {/*<Clienntsay/>*/}

        <div className="bg-white vw-100 " style={{height:"30px"}}></div>

        <Futter/>




    </>

  )
}
