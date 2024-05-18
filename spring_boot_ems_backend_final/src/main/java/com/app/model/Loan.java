package com.app.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "loans")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude="myCust",callSuper=true)
public class Loan extends BaseEntity{
	private String loanname;
	
	private String loantype;
	
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate startDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate endDate;
	
	private int loanid;
	
	private int emi;
	
	private int totalinstalment;
	private int paidinstalment;
	private int remaininstalment;

	
	@OneToOne
	@JoinColumn(name="customer_id",nullable=false)
	private Customer myCust;

}
