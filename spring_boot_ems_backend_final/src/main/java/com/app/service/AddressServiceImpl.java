package com.app.service;

import java.util.Map;

import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_Exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dto.AddressDTO;
import com.app.dto.LoanDTO;
import com.app.model.Address;
import com.app.model.Loan;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	
	@Autowired
	private AddressDao addressDao;
	
	@Autowired
	private ModelMapper mapper;

	
	@Override
	public AddressDTO patchCustomerAddress(@NotNull Long custId, Map<String, Object> map) {
		
			// chk if adr exists
			Address address = addressDao.findById(custId).orElseThrow(() -> new ResourceNotFoundException("Invalid Address Id!!!!"));
					
				
			mapper.map(map,address);
			
			System.out.println("updated loan " + address);
			return mapper.map(address, AddressDTO.class);
		}

}
