import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import { useParams } from "react-router-dom";

export function AssignWork() {
  const { empid: initialEmpId, customerid: initialCustomerId } = useParams();
  const [empid, setEmpId] = useState(initialEmpId || '');
  const [customerid, setCustomerId] = useState(initialCustomerId || '');
  const [isSubmitted, setSubmitted] = useState(false);

  const assignEmpIdToCustomer = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/admin/${customerid}/${empid}`);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
      console.log("Data updated from frontend");
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  return (
    <Container className="mt-3">
      <h1>Assign Employee ID to Customer</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Employee ID Assigned Successfully!</Alert>
          ) : null}
        </Col>
      </Row>
      <div className="main-div">
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formCustomerId">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Customer ID"
                  value={customerid}
                  onChange={(e) => setCustomerId(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmpId">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Employee ID"
                  value={empid}
                  onChange={(e) => setEmpId(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={assignEmpIdToCustomer}>
              Assign Employee ID to Customer
            </Button>{" "}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AssignWork;