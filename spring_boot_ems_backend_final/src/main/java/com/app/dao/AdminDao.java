package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.Admin;

public interface AdminDao extends JpaRepository<Admin, Long> {

	
	@Query("SELECT COUNT(b) > 0 FROM Admin b WHERE b.email = :email AND b.password = :password")
	boolean existsByEmailAndPassword(String email, String password);

}
