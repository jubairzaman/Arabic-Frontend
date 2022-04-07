import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../../Images/Visual data-rafiki.svg'

const Part2 = () => {
    return (
        <div >

            <section className='bgimg3'>
                <div className='bgimg4 d-flex align-items-center'>

                    <div className='container' >
                        <Container>
                            <Row >
                                <Col className='mt-3' xs={12} md={6}>
                                    <img className=' img-fluid' src={img}></img>
                                </Col>
                                <Col className='mt-5' xs={12} md={6}>
                                    <h2 className='text2 container'>وصف المشروع</h2>
                                    <p className='fnt container '>
                                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوملوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .....
                                    </p>
                                </Col>
                            </Row>
                        </Container>

                    </div>

                </div>

            </section>





        </div>
    );
};

export default Part2;