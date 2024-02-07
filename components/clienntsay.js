import {Carousel, Col, Container, Row} from "react-bootstrap";
import React from "react";


const ClientSay = () => {

    return (
        <Container className="pb-4">


            <Row style={{backgroundColor: "#013571", color: "white"}} className="rounded-5 pt-3 mt-5">
                <Col md={12}>
                    <Carousel controls={false} interval={3000} pause={false}>
                        <Carousel.Item>


                            <h1 className="text-center " style={{textDecoration: "underline"}}>What's Our Clients Saying
                                !</h1>
                            <div className="d-flex pb-5 ps-5">


                                <img className="img-thumbnail bg-transparent border-0"
                                     style={{width: "300px", height: "300px"}} src="/img/ellipse_2_2.png"/>

                                <div className="mt-5 ms-5">
                                    <h2 className="mt-2">Bob Rubinn</h2>
                                    <h6 className="mt-2">CA USA</h6>
                                    <p className="mt-3">

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus,
                                        facere libero maiores nam vel. A adipisci at doloribus, eius ipsa maxime non
                                        provident quam repellat! Assumenda cupiditate dolore dolorem et eveniet ex
                                        excepturi facere impedit iure laboriosam maxime nemo non odio
                                    </p>


                                </div>


                            </div>

                        </Carousel.Item><Carousel.Item>


                        <h1 className="text-center " style={{textDecoration: "underline"}}>What's Our Clients Saying
                            !</h1>
                        <div className="d-flex pb-5 ps-5">


                            <img className="img-thumbnail bg-transparent border-0"
                                 style={{width: "300px", height: "300px"}} src="/img/ellipse_3.png"/>

                            <div className="mt-5 ms-5">
                                <h2 className="mt-2">ABC Qwerty</h2>
                                <h6 className="mt-2">CA USA</h6>
                                <p className="mt-3">

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus,
                                    facere libero maiores nam vel. A adipisci at doloribus, eius ipsa maxime non
                                    provident quam repellat! Assumenda cupiditate dolore dolorem et eveniet ex excepturi
                                    facere impedit iure laboriosam maxime nemo non odio
                                </p>


                            </div>


                        </div>

                    </Carousel.Item><Carousel.Item>


                        <h1 className="text-center " style={{textDecoration: "underline"}}>What's Our Clients Saying
                            !</h1>
                        <div className="d-flex pb-5 ps-5">


                            <img className="img-thumbnail bg-transparent border-0"
                                 style={{width: "300px", height: "300px"}} src="/img/ellipse_2.png"/>

                            <div className="mt-5 ms-5">
                                <h2 className="mt-2">Raju Haldar</h2>
                                <h6 className="mt-2">WB INDIA</h6>
                                <p className="mt-3">

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus,
                                    facere libero maiores nam vel. A adipisci at doloribus, eius ipsa maxime non
                                    provident quam repellat! Assumenda cupiditate dolore dolorem et eveniet ex excepturi
                                    facere impedit iure laboriosam maxime nemo non odio
                                </p>


                            </div>


                        </div>

                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>


            <div className="row mt-5">
                <div className="col-6 ">

                    <h1 className="text-center"> Contact Us!</h1>
                    <div className="d-flex flex-column justify-content-center px-5 mx-5 ">
                        <input placeholder="First Name" className="mt-3 p-2 form-control"/>
                        <input placeholder="Last Name" className="mt-3 p-2 form-control"/>
                        <input placeholder="Email Subject" className="mt-3 p-2 form-control"/>
                        <textarea placeholder="Write Someting here ...." className="mt-3 p-2 form-control"
                                  style={{height: "200px"}}/>

                        <input type="button" className="btn fw-bolder px-5 rounded-0 btn-outline-light mt-5 "
                               style={{backgroundColor: "#013571"}} value=" Submit Email "/>

                    </div>


                </div>

                <img className="col-6" src="/img/place_your_image_here_dou_3.jpg"
                     style={{height: "530px", width: "auto"}}/>


            </div>

        </Container>
    );
}

export default ClientSay;