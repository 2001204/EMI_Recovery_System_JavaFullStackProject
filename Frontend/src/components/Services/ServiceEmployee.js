import axios from "axios";
export async function saveEmployees(employeeData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/register/user-register",
      employeeData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Fetch Employees
export async function fetchEmployees() {
  try {
    const response = await axios.get("http://localhost:8080/register/emplist");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//DeleteEmployee

export async function deleteEmployee(id) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/register/emplist/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// Update

export async function updateEmployee(formdata, id) {
  try {
    const response = await axios.put(
      `http://localhost:8080/register/emplist/${id}`,
      formdata // Include the formdata in the request
    );
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error; // Throw the error to let the calling code handle it
  }
}

// getEmployee

export async function getEmployee(id) {
  try {
    const response = await axios.get(
      `http://localhost:8080/register/emplist/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data:", error);
    throw error; // Throw the error to let the calling code handle it
  }
}

// Save Customer
export async function saveCustomer(customerData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/customer/add",
      customerData
    );
    return response.data;
  } catch (error) {
    console.error("Error saving customer:", error);
    throw error;
  }
}

// Fetch Customers
export async function fetchCustomers() {
  try {
    const response = await axios.get(
      "http://localhost:8080/register/customerlist"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
}

// Delete Customer
export async function deleteCustomer(id) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/register/customerlist/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
}

export async function login(credentials) {
  try {
    const response = await axios.post(
      `http://localhost:8080/register/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    console.error("Error login customer:", error);
    throw error;
  }
}

// Update Customer
export async function updateCustomer(formdata, id) {
  try {
    const response = await axios.put(
      `http://localhost:8080/register/customerlist/${id}`,
      formdata
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
}

// Get Customer
export async function getCustomer(id) {
  try {
    const response = await axios.get(
      `http://localhost:8080/register/customerlist/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
}
