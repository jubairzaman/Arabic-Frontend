import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Part6 = () => {
    return (
        <div>
            <section className='container profile  ms5 dn1'>
                <div className='mar1'>
                    <span className='butn butn-1 '>
                        <input type='checkbox' name='' id='switch'></input>
                        <label for='switch'></label>

                    </span>
                </div>



                <Row xs={1} md={3} className="g-4 mt-5 ">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <div class="card">
                                <div class="card_img">
                                    <img src="https://media.istockphoto.com/photos/horizontal-portrait-of-young-smiling-arab-man-picture-id492786318?k=20&m=492786318&s=612x612&w=0&h=vHaDy0xhVCKCs_YXhuhMuSD6dNVE2DIXPAJYc3zKmD8=" alt="user-image"></img>
                                </div>
                                <div class="card_info">
                                    <h2 className='fnt title'>الدكتور عماد النتشة</h2>
                                    <p className=' container mx-auto chlim fnt'>
                                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوملوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم

                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

        </div>
    );
};

export default Part6;