package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.dto.BankandCustomerDTO;
import com.app.dto.EmployeeDTO;
import com.app.service.AdminService;
import com.app.service.CustomerService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminServ;
	
	@Autowired
	private CustomerService custServ;
	
	
	@GetMapping //= @RequestMapping(Method=GET)
	@Operation(summary = "You see all admin!")
	public List<AdminDTO> getAllAdmins() {
		System.out.println("in get all emps");
		return adminServ.getalladmin();
	}

	@PostMapping  //added customers to specific bankid
	@Operation(summary = "Add new Agency ")
	public ResponseEntity<?> addNewAdmin(@RequestBody @Valid AdminDTO dto) {
		System.out.println("in add emp " + dto);
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(adminServ.addNewAdmin( dto));
		
	}
	
	@GetMapping("/{agencyid}")
	@Operation(summary = "Specific Agency with all employess")
	public List<EmployeeDTO> getallAdminandEmployeeDetails(@PathVariable Long agencyid){
		List <EmployeeDTO> current= adminServ.getallAdminandEmployeeDetails(agencyid);
		System.out.println("this is what service returns to controller"+current);
		return current;
	}
	
	 @PostMapping("/{customerid}/{empid}")
	 public ResponseEntity<?> assignEmpIdToCustomer(
			 @PathVariable Long customerid,
			 @PathVariable Long empid){
		 return ResponseEntity.
					status(HttpStatus.ACCEPTED).
					body(custServ.assignEmpIdToCustomer(customerid,empid));
	 }
	
	 
	 @GetMapping("/login/{email}/{password}")
		public ResponseEntity<?> loginadmin(@PathVariable String email,@PathVariable String password){
			return ResponseEntity.
					status(HttpStatus.ACCEPTED).
					body(adminServ.loginadmin(email,password));
		}
	 
	
	
}
