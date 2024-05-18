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
public class AdminDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank(message="adminfirstname  is required!")
	private String adminfirstname;
	@NotBlank(message="adminlastname  is required!")
	private String adminlastname;
	@NotBlank(message="agencyname  is required!")
	private String agencyname;
	@NotBlank(message="adminemail  is required!")
	private String email;
	@NotBlank(message="adminpassword  is required!")
	private String password;
	
}
