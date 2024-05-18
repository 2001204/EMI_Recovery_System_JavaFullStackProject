import React, { useState,useEffect,} from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';  // You can import Modal from react-bootstrap or any other library you prefer
import { useParams } from "react-router-dom";
const DeleteCustomer= ({  onClose, onDeleteSuccess }) => {
  const [show, setShow] = useState(true);
  const { id: customerId, customerData } = useParams();
  const { id: bankId } = useParams();
  const [loanData, setLoanData] = useState()
  const [isSubmitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/${bankId}/${customerId}`)
      .then(response => {
        console.log(response.data);
        console.log("Data updated from frontend");
        onDeleteSuccess();
        handleClose();
      })
      .catch(error => {
        console.error('Error deleting customer:', error);
        // Handle the error as needed
        handleClose();
      });
  };

  const handleChange = (e) => {
    setLoanData({ ...customerData, [e.target.name]: e.target.value });
  };

  const populateData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/${bankId}/${customerId}`);
      console.log("Response from server:", response.data);
      setLoanData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    populateData();
  }, [customerId]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this customer?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCustomer;
