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
@Table(name = "banks")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude={"cm","myAdmin"})
public class Bank extends BaseEntity{
	private String bankname;
	private String bpersonfirstName;
	private String bpersonlastName;
	private String email;
	private String password;
	
	
	@OneToMany(mappedBy = "myBank",cascade=CascadeType.ALL,orphanRemoval=true)
	private List <Customer> cm=new ArrayList<>();
	
	
	
	@ManyToOne
	@JoinColumn(name="admin_id",nullable=false)
	private Admin myAdmin;
	
	public void addCustomer(Customer c)
	{
		cm.add(c);
		c.setMyBank(this);
		
	}
	
	public void removeCustomer(Customer c)
	{
		cm.remove(c);
		c.setMyBank(null);
		
	}

	
	
}
