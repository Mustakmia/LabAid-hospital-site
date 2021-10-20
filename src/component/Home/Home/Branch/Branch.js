import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className=" py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className="text-warning pb-3 text-center">Our Branches </h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem', border: '3px solid tomato' }}>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/hospital-picture-id182172308?s=612x612" />
                            <Card.Body>
                                <h5 className="text-danger">Dinajpur Branch</h5>
                                <h6>Hazipara road,</h6>
                                <h6>Hanipur,Dinajpur</h6>
                                <h6>Call-01+468969</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{
                            width: '18rem', height: '20rem', border: '3px solid tomato'
                        }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                            <Card.Body>
                                <h5 className="text-danger">Rajshahi Branch</h5>
                                <h6>Rajbari road,</h6>
                                <h6>Chaddorhat,Rajshahi</h6>
                                <h6>Call-01+468968</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{
                            width: '18rem', height: '20rem', border: '3px solid tomato'
                        }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
                            <Card.Body>
                                <h5 className="text-danger">Dhaka Branch</h5>
                                <h6>Bonani road,</h6>
                                <h6>Bonani,Dhaka</h6>
                                <h6>Call-01+466898</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem', border: '3px solid tomato' }}>
                            <Card.Img className="h-70" variant="top" src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                            <Card.Body>
                                <h5 className="text-danger">Barishal Branch</h5>
                                <h6>Rajbari road,</h6>
                                <h6>Lalmati,Barishal</h6>
                                <h6>Call-01+468966</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem', border: '3px solid tomato' }}>
                            <Card.Img variant="top" src="https://media.istockphoto.com/photos/building-with-large-h-sign-for-hospital-picture-id1130389312?s=612x612" />
                            <Card.Body>
                                <h5 className="text-danger">Bogura Branch</h5>
                                <h6>Harunpur road,</h6>
                                <h6>Noyarhat,Bagura</h6>
                                <h6>Call-01+468964</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '20rem', border: '3px solid tomato' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
                            <Card.Body >
                                <h5 className="text-danger">Noakhali Branch</h5>
                                <h6>Modon road,</h6>
                                <h6>Mogbazar,Noakhali</h6>
                                <h6>Call-01+468962</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Branch;