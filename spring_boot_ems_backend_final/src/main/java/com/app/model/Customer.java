package com.app.model;


	import java.time.LocalDate;
	import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
	import javax.persistence.Embedded;
	import javax.persistence.Entity;
	import javax.persistence.EnumType;
	import javax.persistence.Enumerated;
	import javax.persistence.FetchType;
	import javax.persistence.JoinColumn;
	import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

	import org.springframework.format.annotation.DateTimeFormat;

	import lombok.Getter;
	import lombok.NoArgsConstructor;
	import lombok.Setter;
	import lombok.ToString;

	@Entity
	@Table(name = "customers")
	@NoArgsConstructor
	@Getter
	@Setter
	@ToString(exclude = {"myBank","loan","add","myEmp"},callSuper=true)


	public class Customer extends BaseEntity{
		@Column(length = 30)
		private String firstName;
		@Column(length = 30)
		private String lastName;
		
		
		private String feedback = "Initial Feedback";
		private String status= "unpaid";
		
		@ManyToOne
		@JoinColumn(name="bank_id",nullable=false)
		private Bank myBank;
		
		
		@ManyToOne(optional = true,fetch = FetchType.LAZY)
		@JoinColumn(name="emp_id",nullable=true)
		private Employee myEmp;
		
		
		@OneToOne(mappedBy = "myCust",cascade=CascadeType.ALL,orphanRemoval=true)
		private Loan loan;
		
		@OneToOne(mappedBy = "Cust",cascade=CascadeType.ALL,orphanRemoval=true)
		private Address add;
		
		public void addLoan(Loan loan)
		{
			this.loan = loan;
	        loan.setMyCust(this);
			
		}
		
		public void removeLoan(Loan loan)
		{
			
			if (loan != null) {
	            loan.setMyCust(null);
	            this.loan = null;
	        }
			
		}
		
		
		
		
		
		public void addAdd(Address add)
		{
			this.add = add;
	        add.setCust(this);
			
		}
		
		public void removeAdd(Address add)
		{
			
			if (add != null) {
	            add.setCust(null);
	            this.add = null;
	        }
			
		}
		
		
		
		
		
		

		
		
		
		

}
