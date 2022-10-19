import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {IoPaperPlaneOutline} from 'react-icons/io5'

const Contact = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='mb-5'>
                <h5 className='fs-5 text-center mb-0'>Contact Us</h5>
                <h2 className='display-6 text-center mb-4'>Have Some <b>Question?</b></h2>
                <hr className='w-25 mx-auto' />
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="/assets/contact-us.jpg" alt="Contact_Us_Banner" className='w-75 mt-2' height={350} />
                </div>
                <div className='col-md-6'>
                    <Form action=''>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button variant="btn btn-outline-dark my-3" >Send Message <IoPaperPlaneOutline /></Button>
                    </Form>

                </div>

            </div>

        </div>
    )
}

export default Contact