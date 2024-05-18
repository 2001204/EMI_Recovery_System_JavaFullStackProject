// import { Component } from "react";
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import Swal from "sweetalert2";
// // import { resetPass } from '../../API/controller';


// export class ForgetPassword extends Component {
//   constructor() {
//     super();
//     this.state = {
//       formData: {},
//       errors:{},
//       defaultValue:{
//         mobile:"",
//         password:"",
//         cpassword:""
//       }
//     };
//   }

//   handleChange = (event)=>{
//     this.setState({
//         formData:{
//             ...this.state.formData,
//             [event.target.name]: event.target.value,
//         }
//     })

//   }

//   handleSubmit = async(event)=>{

//     event.preventDefault();
//    if(this.validate()){

//       const response = await resetPass(this.state.formData);
//       console.log(response);
//       if(response.data.statusCode == 200){
  
//         this.setState({
//             formData:{
//                 mobile:"",
//                 password:"",
//                 cpassword:""
//             }
//            })
//           this.alertMsg1();
        
//       }
//       else{
  
//         this.alertMsg2();
//       }
    
//     }
   
//   }

//   validate() {

//     let formData = this.state.formData;
//     let errors= {};
//     let isValid = true;

//     if(!formData["mobile"]){

//         isValid = false;
//         errors["mobile"] = "please enter mobile number";
//     }

//     if(!formData["password"]){

//         isValid = false;
//         errors["password"] = "please enter password";
//     }

//     if(!formData["cpassword"]){

//         isValid = false;
//         errors["cpassword"] = "please enter  confirm password";
//     }

//     if (typeof formData["password"] !== "undefined") {
//         if (formData["password"].length < 6) {
//           isValid = false;
//           errors["password"] = "Please add at least 6 charachter.";
//         }
//       }
  
//       if (
//         typeof formData["cpassword"] !== "undefined" &&
//         typeof formData["cpassword"] !== "undefined"
//       ) {
//         if (formData["password"] != formData["cpassword"]) {
//           isValid = false;
//           errors["cpassword"] = "Passwords don't match.";
//         }
//       }
      

//     this.setState({
//       errors: errors,
//     });

//     return isValid;
//   }

  
//   alertMsg1 = () => {
//     Swal.fire({
//       title: "Success!!!",
//       text: "Password Reset Successfully",
//       icon: "success",
//       buttons: "OK",
//     }).then(() => {
//       window.location = "/login";
//     });
//   };

//   alertMsg2 = () => {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Error!!! Try Again",
//     });
//   };

//   render() {
//     return (
//       <div className="back1">
//         <Container>
//           <Row className="vh-100 d-flex justify-content-center align-items-center">
//             <Col md={8} lg={4} xs={12}>
//               <div className="border border-3 border-primary"></div>
//               <Card className="shadow">
//                 <Card.Body>
//                   <div className="mb-3 mt-md-4">
//                     <h2 className="fw-bold mb-2 text-center text-uppercase ">
//                       Reset Password
//                     </h2>
//                     <div className="mb-3">
//                       <Form onSubmit={this.handleSubmit}>
//                         <Form.Group className="mb-3" controlId="formBasicPhone">
//                           <Form.Label className="text-center">
//                             Mobile Number
//                           </Form.Label>
//                           <Form.Control
//                             type="mobile"
//                             placeholder="Enter mobile number"
//                             name = "mobile"
//                             value = {this.state.formData.mobile}
//                             onChange={this.handleChange}
//                           />
//                           <div className="text-danger">
//                               {this.state.errors.mobile}
//                           </div>
//                         </Form.Group>

//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicPassword"
//                         >
//                           <Form.Label>Password</Form.Label>
//                           <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             name = "password"
//                             value={this.state.formData.password}
//                             onChange={this.handleChange}
//                           />
//                           <div className="text-danger">
//                               {this.state.errors.password}
//                           </div>
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-3"
//                           controlId="formBasicConfirmPassword"
//                         >
//                           <Form.Label>Confirm Password</Form.Label>
//                           <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             name = "cpassword"
//                             value={this.state.formData.cpassword}
//                             onChange={this.handleChange}
//                           />
//                           <div className="text-danger">
//                               {this.state.errors.cpassword}
//                           </div>
//                         </Form.Group>
//                         <div className="d-grid">
//                           <Button variant="primary" type="submit">
//                             Reset
//                           </Button>
//                         </div>
//                       </Form>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }
