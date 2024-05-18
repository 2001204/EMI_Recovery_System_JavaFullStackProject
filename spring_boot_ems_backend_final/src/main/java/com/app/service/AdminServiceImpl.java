package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_Exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dao.AdminDao;
import com.app.dao.EmployeeDao;
import com.app.dto.AdminDTO;
import com.app.dto.BankDTO;
import com.app.dto.EmployeeDTO;
import com.app.dto.LoanCustomerDTO;
import com.app.model.Admin;
import com.app.model.Bank;
import com.app.model.Customer;
import com.app.model.Employee;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDao admindao;
	
	@Autowired
	private EmployeeDao employeedao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<AdminDTO> getalladmin() {
		return admindao.findAll() // List<Department>
				.stream() // Stream<Department>
				.map(admin -> mapper.map(admin, AdminDTO.class)) // Stream<DTO>
				.collect(Collectors.toList()); // List<Departmentdto>
		
	}

	@Override
	public AdminDTO addNewAdmin(@Valid AdminDTO dto) {
		Admin adminEntity = mapper.map(dto, Admin.class);
		Admin persistentAdmin = admindao.save(adminEntity);
		return mapper.map(persistentAdmin, AdminDTO.class);
		
	}

	@Override
	public List<EmployeeDTO> getallAdminandEmployeeDetails(Long agencyid) {
		Admin agency=admindao.findById(agencyid).orElseThrow(() -> new ResourceNotFoundException("Invalid agency Id !!!!"));
		List<Employee> employee=employeedao.findAllEmployeebytitsagencyid(agencyid);
		 return employee
		.stream()
		.map( emps -> mapper.map(emps, EmployeeDTO.class))
		.collect(Collectors.toList());
		
		
		
	}

	@Override
	public Boolean loginadmin(String email, String password) {
		boolean result = admindao.existsByEmailAndPassword(email,password);
		return result;
	}


}
