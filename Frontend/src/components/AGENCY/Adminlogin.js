import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import { Navigationbar } from "../Navigationbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './AdminLogin.css';
import image11 from './image11.png';

export default function Adminlogin() {
    const navigate = useNavigate();

    const [adminData, setAdminData] = useState({
        email: "",
        password: ""
    });

    const [validationError, setValidationError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdminData({ ...adminData, [name]: value });
        setValidationError(""); // Clear previous validation error on change
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simple validation
        if (!adminData.email || !adminData.password) {
            setValidationError("Both email and password are required");
            return;
        }

        axios.get(`http://localhost:8080/admin/login/${adminData.email}/${adminData.password}`)
            .then(response => {
                console.log(response.data);
               var data = response.data.toString();
             
                if (data == 'true') {
                    navigate("/AdminPage");
                }else{
                    toast.error("Enter valid credentials"); 
                }
            })
            .catch(error => {
                console.error('Error fetching registration:', error)
                toast.error("Enter valid credentials");
                 
            });
    
    };

    return (
        <div className="background-image">
            <Navigationbar />
            <Container>
                <Row>
                    <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                        <Card className="shadow p-4">
                            <CardBody>
                                <h4 className="mb-3">👉Admin Login👈</h4>
                                <Form onSubmit={handleSubmit} className="mb-3">
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>🖊️Enter Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={adminData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>✏️Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter password"
                                                name="password"
                                                value={adminData.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                    {validationError && <p className="text-danger">{validationError}</p>}
                                    <Container className="mb-2">
                                        <Button variant="success" type="submit">
                                            Login
                                        </Button>
                                        <a href="/AdminRegistration" className="ml-5 px-5">Register Now..</a>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}