import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, CardBody } from "react-bootstrap";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Navigationbar } from "../Navigationbar";
import { useNavigate } from "react-router-dom";

export default function AdminRegistration() {
  const [adminData, setAdminData] = useState({
    adminfirstname: "",
    adminlastname: "",
    agencyname: "",
    email: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData({ ...adminData, [name]: value });
    setFormErrors({}); // Clear previous form errors on change
  };

  const SubmitForm = (event) => {
    event.preventDefault();

    // Simple validation
    const errors = validate(adminData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log("Submitting Form with data:", adminData);

    axios.post("http://localhost:8080/admin", JSON.stringify(adminData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log("Response from backend:", response.data);
        alert("Register Successful");
        navigate('/Adminlogin');
      })
      .catch((error) => {
        console.error("Error fetching registration:", error);
        alert("Already Registered");
      });
  };

  const validate = (values) => {
    const errors = {};

    // Add validation rules here
    if (!values.adminfirstname.trim()) {
      errors.adminfirstname = "First Name is required";
    }

    if (!values.adminlastname.trim()) {
      errors.adminlastname = "Last Name is required";
    }

    if (!values.agencyname.trim()) {
      errors.agencyname = "Agency Name is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="background-Image11">
      <Container>
        <Navigationbar />
        <Row>
          <Col sm={{ span: 6, offset: 3 }} className="mt-4">
            <Card className="shadow p-4">
              <CardBody>
                <h4 className="mb-3">😃Admin Registration</h4>
                <Form onSubmit={SubmitForm}>
                  <Form.Group className="mb-3" controlId="adminfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="adminfirstname"
                      onChange={handleChange}
                      value={adminData.adminfirstname}
                    />
                    {formErrors.adminfirstname && <p className="text-danger">{formErrors.adminfirstname}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="adminlastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="adminlastname"
                      onChange={handleChange}
                      value={adminData.adminlastname}
                    />
                    {formErrors.adminlastname && <p className="text-danger">{formErrors.adminlastname}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="agencyname">
                    <Form.Label>Agency Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter agency name"
                      name="agencyname"
                      onChange={handleChange}
                      value={adminData.agencyname}
                    />
                    {formErrors.agencyname && <p className="text-danger">{formErrors.agencyname}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                      value={adminData.email}
                    />
                    {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                      value={adminData.password}
                    />
                    {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Register
                  </Button>
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
