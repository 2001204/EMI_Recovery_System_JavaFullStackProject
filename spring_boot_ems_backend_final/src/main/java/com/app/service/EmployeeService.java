package com.app.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.EmployeeCustomerDTO;
import com.app.dto.EmployeeDTO;

public interface EmployeeService {

	List<EmployeeDTO> getallemployees();

	EmployeeDTO addNewEmployee( Long agencyid, @Valid EmployeeDTO dto);

	EmployeeCustomerDTO getallcustomerswithemployee(Long empid);

	CustomerFeedbackDTO updateCustomerFeedback(@NotNull Long custId, Map<String, Object> map);

	Object deleteEmployee(Long empid);

   Boolean loginemployee(String email, String password);

	

}
