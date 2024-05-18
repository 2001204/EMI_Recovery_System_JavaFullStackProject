package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Loan;

public interface LoanDao extends JpaRepository<Loan, Long> {

}
