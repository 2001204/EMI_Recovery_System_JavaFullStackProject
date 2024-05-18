package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.Bank;

public interface BankDao extends JpaRepository<Bank, Long> {
	//customer Query 
	@Query("select b from Bank b  left join  fetch b.cm where b.id=:bankid")
	Bank getBanksandCustomersDetails(Long bankid) ;
		
	 @Query("SELECT COUNT(b) > 0 FROM Bank b WHERE b.email = :email AND b.password = :password")
	    boolean existsByEmailAndPassword( String email, String password);
	

}
