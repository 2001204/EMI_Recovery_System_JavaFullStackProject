package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.app.model.Customer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class LoanDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message="Loan ID is required!")
	private int loanid;
	@NotBlank(message="Loan EMI is required!")
	private int emi;
	
	private int totalinstalment;
	private int paidinstalment;
	private int remaininstalment;
	
	private LocalDate startDate;
	private LocalDate endDate;

}
