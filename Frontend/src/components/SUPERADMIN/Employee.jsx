// // Employeelist Page
// import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import { useNavigate } from "react-router-dom";
// // import { deleteEmployee, fetchEmployees } from "../Services/ServiceEmployee";

// export function Employee() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     fetchEmployeeData();
//   }, []);
//   const navigate = useNavigate();
//   async function fetchEmployeeData() {
//     try {
//       const data = await fetchEmployees();
//       // Check if 'employees' exists in 'data' before setting the state
//       if (data && data.length > 0) {
//         setEmployees(data);
//       }
//     } catch (error) {
//       console.error("Error fetching employee data:", error);
//     }
//   }

//   async function handleDelete(id) {
//     try {
//       const r1 = await deleteEmployee(id);
//       console.log(r1);
//       // Fetch the updated employee data after deletion
//       fetchEmployeeData();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <Table className="custom-table mt-4">
//       <thead>
//         <tr>
//           <th>EmpID</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           <th>Password</th>
//           <th>Role</th>
//           <th>Phone No</th>
//           <th>Address</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* Check if 'employees' is not empty before mapping over it */}
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>{employee.id}</td>
//             <td>{employee.firstname}</td>
//             <td>{employee.lastname}</td>
//             <td>{employee.email}</td>
//             <td>{employee.password}</td>
//             <td>{employee.role}</td>
//             <td>{employee.phoneno}</td>
//             <td>{employee.address}</td>
//             <td>
//               <Button
//                 variant="outline-info"
//                 onClick={() => {
//                   navigate(`/updateemp/${employee.id}`);
//                 }}
//               >
//                 Edit
//               </Button>
//               {" "}
//               <Button
//                 variant="outline-info"
//                 onClick={() => handleDelete(employee.id)}
//               >
//                 Delete
//               </Button>{" "}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default Employee;
