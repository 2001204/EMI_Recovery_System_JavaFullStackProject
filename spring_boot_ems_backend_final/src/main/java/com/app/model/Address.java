package com.app.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "address")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude="Cust",callSuper=true)
public class Address extends BaseEntity{
	private String state;
	
	private String streetname;
	
	private int postalcode;
	
	private long mobilenumber;
	
	private String city;
	
	private String taluka;
	
	private String landmark;
	
	
	
	
	@OneToOne
	@JoinColumn(name="customer_id",nullable=false)
	private Customer Cust;
	
}
