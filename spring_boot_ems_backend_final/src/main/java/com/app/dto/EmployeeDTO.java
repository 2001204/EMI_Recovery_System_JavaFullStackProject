package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmployeeDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank(message="firstname  is required!")
	private String firstname;
	@NotBlank(message="lastname  is required!")
	private String lastname;
	@NotBlank(message="email  is required!")
	private String email;
	@NotBlank(message="password  is required!")
	private String password;
	
	//private String employeeType;
}
