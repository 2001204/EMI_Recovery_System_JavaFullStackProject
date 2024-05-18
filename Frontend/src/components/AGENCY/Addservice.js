//import React, { useEffect, useState } from "react";
////import { useHistory } from "react-router-dom";
//
//import {
//  Row,
//  Container,
//  Col,
//  Card,
//  CardBody,
//  FormControl,
//  Form,
//  Button,
//} from "react-bootstrap";
//import AdminNavigationbar from "./AdminNavigationbar";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
//
//export default function Addservice () {
//  const navigate=useNavigate();
//
//
//
//
//const [formData, setFormData] = useState({
//  name: "",
//  serviceDesc: "",
//  price: "",
//  //adminId: ""
//  admin :{
//    id : ""
//  }
//});
//
//useEffect(() => {
//  const adminId = sessionStorage.getItem('adminId');
//  //let adminId = localStorage.getItem('adminId');
//  // setFormData({ ...formData, id: adminId });
//  setFormData({ ...formData ,admin:{id: adminId}});
//}, []); // The empty dependency array ensures that this effect runs only once when the component mounts
//
//const handleInputChange = (event) => {
//  setFormData({ ...formData, [event.target.name]: event.target.value });
//};
//
//const handleSubmit = (event) => {
//  event.preventDefault();
//  console.log(formData);
//
//  axios.post('http://localhost:8080/admin/addService',formData)
//  .then(response => {
//    setFormData(response.data);
//          alert("Service Added");
//          navigate('/AdminPage')
//
//  }
//  )
//  .catch(error => {
//      console.error('Error fetching registration:', error)
//      alert("Error while Adding Service");
//  });
//
// 
//};
//
//
//
//  return (
//    <Container>
//    <AdminNavigationbar/>
//      <Row>
//        <Col sm={{ span: 6, offset: 3 }} className="mt-4">
//          <Card className="shadow p-4">
//            <CardBody>
//              <h3 className="text-center">👉Add Services👈</h3>
//
//              <Form onSubmit={handleSubmit} className="mb-3">
//                
//                <Form.Group
//                  className="mb-3"
//                  controlId="exampleForm.ControlInput2"
//                >
//                  <Form.Label>Service Name</Form.Label>
//                  <Form.Control
//                    type="text"
//                    placeholder="Service Name"
//                    name="name"
//                    value={formData.name}
//                    onChange={handleInputChange}
//                    required
//                  />
//                </Form.Group>
//
//                <Form.Group
//                  className="mb-3"
//                  controlId="exampleForm.ControlInput3"
//                >
//                  <Form.Label>Service Description</Form.Label>
//                  <Form.Control
//                    as="textarea"
//                    rows={4}
//                    placeholder="Service Description"
//                    name="serviceDesc"
//                    value={formData.serviceDesc}
//                    onChange={handleInputChange}
//                    required
//                  />
//                </Form.Group>
//
//                <Form.Group className="mb-2">
//                  <Form.Label>Service Cost</Form.Label>
//                  <FormControl
//                    type="number"
//                    placeholder="Price of Service"
//                    name="price"
//                    value={formData.price}
//                    onChange={handleInputChange}
//                    required
//                  />
//                </Form.Group>
//
//                <p className="text-center">😊Thank you for Connecting With Us</p>
//
//                <Container className="text-center">
//                  <Button variant="success" type="submit">
//                    Submit
//                  </Button>
//                </Container>
//              </Form>
//            </CardBody>
//          </Card>
//        </Col>
//      </Row>
//    </Container>
//  );
//}