package com.app.dto;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BankandCustomerDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message="Bank name is required!")
	private String bankname;
	private String bpersonfirstName;
	private String bpersonlastName;
	private String email;
	private List<LoanCustomerDTO> cm;
	
	
}
