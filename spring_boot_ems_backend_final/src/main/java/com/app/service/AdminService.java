package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.AdminDTO;
import com.app.dto.EmployeeDTO;

public interface AdminService {

	List<AdminDTO> getalladmin();

	AdminDTO addNewAdmin(@Valid AdminDTO dto);

	List<EmployeeDTO> getallAdminandEmployeeDetails(Long agencyid);

	Boolean  loginadmin(String email, String password);

}
