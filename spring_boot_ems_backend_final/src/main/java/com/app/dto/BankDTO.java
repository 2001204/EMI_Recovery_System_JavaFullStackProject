package com.app.dto;

import java.util.List;

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
public class BankDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message="Bank name is required!")
	private String bankname;
	private String bpersonfirstName;
	private String bpersonlastName;
	private String email;
	private String password;
	

	
}
