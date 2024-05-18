// import { Row,Container,Col, Card, CardBody, FormControl } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import UserNavigationbar from "./UserNavigationbar";

// export default function UserFeedback()
// {
    
//     const [userData, setUserData] = useState({
//         name:'',
//         email:'',
//         mobileNo:'',
//         serviceCenterName:'',
//         comments:''
//     });

//     const handleChange=(event,property)=>{
//         setUserData({
//             ...userData,
//             [property]:event.target.value
//             })
//        }


//       // const navigate = useNavigate();

//        const SubmitForm=(event)=>{
//         event.preventDefault();
//         console.log(userData);
//         if(userData.name===undefined||userData.name.trim()==='')
//         {
//             toast.error("Name Required");
//             return;
//         }
//         if(userData.email===undefined||userData.email.trim()==='')
//         {
//             toast.error("EmailRequired");
//             return;
//         }
//         if(userData.mobileNo===undefined||userData.mobileNo.trim()==='')
//         {
//             toast.error("Mobile Required");
//             return;
//         }
//         if(userData.serviceCenterName===undefined||userData.serviceCenterName.trim()==='')
//         {
//             toast.error("Mobile Required");
//             return;
//         }
//         if(userData.comments===undefined||userData.comments.trim()==='')
//         {
//             toast.error("Comment Required");
//             return;
//         }
//         try {
//             const response = axios.post('http://localhost:8080/feedback',userData);
//             //navigate('/');
//             if (response.status === 200) {
//               console.log('feedaback form submitted successfully!');
//               toast.success("feedback Form Submitted Succesfully");
    
//             } else {
//               console.error('Failed to submit feedback form');
//               toast.success("Error");
//             }
//           } catch (error) {
//             console.error('Error submitting contact form', error);
//           }
//        }
// return(

//     <Container>
//         <UserNavigationbar/>
//         <Row>
//             <Col sm={{span:8,offset:2}} className="mt-4">
//                 <Card className="shadow p-4">
//                     <CardBody>
//                         <h4 className="mb-3">⭐Fill Feedback Form⭐</h4>
//                         <Form className="mb-3" onClick={SubmitForm}>
//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Enter Name</Form.Label>
//                         <Form.Control type="text" name="name" placeholder="Enter your first Name" required
//                         onChange={(event)=>handleChange(event,'name')}
//                         value={userData.name}
//                          />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Enter Email</Form.Label>
//                         <Form.Control type="email" name="email" placeholder="Enter your Last Name"
//                         onChange={(event)=>handleChange(event,'email')}
//                         value={userData.email}
//                          />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Enter Mobile No</Form.Label>
//                         <Form.Control type="number" name="mobileNo" placeholder="Enter your Last Name"
//                         onChange={(event)=>handleChange(event,'mobileNo')}
//                         value={userData.mobileNo}
//                          />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                         <Form.Label>Service Center Name</Form.Label>
//                         <Form.Control type="text" placeholder="Enter the service center name"
//                         onChange={(event)=>handleChange(event,'serviceCenterName')}
//                         value={userData.serviceCenterName}
//                          />
//                         </Form.Group>

//                         <Form.Group className="mb-2">
//                             <Form.Label>Your Comments</Form.Label>
//                             <FormControl as={'textarea'} rows={6} placeholder="write here"
//                              onChange={(event)=>handleChange(event,'comments')}
//                              value={userData.comments}
//                             />
//                         </Form.Group>

//                         <p className="text-center">✌️"We are here with you✌️"</p>
//                         </Form>
//                         <Container className="text-center">
//                             <Button variant="success">Submit</Button>
//                         </Container>
//                     </CardBody>
//                 </Card>
//             </Col>
//           </Row>
// </Container>
//     )
// }