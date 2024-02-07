import React, {useState} from 'react';
import {Pagination, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/swiper-bundle.css"

 const PersonCard = ({name, imageUrl}) => {
    return (
        <div className="d-flex justify-content-center align-items-center rounded-3 bg-white"
             style={{border: "2px #1E1E1E solid", height: "350px", width: "300px"}}>
            <div className="text-center">
                <img className="rounded-circle mb-3" src={imageUrl} alt="Person" width="150" height="150"/>
                <p className="h5">{name}</p>
                <p>Designation</p>
            </div>
        </div>
    );
};
const Slider = () => {

    return (
        <>


            <div className="text-center h1 m-5">

                Meet Our Team
            </div>

            <div className="row justify-content-center ">
            <div className="w-75 d-flex justify-content-center">

                <div>
            <Swiper className="mb-5 d-block "

                //     autoplay={{
                //         delay: 500,
                //         disableOnInteraction: false,
                //     }}
                // spaceBetween={0}
                // slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide className="">

                    <PersonCard name={"Member Name"} imageUrl="/img/ellipse_2.png"></PersonCard>
                </SwiperSlide>
                <SwiperSlide>

                    <PersonCard name={"Member Name"} imageUrl="/img/ellipse_2.png"></PersonCard>
                </SwiperSlide>
                <SwiperSlide>

                    <PersonCard name={"Member Name"} imageUrl="/img/ellipse_2.png"></PersonCard>
                </SwiperSlide>

  <SwiperSlide>

                    <PersonCard name={"Member Name"} imageUrl="/img/ellipse_2.png"></PersonCard>
                </SwiperSlide>


            </Swiper>
                </div>

            </div>
            </div>

            <div className="d-flex align-items-center  justify-content-center ">
                <div className="col-md-4 mb-5">
                    <h1 >Our Mission</h1>
                    <h6 className="my-3">Lorem ipsum dolor</h6>
                    <p> site amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                </div>
                <div className="col-md-7">
                    <img
                        src="/img/place_your_image_here_dou.png" height={490}
                        className="d-block mx-auto me-5 mt-5"
                        alt="Image 1"
                    />
                </div>
            </div>

            );

        </>);

};

export default Slider;

