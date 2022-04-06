import React from 'react';
import logo from '../../../../Images/Group 36121.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const TopBanner = () => {
    return (
        <div className='position-relative'>
            <div className='updiv position-absolute top-0 start-0 w-100'>

            </div>
            <section className='bgimg '>
                <div className='bgimg2'>


                    <div >

                        <img className='logo' src={logo}></img>
                        <h1 className='text1 text-center'>أول قاعدة بيانات عربية مرئية</h1>
                        <p className=' w-50 mx-auto text-center text-white fnt'>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور </p>

                        <button className='button1 text-center text-white'> حمل البيانات</button>

                    </div>
                    <button className='button2 text-white'> <FontAwesomeIcon style={{ width: '51px', height: '49px', marginInlineStart: '300px' }} icon={faGithub}></FontAwesomeIcon></button>


                </div>
                <div className='mar2'>
                    <div className='eclips' >

                    </div>
                </div>




            </section>


        </div>
    );
};

export default TopBanner;