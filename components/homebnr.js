import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const CarouselRow = () => {
    return (

        <Container>
            <Row>
                <Col md={12}>
                    <Carousel controls={false} interval={4000}  pause={false}>
                        <Carousel.Item>

                                <div className="d-lg-flex justify-content-evenly align-items-center my-3">



                                    <div className=" d-flex justify-content-center">
                                        <img
                                            src="/img/otb1_png.png"  height={400} width={400}
                                            className="object-fit-scale"
                                            alt="Image 1"
                                        />

                                    </div>

<div className="d-none d-lg-block w-25"></div>
                                    <div className="mb-5 ">
                                        <h1>Title Text</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                        <div className="btn text-white fw-bold px-5 rounded-0 btn-primary" >Buy Now</div>
                                    </div>



                                </div>
                        </Carousel.Item>  <Carousel.Item>

                                <div className="d-lg-flex justify-content-evenly align-items-center my-3">



                                    <div className=" d-flex justify-content-center">
                                        <img
                                            src="/img/otb1_png.png"  height={400} width={400}
                                            className="object-fit-scale"
                                            alt="Image 1"
                                        />

                                    </div>

<div className="d-none d-lg-block w-25"></div>
                                    <div className="mb-5 ">
                                        <h1>Title Text</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                        <div className="btn text-white fw-bold px-5 rounded-0 btn-primary">Buy Now</div>
                                    </div>



                                </div>
                        </Carousel.Item>  <Carousel.Item>

                                <div className="d-lg-flex justify-content-evenly align-items-center my-3">



                                    <div className=" d-flex justify-content-center">
                                        <img
                                            src="/img/otb1_png.png"  height={400} width={400}
                                            className="object-fit-scale"
                                            alt="Image 1"
                                        />

                                    </div>

<div className="d-none d-lg-block w-25"></div>
                                    <div className="mb-5 ">
                                        <h1>Title Text</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                        <div className="btn text-white fw-bold px-5 rounded-0 " >Buy Now</div>
                                    </div>



                                </div>
                        </Carousel.Item>  <Carousel.Item>

                                <div className="d-lg-flex justify-content-evenly align-items-center my-3">



                                    <div className=" d-flex justify-content-center">
                                        <img
                                            src="/img/otb1_png.png"  height={400} width={400}
                                            className="object-fit-scale"
                                            alt="Image 1"
                                        />

                                    </div>

<div className="d-none d-lg-block w-25"></div>
                                    <div className="mb-5 ">
                                        <h1>Title Text</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                        <div className="btn text-white fw-bold px-5 rounded-0" style={{backgroundColor:"#013571"}}>Buy Now</div>
                                    </div>



                                </div>
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default CarouselRow;
