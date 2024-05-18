import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Updatecustomer() {
  const { id: customerId } = useParams();
  const [isSubmitted, setSubmitted] = useState(false);
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    feedback: '',
    status: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.patch(`http://localhost:8080/employee/${customerId}`, {
        firstName: customerData.firstname,
  lastName: customerData.lastname,
  feedback: customerData.feedback,
  status: customerData.status,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
      console.log("Data updated from frontend");
    } catch (error) {
      console.log("Error updating data:", error);
    }
  };

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const populateData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/customers/${customerId}`);
      console.log("Response from server:", response.data);
      setCustomerData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    populateData();
  }, [customerId]);

  return (
    <Container className="mt-3">
      <h1>Update Customer Data</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Customer Updated Successfully!</Alert>
          ) : null}
        </Col>
      </Row>
      <div className="main-div">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              {/* ... (existing code) ... */}
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalFirstname"
              >
                <Form.Label column sm={2}>
                  First_Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter first Name"
                    onChange={handleChange}
                    name="firstname"
                    value={customerData.firstname}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalLastname"
              >
                <Form.Label column sm={2}>
                  Last Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter last  Name"
                    onChange={handleChange}
                    name="lastname"
                    value={customerData.lastname}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalFeedback"
              >
                <Form.Label column sm={2}>
                  Feedback
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter feedback"
                    onChange={handleChange}
                    name="feedback"
                    value={customerData.feedback}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalStatus"
              >
                <Form.Label column sm={2}>
                  Status
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter status"
                    onChange={handleChange}
                    name="status"
                    value={customerData.status}
                  />
                </Col>
              </Form.Group>
              <Button variant="secondary" type="submit">
                UPDATE
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}


export default Updatecustomer;