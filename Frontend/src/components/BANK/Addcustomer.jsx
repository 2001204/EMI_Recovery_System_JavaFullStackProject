import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, CardBody, Card } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UserNavigationbar from './UserNavigationbar';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';

function Addcustomer() {
    const navigate = useNavigate();

    const [customerData, setCustomerData] = useState({
        firstName: '',
        lastName: ''
    });

    const [bankData, setid] = useState({
        id: ''
    });

    const [loanData, setLoanData] = useState({
        emi: 0,
        loannumber: "",
        totalinstalment: 0,
        paidinstalment: 0,
        remaininginstalment: 0,
        startDate: new Date(),
        endDate: new Date()
    });

    const [addressData, setAddressData] = useState({
        state: '',
        streetname: '',
        postalcode: 0,
        mobilenumber: 0,
        city: '',
        taluka: '',
        landmark: ''
    });

    const [formErrors, setFormErrors] = useState({});
    //const navigate = useNavigate();

    const handleChange = (event, entity) => {
        const { name, value } = event.target;
        setid({ ...bankData, [name]: value });

        switch (entity) {
            case 'customer':
                setCustomerData({
                    ...customerData,
                    [name]: value
                });
                break;
            case 'loan':
                setLoanData({
                    ...loanData,
                    [name]: value
                });
                break;
            case 'address':
                setAddressData({
                    ...addressData,
                    [name]: value
                });
                break;
            case 'id':
                setid({
                    ...bankData,
                    [name]: value
                });
                break;
            default:
                break;
        }
    };

    const handleDateChange = (date, name) => {
        setLoanData({
            ...loanData,
            [name]: date
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            axios.post(`http://localhost:8080/customers/${bankData.id}`, { customer: customerData, loan: loanData, add: addressData, id: bankData })
                .then(response => {
                    console.log(response.data);
                    toast.success('Customer created successfully!');
                    navigate('/Alluser');
                })
                .catch(error => {
                    console.error('Error creating customer:', error);
                    if (error.response) {
                        console.error('Response data:', error.response.data);
                        console.error('Status code:', error.response.status);
                        console.error('Headers:', error.response.headers);
                    }
                    toast.error('Error creating customer');
                });
        }
    };

    const validate = () => {
        const schema = Yup.object().shape({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            mobilenumber: Yup.number().required('Mobile Number is required'),
            loannumber: Yup.string().required('Loan Number is required'),
            emi: Yup.number().required('EMI is required'),
            totalinstalment: Yup.number().required('Total Instalment is required'),
            paidinstalment: Yup.number().required('Paid Instalment is required'),
            remaininginstalment: Yup.number().required('Remaining Instalment is required'),
            streetname: Yup.string().required('Street Name is required'),
            postalcode: Yup.number().required('Postal Code is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            taluka: Yup.string().required('Taluka is required'),
            landmark: Yup.string().required('Landmark is required')
        });

        try {
            schema.validateSync({ ...customerData, ...loanData, ...addressData, ...bankData }, { abortEarly: false });
            return {};
        } catch (error) {
            const errors = {};
            error.inner.forEach(err => {
                errors[err.path] = err.message;
            });
            return errors;
        }
    };

    return (
        <Container>
            {/* <UserNavigationbar /> */}
            <Row>
                <Col sm={{ span: 6, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">Customer Form</h4>
                            <Form onSubmit={handleSubmit}>
                                {/* Customer Information */}
                                <Form.Group className="mb-3" controlId="formBasicFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        name="firstName"
                                        onChange={(event) => handleChange(event, 'customer')}
                                        value={customerData.firstName}
                                    />
                                    {formErrors.firstName && <span className="text-danger">{formErrors.firstName}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="id">
                                    <Form.Label>id</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter id"
                                        name="id"
                                        onChange={handleChange}
                                        value={bankData.id}
                                    />
                                    {formErrors.id && <span className="text-danger">{formErrors.id}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        onChange={(event) => handleChange(event, 'customer')}
                                        value={customerData.lastName}
                                    />
                                    {formErrors.lastName && <span className="text-danger">{formErrors.lastName}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Mobile Number"
                                        name="mobilenumber"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.mobilenumber}
                                        required
                                    />
                                    {formErrors.mobilenumber && <span className="text-danger">{formErrors.mobilenumber}</span>}
                                </Form.Group>

                                {/* Loan Information */}
                                <Form.Group className="mb-3" controlId="formloannumber">
                                    <Form.Label>Loan number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Loan Number"
                                        name="loannumber"
                                        onChange={(event) => handleChange(event, 'loan')} // Change 'loannumber' to 'loan'
                                        value={loanData.loannumber}
                                    />
                                    {formErrors.loannumber && <span className="text-danger">{formErrors.loannumber}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEMI">
                                    <Form.Label>EMI</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter EMI"
                                        name="emi"
                                        onChange={(event) => handleChange(event, 'loan')}
                                        value={loanData.emi}
                                    />
                                    {formErrors.emi && <span className="text-danger">{formErrors.emi}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicTotalInstalment">
                                    <Form.Label>Total Instalment</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Total Instalment"
                                        name="totalinstalment"
                                        onChange={(event) => handleChange(event, 'loan')}
                                        value={loanData.totalinstalment}
                                    />
                                    {formErrors.totalinstalment && <span className="text-danger">{formErrors.totalinstalment}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicpaidinstallemnt">
                                    <Form.Label>Paid Instalment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Paid Instalment"
                                        name="paidinstalment"
                                        onChange={(event) => handleChange(event, 'loan')}
                                        value={loanData.paidinstalment}
                                    />
                                    {formErrors.paidinstalment && <span className="text-danger">{formErrors.paidinstalment}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicRemainingInstalment">
                                    <Form.Label>Remaining Instalment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Remaining Instalment"
                                        name="remaininginstalment"
                                        onChange={(event) => handleChange(event, 'loan')}
                                        value={loanData.remaininginstalment}
                                    />
                                    {formErrors.remaininginstalment && <span className="text-danger">{formErrors.remaininginstalment}</span>}
                                </Form.Group>

                                {/* Address Information */}
                                <Form.Group className="mb-3" controlId="formBasicStreetName">
                                    <Form.Label>Street Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Street Name"
                                        name="streetname"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.streetname}
                                    />
                                    {formErrors.streetname && <span className="text-danger">{formErrors.streetname}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPostalCode">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Postal Code"
                                        name="postalcode"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.postalcode}
                                    />
                                    {formErrors.postalcode && <span className="text-danger">{formErrors.postalcode}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter City"
                                        name="city"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.city}
                                    />
                                    {formErrors.city && <span className="text-danger">{formErrors.city}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter State"
                                        name="state"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.state}
                                    />
                                    {formErrors.state && <span className="text-danger">{formErrors.state}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicTaluka">
                                    <Form.Label>Taluka</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Taluka"
                                        name="taluka"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.taluka}
                                    />
                                    {formErrors.taluka && <span className="text-danger">{formErrors.taluka}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLandmark">
                                    <Form.Label>Landmark</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Landmark"
                                        name="landmark"
                                        onChange={(event) => handleChange(event, 'address')}
                                        value={addressData.landmark}
                                    />
                                    {formErrors.landmark && <span className="text-danger">{formErrors.landmark}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicStartDate">
                                    <Form.Label>Start Date</Form.Label>
                                    <DatePicker
                                        selected={loanData.startDate}
                                        onChange={(date) => handleDateChange(date, 'startDate')}
                                        className="form-control"
                                    />
                                    {formErrors.startDate && <span className="text-danger">{formErrors.startDate}</span>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEndDate">
                                    <Form.Label>End Date</Form.Label>
                                    <DatePicker
                                        selected={loanData.endDate}
                                        onChange={(date) => handleDateChange(date, 'endDate')}
                                        className="form-control"
                                    />
                                    {formErrors.endDate && <span className="text-danger">{formErrors.endDate}</span>}
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
}

export default Addcustomer;
