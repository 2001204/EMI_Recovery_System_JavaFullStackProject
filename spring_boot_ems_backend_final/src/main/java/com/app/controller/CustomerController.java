package com.app.controller;

import java.util.List;

import javax.validation.Valid;

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
import com.app.dto.LoanCustomerDTO;
import com.app.service.CustomerService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/customers")
@CrossOrigin

public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping //= @RequestMapping(Method=GET)
	@Operation(summary = "You see all customers(not sure will run!")
	public List<CustomerDTO> getAllcustomers() {
		System.out.println("in get all emps");
		return customerService.getallcustomers();
	}
	
	@PostMapping("/{bankid}")  //added customers to specific bankid
	@Operation(summary = "Add new customer to existing 1 bank")
	public ResponseEntity<?> addNewCustomer(@PathVariable Long bankid ,@RequestBody @Valid LoanCustomerDTO dto) {
		System.out.println("in add emp " + dto);
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(customerService.addNewCustomer(bankid, dto));
		
	}
	@DeleteMapping("/{bankid}/{customerid}")
	@Operation(summary = "Delete particular customer")
	public ResponseEntity<?> deleteParticularCustomer(@PathVariable Long bankid,@PathVariable Long customerid){
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).
				body(customerService.deleteParticularCustomer(bankid,customerid));
	}
	

	@GetMapping("/{customerid}")
	public ResponseEntity<?> findcustomerbyid(@PathVariable Long customerid){
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).
				body(customerService.findcustomerbyid(customerid));
	}
	
	
	

	
	
	

}
