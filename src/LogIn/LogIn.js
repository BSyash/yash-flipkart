import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Formik, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import axios from 'axios';

import { useCookies } from 'react-cookie';


const LogIn = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['logInCookie']);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const initialvalue = {
        email: '',
        password: ''
    }
    let validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('userName is Required'),
        password: Yup.string().min(8).max(16).required('password is required')

    });
    const onsubmit = async (data) => {
        if (data) {
            toggle()
            // console.log(data);

        }
        const resp = await axios.get('https://reqres.in/api/login')
        

        // const resp = await axios.post('https://reqres.in/api/login', data)
        // resp?.data?.token ? setCookie('logInCookie', data) : alert('fail')
        // console.log('resp ',resp?.data?.token);

    }

    return (
        <>
            <Button color="white" onClick={toggle}>Log In</Button>
            <Modal isOpen={modal} toggle={toggle}  >
                <ModalHeader toggle={toggle}>Log In</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={initialvalue}
                        validationSchema={validationSchema}
                        onSubmit={onsubmit}
                    >
                        {
                            props => <Form >

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input name='email' type="email" className="form-control" id="email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} />
                                    <div className='errorMsg'><ErrorMessage name="email" /></div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input name='password' type="password" className="form-control" id="password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} />
                                    <div className='errorMsg'><ErrorMessage name="password" /></div>
                                </div>
                                <ModalFooter>
                                    <Button type="submit" color="primary" onClick={() => onsubmit()}>Log In</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        }
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default LogIn
