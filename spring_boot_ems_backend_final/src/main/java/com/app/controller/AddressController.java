package com.app.controller;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.AddressService;
import com.app.service.LoanService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/address")
@CrossOrigin
@Validated //needed for validations of path var n req params
public class AddressController {

	
	@Autowired
	private AddressService addServ;
	
	

	@PatchMapping("/{custId}")
	@Operation(summary = "Partial updation of customer Loan details")
	public ResponseEntity<?> patchCustomerAddress(
			@PathVariable @NotNull Long custId,
			@RequestBody Map<String, Object> map) throws Exception{
		System.out.println("in partial update Loan " + custId + " " + map);
		return ResponseEntity.ok()
				.body(addServ.patchCustomerAddress(custId, map));
	}

}
