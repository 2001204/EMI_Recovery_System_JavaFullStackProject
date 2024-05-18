package com.app.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class EmployeeCustomerDTO {

	
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message="Bank name is required!")
	
	private List<BankCustomerLoanAddressDTO> cm;
	
	private String firstname;
	private String lastname;
	
}
