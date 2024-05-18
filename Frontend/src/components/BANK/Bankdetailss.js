import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { Navigationbar } from "./UserNavigationbar";

export default function Bankdetailss() {
    const [bankData, setBankData] = useState([]);

    const fetchBanks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/banks");
            setBankData(response.data);
        } catch (error) {
            console.error("Error fetching bank data:", error);
        }
    };

    const deleteBank = async (bankId) => {
        try {
            await axios.delete(`http://localhost:8080/banks/${bankId}`);
            setBankData(prevBankData => prevBankData.filter(bank => bank.id !== bankId));
            console.log("Bank deleted successfully");
        } catch (error) {
            console.error("Error deleting bank:", error);
            alert("Failed to delete bank. Please try again later.");
        }
    };

    useEffect(() => {
        fetchBanks();
    }, []);

    return (
        <Container>
            <h1>Registered Bank Details</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Bank Name</th>
                        <th>Bank Person First Name</th>
                        <th>Bank Person Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bankData.map((bank, index) => (
                        <tr key={index}>
                            <td>{bank.id}</td>
                            <td>{bank.bankname}</td>
                            <td>{bank.bpersonfirstName}</td>
                            <td>{bank.bpersonlastName}</td>
                            <td>{bank.email}</td>
                            <td>{bank.password}</td>
                            <td>
                                <Button variant="danger" onClick={() => deleteBank(bank.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
