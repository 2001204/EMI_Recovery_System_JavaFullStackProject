import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, CardBody } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigationbar } from "../Navigationbar";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import './BankRegistration.css';
import image14 from './Image14.png';

export default function BankRegistration() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    bankname: Yup.string().required('Bank name is required!'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const [bankData, setBankData] = useState({
    id: "",
    bankname: "",
    bpersonfirstName: "",
    bpersonlastName: "",
    email: "",
    password: ""
  });

  const [adminData, setid] = useState({
    id: ""

  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBankData({ ...bankData, [name]: value });
    setid({ ...adminData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(bankData, { abortEarly: false });
      console.log(bankData);
      // Assuming `adminData.id` contains the admin ID
      const response = await axios.post(`http://localhost:8080/banks/${adminData.id}`, bankData);
      console.log(response.data);
      toast.success("Registration Successful");
      navigate('/BankLogin');
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = {};
        error.inner.forEach(err => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      } else {
        console.error("Error registering bank:", error);
        toast.error("Registration Failed");
      }
    }
  };


  return (
    <div className="background-Image3">
      <Container>
        <Navigationbar />
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className="mt-4">
            <Card className="shadow p-4">
              <CardBody>
                <h4 className="mb-3">😃Bank Registration</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="bankname">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter bank name"
                      name="bankname"
                      onChange={handleChange}

                    />
                  </Form.Group>
                  {/* //{formErrors.bankname && <p className="text-danger">{formErrors.id}</p>} */}
                  <Form.Group className="mb-3" controlId="id">
                    <Form.Label>id</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enterid"
                      name="id"
                      onChange={handleChange}
                      value={adminData.id}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="bpersonfirstName">
                    <Form.Label>Bank Person First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="bpersonfirstName"
                      onChange={handleChange}
                      value={bankData.bpersonfirstName}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="bpersonlastName">
                    <Form.Label>Bank Person Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="bpersonlastName"
                      onChange={handleChange}
                      value={bankData.bpersonlastName}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      value={bankData.email}
                    />
                    {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={bankData.password}
                    />
                    {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                  </Form.Group>
                  <Container className="text-center">
                    <Button variant="success" type="submit">
                      Register
                    </Button>
                  </Container>
                  <Link to="/BankLogin">
                    <Container className="text-center mt-3">
                      {/* <Button variant="success" type="submit" >
                        Register with phone
                      </Button> */}
                    </Container>
                  </Link>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}
