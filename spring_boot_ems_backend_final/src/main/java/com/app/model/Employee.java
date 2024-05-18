package com.app.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Employee")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude={"myAdmin"})
public class Employee extends BaseEntity{
	
	private String firstname;
	private String lastname;
	private String email;
	//private char employeeType;
	private String password;
	
	
	@OneToMany(mappedBy = "myEmp",cascade=CascadeType.ALL,orphanRemoval=true)
	private List <Customer> customers=new ArrayList<>();
	
	
	@ManyToOne
	@JoinColumn(name="admin_id",nullable=false)
	private Admin myAdmin;
	
	
	public void addCustomerEmp(Customer c)
	{
		customers.add(c);
		c.setMyEmp(this);		
	}
	
	public void removeCustomerEmp(Customer c)
	{
		customers.remove(c);
		c.setMyEmp(null);
		
	}
	
	

}
