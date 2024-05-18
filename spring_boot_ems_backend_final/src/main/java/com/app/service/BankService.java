package com.app.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.app.dto.ApiResponse;
import com.app.dto.BankDTO;
import com.app.dto.BankandCustomerDTO;
import com.app.model.Bank;

public interface BankService {

	List<BankDTO> getallBankDetails();

	BankandCustomerDTO getallBankandCustomersDetails(Long bankid);

	BankDTO addNewBank(Long adminid, @Valid BankDTO bankdto);

	BankDTO updateBankdetails(Long bankId, @Valid BankDTO bankdto);

	ApiResponse patchBank(@NotNull Long bankId, Map<String, Object> map);

	Object deleteBankandallcustomer(Long bankid);

	Boolean loginbank(String email, String password);

	

}
