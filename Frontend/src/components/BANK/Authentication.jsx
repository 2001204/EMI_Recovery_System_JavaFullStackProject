import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../Context/UserAuthContext";
import { Col, Row, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";

export function Authentication() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
        alertMsg();
        navigate("/forgetPass");
    } catch (err) {
      const myArray = err.message.split(":");
      const z = myArray[myArray.length-1];
      setError(z);
    }
  };

  const alertMsg =()=>{

    Swal.fire({
        title: "Success!!!",
        text: "Mobile Number verified successfully",
        icon: "success",
        buttons: "OK",
      }).then(() => {
        window.location = "/forgetPass";
      });
  }

  return (
    <>
    <div className="back1">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={4} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-4 text-center text-uppercase ">
                    Mobile Authentication
                  </h2>
                  <div className="mb-3">
                    <Form
                      onSubmit={getOtp}
                      style={{ display: !flag ? "block" : "none" }}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <PhoneInput
                          defaultCountry="IN"
                          value={number}
                          onChange={setNumber}
                          placeholder="Enter Phone Number"
                        />
                        <div id="recaptcha-container"></div>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Get OTP
                        </Button>
                      </div>
                      <div className="mt-3">
                        <Link to={"/login"} className="text-primary">
                          <p className="text-center"> Back</p>
                        </Link>
                      </div>
                    </Form>
                    <Form
                      onSubmit={verifyOtp}
                      style={{ display: flag ? "block" : "none" }}
                    >
                      <Form.Group className="mb-3" controlId="formBasicOtp">
                        <Form.Control
                          type="otp"
                          placeholder="Enter OTP"
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </Form.Group>
                      <div className="button-right">
                        <Link to="/login">
                          <Button variant="secondary">Cancel</Button>
                        </Link>
                        &nbsp;
                        <Button type="submit" variant="primary">
                          Verify
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}