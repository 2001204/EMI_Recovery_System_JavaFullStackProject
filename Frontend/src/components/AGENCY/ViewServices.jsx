import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import AdminNavigationbar from './AdminNavigationbar';

function ViewServices() {
    const[viewServices , setViewServices] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/fetchBookedServices')
            .then(response => setViewServices(response.data))
            .catch(error => console.error('Error fetching booked services:', error));
    }, [])


  return (
    <div>
      <AdminNavigationbar/>
        <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7">
        <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">🚌</h3>
       
        <h2 class="display-5 mb-5 mb-xl-9 text-center">All Booked Services</h2>
      </div>
    </div>
  </div>
  <Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Amount</th>
              <th>Amount Due</th>
              <th>Count of Install.</th>
              <th>Customer Email</th>
              <th>Loan Payers Id</th>
              <th>Mobile Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {viewServices.map((view) => (
              <tr key={view.id}>
                <td>{view.id}</td>
                <td>{view.CustomerName.name}</td>
                <td>{view.Address}</td>
                <td>{view.Amount}</td>
                <td>{view.AmountDue}</td>
                <td>{view.CountofInstall}</td>
                <td>{view.CustomerEmail}</td>

                <td>{view.LoanPayersId}</td>
                <td>{view.MobileNumber}</td>
                <td>{view.Status}</td>
              {/* <Button variant="btn btn-danger"  type="submit" className="ml-2" onClick={() => handleDeleteContact(contact.id)}> Delete</Button>  */}
            </tr>
          ))}
        </tbody>
      </table>
      </Container>
    </div>   
   
  );
};

export default ViewServices

