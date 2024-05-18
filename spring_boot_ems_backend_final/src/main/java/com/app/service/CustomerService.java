package com.app.service;
import java.util.List;

import javax.validation.Valid;

import com.app.dto.*;
public interface CustomerService {
	List<CustomerDTO> getallcustomers();

	LoanCustomerDTO addNewCustomer(Long bankid,@Valid  LoanCustomerDTO dto);

	

	Object deleteParticularCustomer(Long bankid, Long customerid2);

	Object assignEmpIdToCustomer(Long customerid, Long empid);

	CustomerFeedbackDTO findcustomerbyid(Long customerid);

	//Object updateCustomerStatusAndFeedback(Long customerId, String status, String feedback);
	

}
