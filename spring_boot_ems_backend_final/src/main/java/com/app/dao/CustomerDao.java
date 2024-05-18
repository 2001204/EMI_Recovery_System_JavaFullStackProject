package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
	
	@Query("SELECT c FROM Customer c JOIN FETCH c.myBank b WHERE b.id = :bankid")
	List<Customer>  findAllCustomersbytitsbankid(Long bankid);
	
	 @Query("SELECT c FROM Customer c WHERE c.myEmp.id=:empid")
	  List<Customer> findAllCustomersByEmpId(Long empid);

}
