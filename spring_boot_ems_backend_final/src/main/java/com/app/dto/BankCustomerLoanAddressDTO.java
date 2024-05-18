package com.app.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BankCustomerLoanAddressDTO {
	
private CustomerFeedbackDTO customer;
	
	
	private LoanDTO loan;
	
	private AddressDTO add;
	
	private BankDTO bank;

}
