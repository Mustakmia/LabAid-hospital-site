import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({ doctor }) => {
  const { name, img, Id, expert, department, time, call } = doctor

  const history = useHistory()
  const viewDetails = () => {
    history.push(`/details/${Id}`)
  }

  return (
    <Col>
      <Card style={{ border: '1px solid tomato' }}>
        <Card.Img style={{ height: '170px', objectFit: 'cover' }} variant="top" src={img} />
        <Card.Body className="bg-info">
          <h2>{name}</h2>
          <h4>Expert In:-{expert}</h4>
          <h4>Department:-{department}</h4>
          <h4>Time:-{time}</h4>
          <h3>Call:-{call}</h3>
        </Card.Body>
        <Button onClick={viewDetails} className="btn btn-warning">More Details</Button>
      </Card>
    </Col>
  );
};

export default Doctor;
