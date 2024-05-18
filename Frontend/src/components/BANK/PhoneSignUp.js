import React, { useState } from "react";
import { CardBody } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Card, Placeholder } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneSignUp = () => {
    const [number, setNumber] = useState("");

    const getOtp = (e) => {
        e.preventDefault();
        console.log(number);
    }
    return (
        <Card className="shadow p-4">
            <CardBody>
                <h4 className="mb-3">Firebase Phone Auth</h4>
                <Form onSubmit={getOtp}>
                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <PhoneInput
                        defaultCountry="IN"
                        value={number}
                        onChange={setNumber}
                        Placeholder="Enter Phone Number"
                        />
                    </Form.Group>
                    <div className="button-right">
                        <Link to="">
                            <Button variant="secondary">Cancel</Button> &nbsp;
                        </Link>
                        <Button variant="primary"type="submit">Send OTP</Button>
                    </div>
                </Form>
            </CardBody>
        </Card>

    );

};

export default PhoneSignUp;