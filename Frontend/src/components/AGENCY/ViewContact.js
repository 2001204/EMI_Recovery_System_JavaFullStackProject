import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminNavigationbar from "./AdminNavigationbar";

export default function AdminLogin() {
  const [telecallers, setTelecallers] = useState([]);

  useEffect(() => {
    fetchTelecallers();
  }, []);

  const fetchTelecallers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/telecallers"); // Adjust the endpoint as per your backend API
      setTelecallers(response.data);
    } catch (error) {
      console.error("Error fetching telecallers:", error);
    }
  };

  return (
    <div>
      <h1>Telecallers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Telecaller Name</th>
          </tr>
        </thead>
        <tbody>
          {telecallers.map((telecaller, index) => (
            <tr key={telecaller.id}>
              <td>{index + 1}</td>
              <td>{telecaller.first_name}</td>
              <td>{telecaller.last_name}</td>
              <td>{telecaller.email}</td>
              <td>{telecaller.telecaller_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
