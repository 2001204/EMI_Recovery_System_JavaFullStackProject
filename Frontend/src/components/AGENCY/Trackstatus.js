import axios from "axios";
import React from "react";
import {Button} from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavigationbar from "./AdminNavigationbar";
//import { Feedback } from "react-bootstrap/lib/formcontrol";


export default function Trackstatus()
{
    const [bankId, setBankId] = useState('');
  const [bankDetails, setBankDetails] = useState({
    id: 0,
    bankname: '',
    bpersonfirstName: '',
    bpersonlastName: '',
    email: '',
    cm: [],
  });



  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/banks/${bankId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bank details');
        }
        const data = await response.json();
        setBankDetails(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (bankId) {
      fetchData();
    }
  }, [bankId]);

  const handleBankIdChange = (event) => {
    setBankId(event.target.value);
  };



 

 
    return(

        <div>
      <h1>Bank Details</h1>
      <label>
        Enter Bank ID:
        <input type="text" value={bankId} onChange={handleBankIdChange} />
      </label>
      <button onClick={() => setBankId(bankId)}>Fetch Bank Details</button>

      {bankDetails.id !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Bank ID</th>
              <th>Bank Name</th>
              <th>Bank Person First Name</th>
              <th>Bank Person Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bankDetails.id}</td>
              <td>{bankDetails.bankname}</td>
              <td>{bankDetails.bpersonfirstName}</td>
              <td>{bankDetails.bpersonlastName}</td>
              <td>{bankDetails.email}</td>
            </tr>
          </tbody>
        </table>
      )}

      <h2>Customer Details</h2>
      {bankDetails.cm.map((customerDetail) => (
        <div key={customerDetail.customer.id}>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Customer Feedback</th>
                <th>Customer Status</th>
              </tr>
            </thead>
            <tbody>
              <tr key={customerDetail.customer.id}>
                <td>{customerDetail.customer.id}</td>
                <td>{customerDetail.customer.firstName}</td>
                <td>{customerDetail.customer.lastName}</td>
                <td>{customerDetail.customer.feedback}</td>
                <td>{customerDetail.customer.status}</td>



		

              </tr>
            </tbody>
          </table>

          <h3>Loan Details</h3>
          <table>
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>EMI</th>
                <th>Total Instalment</th>
                <th>Paid Instalment</th>
                <th>Remaining Instalment</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr key={customerDetail.loan.id}>
                <td>{customerDetail.loan.id}</td>
                <td>{customerDetail.loan.emi}</td>
                <td>{customerDetail.loan.totalinstalment}</td>
                <td>{customerDetail.loan.paidinstalment}</td>
                <td>{customerDetail.loan.remaininstalment}</td>
                <td>{customerDetail.loan.startDate}</td>
                <td>{customerDetail.loan.endDate}</td>

              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    );
}