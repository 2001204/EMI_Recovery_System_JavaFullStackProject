import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

export default function TelecallerList() {
  const [telecallers, setTelecallers] = useState([]);

  useEffect(() => {
    const fetchTelecallers = async () => {
      try {
        const response = await axios.get("http://localhost:7070/telecallers");
        setTelecallers(response.data);
      } catch (error) {
        console.error("Error fetching telecallers:", error);
      }
    };

    fetchTelecallers();
  }, []);

  return (
    <Container>
      <h1>Registered Telecallers</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Telecaller Name</th>
          </tr>
        </thead>
        <tbody>
          {telecallers.map((telecaller) => (
            <tr key={telecaller.id}>
              <td>{telecaller.id}</td>
              <td>{telecaller.first_name}</td>
              <td>{telecaller.last_name}</td>
              <td>{telecaller.email}</td>
              <td>{telecaller.telecaller_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
