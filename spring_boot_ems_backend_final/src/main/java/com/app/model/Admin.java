package com.app.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Admin")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude="banks")
public class Admin extends BaseEntity {
	private String adminfirstname;
	private String adminlastname;
	private String agencyname;
	private String email;
	private String password;
	
	@OneToMany(mappedBy = "myAdmin",cascade=CascadeType.ALL,orphanRemoval=true)
	private List <Employee> employee=new ArrayList<>();
	
	public void addEmployee(Employee e)
	{
		employee.add(e);
		e.setMyAdmin(this);
		
		
	}
	
	public void removeEmployee(Employee e)
	{
		employee.remove(e);
		e.setMyAdmin(null);
		
	}
	
	
	@OneToMany(mappedBy = "myAdmin",cascade=CascadeType.ALL,orphanRemoval=true)
	private List <Bank> banks=new ArrayList<>();
	
	public void addBanks(Bank b)
	{
		banks.add(b);
		b.setMyAdmin(this);
		
	}
	
	public void removeBanks(Bank b)
	{
		banks.remove(b);
		b.setMyAdmin(null);
		
	}



}
