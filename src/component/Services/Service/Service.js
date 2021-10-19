import { Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
    const { name, img, time, call } = service


    return (
        <Col>
            <Card style={{ border: '1px solid tomato' }}>
                <Card.Img style={{ height: '170px', objectFit: 'cover' }} variant="top" src={img} />
                <Card.Body className="bg-info">
                    <h2 className="text-warning">{name}</h2>
                    <h4 className="">Time:-{time}</h4>
                    <h3 className="text-light">Call:-{call}</h3>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
