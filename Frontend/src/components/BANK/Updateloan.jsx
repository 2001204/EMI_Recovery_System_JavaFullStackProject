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

export function Updateloan() {
  const { id: customerId } = useParams();
  const [isSubmitted, setSubmitted] = useState(false);
  const [loanData, setLoanData] = useState({
   
    emi: 0,
    totalinstalment: 0,
    paidinstalment: 0,
    remaininstalment: 0
    // startDate: " ",
    // endDate: " "
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.patch(`http://localhost:8080/loan/${customerId}`, loanData);

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
    setLoanData({ ...loanData, [e.target.name]: e.target.value });
  };

  const populateData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/loan/${customerId}`);
      console.log("Response from server:", response.data);
      setLoanData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    populateData();
  }, [customerId]);

  return (
    <Container className="mt-3">
       
      <h1>Update Loan Details</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Loan Details Updated Successfully!</Alert>
          ) : null}
        </Col>
      </Row>
      <div className="main-div">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalemi">
                <Form.Label column sm={2}>
                 EMI
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter emi"
                    onChange={handleChange}
                    name="state"
                    value={loanData.emi}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontaltotalinstalment">
                <Form.Label column sm={2}>
                totalinstalment
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter totalinstalment"
                    onChange={handleChange}
                    name="totalinstalment"
                    value={loanData.totalinstalment}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalpaidinstalment">
                <Form.Label column sm={2}>
                paidinstalment
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Enter paidinstalment"
                    onChange={handleChange}
                    name="paidinstalment"
                    value={loanData.paidinstalment}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalremaininstalment">
                <Form.Label column sm={2}>
                remaininstalment
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="number"
                    placeholder="Enter  remaininstalment"
                    onChange={handleChange}
                    name="remaininstalment"
                    value={loanData. remaininstalment}
                  />
                </Col>
              </Form.Group>
              {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCity">
                <Form.Label column sm={2}>
                  City
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    onChange={handleChange}
                    name="city"
                    value={loanData.city}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalTaluka">
                <Form.Label column sm={2}>
                  Taluka
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter taluka"
                    onChange={handleChange}
                    name="taluka"
                    value={loanData.taluka}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalLandmark">
                <Form.Label column sm={2}>
                  Landmark
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter landmark"
                    onChange={handleChange}
                    name="landmark"
                    value={loanData.landmark}
                  />
                </Col>
              </Form.Group> */}
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
export default Updateloan;