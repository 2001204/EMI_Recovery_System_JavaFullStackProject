import { Row,Container,Col, Card, CardBody, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Navigationbar } from "./Navigationbar";
import React, {useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function Contact(){
    const [userData, setUserData] = useState({
        name:'',
        email:'',
        mobileNo:'',
        comment:''
    });
    let[error,setError]=useState({
        errorData:null,
        isError:false
    })
   const handleChange=(event,property)=>{
    setUserData({
        ...userData,
        [property]:event.target.value
        })
   }
   const navigate = useNavigate();

   const SubmitForm=(event)=>{
    event.preventDefault();
    console.log(userData);
    if(userData.name===undefined||userData.name.trim()==='')
    {
        toast.error("Name Required");
        return;
    }
    if(userData.email===undefined||userData.email.trim()==='')
    {
        toast.error("EmailRequired");
        return;
    }
    if(userData.mobileNo===undefined||userData.mobileNo.trim()==='')
    {
        toast.error("Mobile Required");
        return;
    }
    if(userData.comment===undefined||userData.comment.trim()==='')
    {
        toast.error("Comment Required");
        return;
    }
    // try {
    //     const response =  axios.post('http://localhost:8080/api/contact',userData);
    //     navigate('/');
    //     if (response.status === 200) {
    //       console.log('Contact form submitted successfully!');
    //       toast.success("Contact Form Submitted Succesfully");

    //     } else {
    //       console.error('Failed to submit contact form');
    //     }
    //   } catch (error) {
    //     console.error('Error submitting contact form', error);
    //   }
   }
  
    return (
    <Container>
        <Navigationbar/>
          <Row>
            <Col sm={{span:6,offset:3}} className="mt-4">
                <Card className="shadow p-4">
                    <CardBody>
                        <h4 className="mb-3">☎️Let Us Contact You👆</h4>
                        <Form className="mb-3"  onSubmit={SubmitForm}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Enter Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your first Name" 
                        onChange={(event)=>handleChange(event,'name')}
                        value={userData.name}
                         />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Enter Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter your Email Id" 
                         onChange={(event)=>handleChange(event,'email')}
                        value={userData.email}
                         />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Enter Mobile No</Form.Label>
                        <Form.Control type="number" name="mobileNo" placeholder="Enter your Mobile Number" 
                        onChange={(event)=>handleChange(event,'mobileNo')}
                        value={userData.mobileNo}
                         />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label >Your Comments</Form.Label>
                            <FormControl as={'textarea'} rows={6} placeholder="write Comment" name="comment" type="comment" 
                            onChange={(event)=>handleChange(event,'comment')}
                            value={userData.comment}
                            />
                        </Form.Group>
                        <p className="text-center">✌️"We are here with you✌️"</p>
                        <Container className="text-center">
                            <Button variant="success"  type="submit" >Submit</Button>
                        </Container>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
          </Row>
          <ToastContainer/>
        </Container>
    );
}