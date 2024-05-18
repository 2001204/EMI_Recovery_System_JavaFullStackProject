package com.app.service;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_Exceptions.ResourceNotFoundException;
import com.app.dao.LoanDao;
import com.app.dto.LoanDTO;
import com.app.model.Loan;

@Service
@Transactional
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private LoanDao loanDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public LoanDTO patchCustomerLoan(@NotNull Long custId, Map<String, Object> map) {
		
			// chk if adr exists
			Loan loan = loanDao.findById(custId).orElseThrow(() -> new ResourceNotFoundException("Invalid Loan Id!!!!"));
					
				
			mapper.map(map,loan);
			
			System.out.println("updated loan " + loan);
			return mapper.map(loan, LoanDTO.class);
			
			
		}
	@Override
	public Object getloanbbyid(Long custId) {
		Loan loan = loanDao.findById(custId).orElseThrow(() -> new ResourceNotFoundException("Invalid Loan Id!!!!"));
		return mapper.map(loan, LoanDTO.class);

	}
	}

