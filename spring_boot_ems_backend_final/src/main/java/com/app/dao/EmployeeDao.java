package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.Customer;
import com.app.model.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Long> {

	
	@Query("SELECT e FROM Employee e JOIN FETCH e.myAdmin a WHERE a.id = :agencyid")
	List<Employee>findAllEmployeebytitsagencyid(Long agencyid);

	
	
	 @Query("SELECT COUNT(b) > 0 FROM Employee b WHERE b.email = :email AND b.password = :password")
	boolean existsByEmailAndPassword(String email, String password);

	
	
	

}
