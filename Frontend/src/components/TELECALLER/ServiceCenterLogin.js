import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import { useState } from "react";
import { Navigationbar } from "../Navigationbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './ServiceCenterLogin.css';
import image8 from './Image8.jpg';
import axios from "axios";

export default function ServiceCenterLogin() {
    const [telecallerData, setTelecallerData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({ errorData: null, isError: false });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setTelecallerData({ ...telecallerData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!telecallerData.email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!telecallerData.password.trim()) {
            toast.error("Password is required");
            return;
        }

        try {
            // Make a backend API request to validate the login credentials
            const response = await axios.get(`http://localhost:8080/employee/login/${telecallerData.email}/${telecallerData.password}`);
            const data = response.data.toString();
            console.log(data);
            console.log(response);

            if (data === 'true') {
                // Successful login, navigate to the home page
                navigate('/ServiceCenterHome');
            } else {
                // Display an error message to the user
                toast.error("Enter valid credentials"); // You might want to show this in a more user-friendly way
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <div className="background-Image4">
            <Container>
                <Navigationbar />
                <Row>
                    <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                        <Card className="shadow p-4">
                            <CardBody>
                                <h4 className="mb-3">Telecaller Login</h4>
                                <Form onSubmit={handleSubmit} className="mb-3">
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={telecallerData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                name="password"
                                                value={telecallerData.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Container className="mb-2">
                                        <Button variant="success" type="submit">
                                            Login
                                        </Button>
                                        {/* <a href="/ServiceCenterRegsitration" className="ml-5 px-5">Register Now..</a> */}
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
}