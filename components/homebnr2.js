import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import "./homebnr2.module.css"

const CarouselRow2 = () => {
    return (
        <div className="container-fluid pb-5 text-white" style={{backgroundColor: "#013571"}}>

        <Container>
            <Row>
                <Col md={12}>
                    <rgxz>
                    <Carousel controls={false}  pause={false}>
                        <Carousel.Item>

                                <div className="d-flex align-items-center">
                                    <div className="col-md-5">
                                        <h1>Look Out For Our</h1>
                                        <h1>Latest News & Events</h1>
                                        <h5 className="mt-5">Lorem ipsum dolor</h5>
                                        <p> sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn btn-outline-light text-white  px-5 rounded-0" style={{backgroundColor:"#013571"}}>Go Next</div>
                                    </div>
                                    <div className="col-md-7">
                                        <img
                                            src="/img/place_your_image_here_dou_5.jpg" height={500}
                                            className="d-block mx-auto me-5 mt-5"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                        </Carousel.Item>  <Carousel.Item>

                                <div className="d-flex align-items-center">
                                    <div className="col-md-5">
                                        <h1>Look Out For Our</h1>
                                        <h1>Latest News & Events</h1>
                                        <h5 className="mt-5">Lorem ipsum dolor</h5>
                                        <p> sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn btn-outline-light text-white  px-5 rounded-0" style={{backgroundColor:"#013571"}}>Go Next</div>
                                    </div>
                                    <div className="col-md-7">
                                        <img
                                            src="/img/place_your_image_here_dou.png" height={500}
                                            className="d-block mx-auto me-5 mt-5"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                        </Carousel.Item>  <Carousel.Item>

                                <div className="d-flex align-items-center">
                                    <div className="col-md-5">
                                        <h1>Look Out For Our</h1>
                                        <h1>Latest News & Events</h1>
                                        <h5 className="mt-5">Lorem ipsum dolor</h5>
                                        <p> sit amet, consectetur adipisicing elit. Accusantium adipisci atque beatae blanditiis, debitis eius enim fugit illo, nihil quae quasi qui quo reprehenderit sequi ut velit veritatis. Commodi, nisi?</p>
                                    <div className="btn btn-outline-light text-white  px-5 rounded-0" style={{backgroundColor:"#013571"}}>Go Next</div>
                                    </div>
                                    <div className="col-md-7">
                                        <img
                                            src="/img/place_your_image_here_dou_3.jpg" height={500}
                                            className="d-block mx-auto me-5 mt-5"
                                            alt="Image 1"
                                        />
                                    </div>
                                </div>
                        </Carousel.Item>


                    </Carousel></rgxz>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default CarouselRow2;
