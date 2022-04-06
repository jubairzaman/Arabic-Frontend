import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Fotter = () => {
    return (
        <div>
            <section className='bgimg11 '>
                <div className='bgimg12 d-flex align-items-center'>
                    <Container >

                        <Row >
                            <Col sm>

                                <div className=' mt-3 d-flex align-items-center justify-content-center'>
                                    <div className='msg '>

                                    </div>

                                </div>




                            </Col>
                            <Col sm>


                                <div className=' mt-5 d-flex align-items-center justify-content-center'>
                                    <p className='fnt text-center text-white d-flex align-items-center '>جميع الحقوق محفوظة © 2021</p>

                                </div>



                            </Col>
                            <Col sm className='mx-auto'>
                                <div className='  d-flex align-items-center justify-content-center'>
                                    <div className='lgo'>

                                    </div>

                                </div>


                            </Col>
                        </Row>
                    </Container>

                </div>

            </section>

        </div>
    );
};

export default Fotter;