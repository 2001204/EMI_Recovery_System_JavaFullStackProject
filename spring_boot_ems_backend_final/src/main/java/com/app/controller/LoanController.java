package com.app.controller;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BankService;
import com.app.service.LoanService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/loan")
@CrossOrigin
@Validated //needed for validations of path var n req params
public class LoanController {
	
	@Autowired
	private LoanService loanServ;
	
	@PatchMapping("/{custId}")
	@Operation(summary = "Partial updation of customer Loan details")
	public ResponseEntity<?> updateCustomerLoanPartial(
			@PathVariable @NotNull Long custId,
			@RequestBody Map<String, Object> map) throws Exception{
		System.out.println("in partial update Loan " + custId + " " + map);
		return ResponseEntity.ok()
				.body(loanServ.patchCustomerLoan(custId, map));
	}
	
	@GetMapping("/{custId}")
	public ResponseEntity<?> getloanbbyid(@PathVariable Long custId){
		return ResponseEntity.ok()
				.body(loanServ.getloanbbyid(custId));
	}

}
