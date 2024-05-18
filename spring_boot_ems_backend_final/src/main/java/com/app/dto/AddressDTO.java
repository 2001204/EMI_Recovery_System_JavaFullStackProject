package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class AddressDTO {
	
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message="State  is required!")
	private String state;
	@NotBlank(message="streetname  is required!")
	private String streetname;
	@NotBlank(message="postalCode  is required!")
	private int postalcode;
	@NotBlank(message="mobilenumber  is required!")
	private long mobilenumber;
	@NotBlank(message="city  is required!")
	private String city;
	@NotBlank(message="taluka  is required!")
	private String taluka;
	
	private String landmark;
	
	

}
