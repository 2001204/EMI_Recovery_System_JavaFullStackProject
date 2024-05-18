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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.BankService;

import io.swagger.v3.oas.annotations.Operation;

import com.app.dto.BankDTO;
import com.app.dto.BankandCustomerDTO;
import com.app.dto.CustomerDTO;
import com.app.dto.LoanCustomerDTO;
import com.app.model.Bank;

@RestController
@RequestMapping("/banks")
@CrossOrigin
public class BankController {
	
	@Autowired
	private BankService bankServ;
	
	@GetMapping
	@Operation(summary = "All banks Details(Only Bank)!")
	public ResponseEntity<?>  getallBanksDetails(){ //only all banks details excluding customers
		
		List<BankDTO> banks =bankServ.getallBankDetails();
		if(banks.isEmpty()) //No banks are registred
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return ResponseEntity.ok(banks); 
	}
	
	@GetMapping("/{bankid}")
	@Operation(summary = "Specific bank with theis all customer")
	public BankandCustomerDTO getallCustomersBank(@PathVariable Long bankid){
		BankandCustomerDTO current= bankServ.getallBankandCustomersDetails(bankid);
		System.out.println("this is what service returns to controller"+current);
		return current;
	}
	

	
	@PutMapping("/{bankId}") //update existing bankdetails
	@Operation(summary = "Update Specific Bank details(Not Working) !")
	public ResponseEntity<?> updateBankdetails(@PathVariable Long bankId,
			@RequestBody @Valid BankDTO bankdto) {
		System.out.println("in update dept " +bankId+" "+ bankdto);		
		return ResponseEntity.
				ok(bankServ.updateBankdetails(bankId , bankdto));
		}
	
	@PatchMapping("/{bankId}")
	@Operation(summary = "Partial updation of Bank details")
	public ResponseEntity<?> updateBankPartial(
			@PathVariable @NotNull Long bankId,
			@RequestBody Map<String, Object> map) throws Exception{
		System.out.println("in partial update Loan " + bankId + " " + map);
		return ResponseEntity.ok()
				.body(bankServ.patchBank(bankId, map));
	}

	@PostMapping("/{adminid}")  //added customers to specific bankid
	@Operation(summary = "Add new bank to existing 1 Agency")
	public ResponseEntity<?> addNewBank(@PathVariable Long adminid ,@RequestBody @Valid BankDTO bankdto) {
		System.out.println("in add bank to agency " + bankdto);
		return ResponseEntity.
				status(HttpStatus.CREATED).
				body(bankServ.addNewBank(adminid, bankdto));
		
	}
	
	@DeleteMapping("/{bankid}")
	@Operation(summary = "Delete bank from agency will result in remove all customers  of that bank ")
	public ResponseEntity<?> deleteBankandallcustomer(@PathVariable Long bankid){
		
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).
				body(bankServ.deleteBankandallcustomer(bankid));
	}
	
	@GetMapping("/login/{email}/{password}")
	public ResponseEntity<?> loginbank(@PathVariable String email,@PathVariable String password){
		return ResponseEntity.
				status(HttpStatus.ACCEPTED).
				body(bankServ.loginbank(email,password));
	}
}
//http://localhost:8080/swagger-ui/index.html