import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <img src="/assets/About_us_banner.jpg" alt="About_Us_Banner" className='w-75 mt-5' height={350} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h2 className='display-6 mb-2'>Who <b>We</b> Are</h2>
                        <hr className='w-50'/>
                        <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, in! Velit aspernatur, reiciendis quam ad rem voluptates consequuntur ratione tempora modi vitae reprehenderit voluptatibus dolorem adipisci commodi, esse atque laboriosam non eaque doloribus, ipsum nihil delectus aperiam in illum! Quisquam distinctio cumque blanditiis facere minus temporibus explicabo consequatur nam repellendus.</p>
                        <Button variant="btn btn-outline-dark me-2" >Get Started</Button>
                        <Button variant="btn btn-outline-dark me-2" >Contact Us</Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About