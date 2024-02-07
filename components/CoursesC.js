import {Carousel} from "react-bootstrap";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css"
import {rtx} from "@/lib/Rh";

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

export default function (prop) {

    return (

        <div className="">
            <div className="row d-flex  justify-content-evenly">

                <div className="col-1">

                </div>
                <div className="col-4">
                    {/*<Carousel controls={false} interval={4000} pause={false}>*/}
                    {/*    <Carousel.Item>*/}
                            <img src={rtx.cdn+prop.thumb} className="" width="300px" height="450px"/>
                        {/*</Carousel.Item> <Carousel.Item>*/}
                        {/*<img src="/img/otb1_png.png" width="300px" height="450px"/>*/}
                    {/*</Carousel.Item>*/}
                    {/*</Carousel>*/}
                </div>
                <div className="h1 text-warning  col-3 ps-5">★★★★☆</div>

            </div>

            <div className="row d-flex bg-white justify-content-evenly pt-5">

                <div className="col-1"></div>
                <div className="col-5">
                    <h1>{prop.name}</h1>
                </div>
                <div className="col-3 d-flex align-items-center">

                    <div className="h1" style={{color: "#1c2697"}}>$20</div>

                    <p className="h3 ps-3 " style={{color: "#9999a0"}}><del>$40</del> (50% off)</p>


                </div>
            </div>

            <div className="row d-flex bg-white justify-content-evenly pb-5 pt-2">

                <div className="col-1"></div>
                <div className="col-5">

                    <div className="btn btn-outline-dark px-4 mx-5"> Description</div>
                    <div className="btn btn-outline-dark px-5"> Reviews</div>
                </div>
                <div className="col-3 d-flex  ">


                    <div className="btn fw-bolder px-5 py-2 btn-outline-light ms-2"
                         style={{backgroundColor: "#013571"}} >Register</div>


                </div>
            </div>


            <div className="row d-flex justify-content-center text-center">

                <div className="col-1"></div>
                <div className="col-10">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae corporis cum eaque eligendi, facere mollitia nihil nisi officiis quasi quis sint suscipit tempore ullam ut? Adipisci amet aperiam minus nam quaerat repellendus reprehenderit repudiandae saepe, suscipit ut voluptatibus voluptatum! Debitis dignissimos esse exercitationem molestiae quaerat quidem reiciendis repudiandae saepe sed vitae. Accusamus dignissimos fugiat id illum ipsa magnam praesentium!

                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque dolor fugiat incidunt minus molestias sequi, tempora tenetur? Aliquid aut cumque et facilis fugit illum neque, nihil ratione rem similique. Ab, architecto aspernatur blanditiis, consectetur deleniti ducimus error expedita facilis id illum magnam magni minima modi nesciunt nostrum quae quas ratione, sint sit vel? Dicta dolore, ex ipsum labore libero numquam odit quasi, quod saepe sed sint velit voluptatum! Deserunt mollitia nesciunt sapiente sequi ullam. Architecto aut commodi, corporis cum cumque deserunt dignissimos ea excepturi id ipsa itaque molestiae nihil non odio perspiciatis porro repellendus tenetur ullam velit voluptatem voluptates.
                    </p>


                </div>
                <div className="col-1"></div>


            </div>


            <div className="d-flex align-items-center  justify-content-center p-5 ">
                <div className="col-md-4 mb-5">
                    <h1 >Explainer Video</h1>
                    <h1 >For the Course</h1>
                    <p> site amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>

                    <input type="button" className="btn fw-bolder p-2  btn-outline-light my-2 " style={{backgroundColor: "#013571"}} value="    Register   "/>

                </div>
                <div className="col-md-7">
                    <img
                        src="/img/place_your_image_here_dou.png" height={490}
                        className="d-block mx-auto me-5 mt-5"
                        alt="Image 1"
                    />
                </div>
            </div>

            <h1 className="text-center pb-3 fw-semibold display-4">Related Course</h1>

            <div className="d-flex justify-content-center ms-5 ">
            <div className="w-75 ">

            <Swiper className="mb-5 d-block "

                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide className="">

                    <PersonCard name={"Out OF Box"} imageUrl="/img/otb1_png.png"></PersonCard>
                </SwiperSlide>
                <SwiperSlide>

                    <PersonCard name={"Cource 1"} imageUrl="/img/otb1_png.png"></PersonCard>
                </SwiperSlide>
                <SwiperSlide>

                    <PersonCard name={"Course 2"} imageUrl="/img/otb1_png.png"></PersonCard>
                </SwiperSlide>

                <SwiperSlide>

                    <PersonCard name={"Id 3"} imageUrl="/img/otb1_png.png"></PersonCard>
                </SwiperSlide>


            </Swiper>

        </div>

            </div>
        </div>
    )

        ;

}