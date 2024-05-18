package com.app.dto;
import javax.validation.constraints.NotBlank;

import com.app.model.Loan;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CustomerDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id; //only need to show after generating  during serialzation hence it should only readx only access(jackson will use only getter
	
	@NotBlank(message="firstname cannot be blank")
	
	private String firstName;
	@NotBlank(message="firstname cannot be blank")
	private String lastName;
	
	
		
}
