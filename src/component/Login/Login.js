import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleEmail, handlePass, error, loggIn } = useAuth()
    return (
        <Container>
            <div className="w-50 mx-auto">
                <div>
                    <img className="w-50 h-50 mt-5" src="https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="py-5">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onClick={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onClick={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <button onClick={loggIn} className="bg-warning rounded py-2 px-3 border-0">Login</button>
                        <Link to="/sign">New user?</Link>
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;