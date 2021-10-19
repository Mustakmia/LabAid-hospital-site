import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="bg-primary py-5">
            <Container>
                <h1 style={{ fontSize: "3rem" }} className="text-warning pb-3 text-center">Our Branches </h1>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Dhaka Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Uttara,Dhaka</h6>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Kumilla Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Kocukhet,Kumilla</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Pabna Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Faluda,Pabna</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Dinajpur Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Rampur,Dinajpur</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Mymensingh Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Kotoali,Mymensingh</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <Card.Body style={{ border: '3px solid tomato' }}>
                                <Card.Title style={{ color: '#4e0fe1' }}>Rajshahi Branch</Card.Title>
                                <h6>House No:-12,</h6>
                                <h6>Road No:-14,</h6>
                                <h6>Chapay,Rajshahi</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Branch;