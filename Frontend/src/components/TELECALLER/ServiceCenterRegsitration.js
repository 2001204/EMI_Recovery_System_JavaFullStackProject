import React, { useState } from "react";
import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export default function ServiceCenterRegistration() {
  const [telecallerData, setTelecallerData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: ""
  
  });

  const [adminData, setAdminData] = useState({
    id: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
   
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTelecallerData({ ...telecallerData, [name]: value });
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(telecallerData, { abortEarly: false });
      console.log("Sending data:", telecallerData); // Log the data being sent
      const response = await axios.post(`http://localhost:8080/employee/${adminData.id}`, telecallerData);
      console.log(response.data);
      toast.success("Registration Successful");
      navigate('/TelecallerList'); // Navigate to the TelecallerList component after successful registration
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = {};
        error.inner.forEach(err => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      } else {
        console.error("Error registering telecaller:", error);
        toast.error("Registration Failed");
      }
    }
  };

  return (
    <div className="background-Image8">
      <Container>
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className="mt-4">
            <Card className="shadow p-4">
              <CardBody>
                <h4 className="mb-3">😃Telecaller Registration</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Admin ID</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter admin ID"
                      name="id"
                      onChange={handleChange}
                      value={adminData.id}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="firstname"
                      onChange={handleChange}
                      value={telecallerData.firstname}
                    />
                    {formErrors.firstname && <p className="text-danger">{formErrors.firstname}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="lastname"
                      onChange={handleChange}
                      value={telecallerData.lastname}
                    />
                    {formErrors.lastname && <p className="text-danger">{formErrors.lastname}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      value={telecallerData.email}
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
                      value={telecallerData.password}
                    />
                    {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="telecaller_name">
                    <Form.Label>Telecaller Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter telecaller name"
                      name="telecaller_name"
                      onChange={handleChange}
                      value={telecallerData.telecaller_name}
                    />
                    {formErrors.telecaller_name && <p className="text-danger">{formErrors.telecaller_name}</p>}
                  </Form.Group> */}
                  <Container className="text-center">
                    <Button variant="success" type="submit">
                      Register
                    </Button>
                  </Container>
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
