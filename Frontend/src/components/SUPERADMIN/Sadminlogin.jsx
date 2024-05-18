import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import { Navigationbar } from "../Navigationbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SuperadminLogin() {
    const [superadminData, setSuperadminData] = useState({
        email: "",
        password: ""
    });

    let [error, setError] = useState({ errorData: null, isError: false });

    const navigate = useNavigate();

    const handleChange = (event, property) => {
        setSuperadminData({ ...superadminData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/ServiceCenterHome');
        
        if (superadminData.email === undefined || superadminData.email.trim() === '') {
            toast.error("Email required");
            return;
        }

        if (superadminData.password === undefined || superadminData.password.trim() === '') {
            toast.error("Password required");
            return;
        }
    }

    return (
        <Container>
            <Navigationbar />
            <Row>
                <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">Superadmin Login</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Enter Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={superadminData.email}
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
                                            value={superadminData.password}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>
                                <Container className="mb-2">
                                    <Button variant="success" type="submit" onClick={handleSubmit}>
                                        Login 
                                    </Button>
                                    <a href="/ServiceCenterRegistration" className="ml-5 px-5">Register Now..</a>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
