import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";

export default function Telecaller() {
    const [telecallerData, setTelecallerData] = useState([]);
    const [showAddTelecaller, setShowAddTelecaller] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/employee");
            setTelecallerData(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddCustomerClose = () => {
        setShowAddTelecaller(false);
        fetchUsers(); // Fetch users again after adding a new customer
    };
    return (
        <Container>
            <h1>Registered Telecaller Details</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        {/* <th>Telecaller Person First Name</th>
                        <th>Telecaller Person Last Name</th> */}
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {telecallerData.map((telecaller, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{telecaller.email}</td>
                            {/* <td>{telecaller.first_name}</td>
                            <td>{telecaller.last_name}</td> */}
                            <td>{telecaller.email}</td>
                            <td>{telecaller.password}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

const TableRow = ({ id, bankname, bpersonfirstName, bpersonlastName, email, password }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{bankname}</td>
            <td>{bpersonfirstName}</td>
            <td>{bpersonlastName}</td>
            <td>{email}</td>
            <td>{password}</td>
        </tr>
    );
};
