package com.app.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CustomerDTO;
import com.app.dto.EmployeeDTO;
import com.app.dto.LoanCustomerDTO;
import com.app.service.BankService;
import com.app.service.EmployeeService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeService empServ;
	
	@GetMapping //= @RequestMapping(Method=GET)
	@Operation(summary = "You see all Employess!")
	public List<EmployeeDTO> getAllEmployees() {
		System.out.println("in get all emps");
		return empServ.getallemployees();
	}
	
	@PostMapping("/{agencyid}") 
	@Operation(summary = "Add new employee to existing 1 agency")
	public ResponseEntity<?> addNewCustomer(@PathVariable Long agencyid ,@RequestBody @Valid EmployeeDTO dto) {
		System.out.println("in add emp " + dto);
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(empServ.addNewEmployee( agencyid,dto));
		
	}
	
	
	

	@GetMapping("/customers/{empid}")//= @RequestMapping(Method=GET)
	@Operation(summary = " Employess with all customers!")
	public ResponseEntity<?> getallemployeewithcustomer(@PathVariable Long empid){
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).body(empServ.getallcustomerswithemployee(empid));
		
	}
	
	@PatchMapping("/{custId}")
	@Operation(summary = " Updation of customer Feedback ")
	public ResponseEntity<?> updateCustomerFeedback(
			@PathVariable @NotNull Long custId,
			@RequestBody Map<String, Object> map) throws Exception{
		System.out.println("in partial update Loan " + custId + " " + map);
		return ResponseEntity.ok()
				.body(empServ.updateCustomerFeedback(custId, map));
	}
	
	@DeleteMapping("/{empid}")
	@Operation(summary = "Delete employee from agenecy  ")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long empid){
		return ResponseEntity.ok()
				.body(empServ.deleteEmployee(empid));
	}
	
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> loginemployee(@PathVariable String email,@PathVariable String password){
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).
				body(empServ.loginemployee(email,password));
	}
}
