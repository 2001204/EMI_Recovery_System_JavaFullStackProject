import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import { useState } from "react";
import { Navigationbar } from "../Navigationbar";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './CustomerLogin.css';
import axios from "axios";
import image12 from './Image12.jpg';

export default function BankLogin() {
    const [bankData, setBankData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setBankData({ ...bankData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!bankData.email.trim()) {
            toast.error("Email is required");
            return;
        }

        if (!bankData.password.trim()) {
            toast.error("Password is required");
            return;
        }

        try {
            // Make a backend API request to validate the login credentials
            const response = await axios.get(`http://localhost:8080/banks/login/${bankData.email}/${bankData.password}`);
            const data = response.data.toString();
            console.log(data);
            console.log(response);

            if (data == 'true') {
                // Successful login, navigate to the home page
                navigate('/UserPage');
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
        <div className="background-Image12">
            <Container>
                <Navigationbar />
                <Row>
                    <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                        <Card className="shadow p-4">
                            <CardBody>
                                <h4 className="mb-3">Bank Login</h4>
                                <Form onSubmit={handleSubmit} className="mb-3">
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={bankData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                name="password"
                                                value={bankData.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Container className="mb-2">
                                        <Button variant="success" type="submit">
                                            Login
                                        </Button>
                                        <Link to="/BankRegistration" className="ml-5 px-5">Register Now..</Link>
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
