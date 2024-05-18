package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_Exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dao.AdminDao;
import com.app.dao.BankDao;
import com.app.dao.CustomerDao;
import com.app.dao.LoanDao;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;
import com.app.dto.BankDTO;
import com.app.dto.BankandCustomerDTO;
import com.app.dto.CustomerDTO;
import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.LoanCustomerDTO;
import com.app.dto.LoanDTO;
import com.app.model.Address;
import com.app.model.Admin;
import com.app.model.Bank;
import com.app.model.Customer;
import com.app.model.Loan;

@Service
@Transactional
public class BankServiceImpl implements BankService {

	@Autowired
	private BankDao bankdao;
	
	@Autowired
	private AdminDao admindao;
	
	@Autowired
	private CustomerDao customerdao;
	
	@Autowired
	private AddressDao addressdao;
	
	@Autowired
	private LoanDao loandao;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<BankDTO> getallBankDetails() {
		
		
		return bankdao.findAll()
				.stream()
				.map( bank -> mapper.map(bank, BankDTO.class))
				.collect(Collectors.toList());
		
	}

	@Override
	public BankandCustomerDTO getallBankandCustomersDetails(Long bankid) {
		Bank bank1=bankdao.findById(bankid).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		
		
		System.out.println("this is surrent  bank by its id "+bank1);
		
		List<Customer> customers=customerdao.findAllCustomersbytitsbankid(bankid);
		
		
		System.out.println("this is cureent customers  bank by its bankid "+customers);
		 List<LoanCustomerDTO> loanCustomerDTOs = new ArrayList<>();
		 
		 for (Customer customer : customers) {
		        // Retrieve the loan details for the current customer
			 
			
			 
		        Loan loan = loandao.findById(customer.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		        System.out.println("this is cureent loan "+loan+" to customerr"+customer);
		        
		        Address address= addressdao.findById(customer.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		        System.out.println("this is cureent loan "+loan+" to customerr"+customer);
		        
		        
		        
		        
		        
		        LoanCustomerDTO loanCustomerDTO = new LoanCustomerDTO();
		        
		        
		       
		        loanCustomerDTO.setCustomer(mapper.map(customer, CustomerFeedbackDTO.class));
		        
		        
		        loanCustomerDTO.setLoan(mapper.map(loan, LoanDTO.class));
		        loanCustomerDTO.setAdd(mapper.map(address, AddressDTO.class));
		        System.out.println("Now this is whole LoancustomerDTO"+loanCustomerDTO);
		        
		        
		        loanCustomerDTOs.add(loanCustomerDTO);
		 }
	
		System.out.println("this is the list of LoanCustomerDTOs" +loanCustomerDTOs.toString());
		
		BankandCustomerDTO bankandCustomerDTO = new BankandCustomerDTO();
	    bankandCustomerDTO.setId(bank1.getId());
	    bankandCustomerDTO.setBankname(bank1.getBankname());
	    bankandCustomerDTO.setBpersonfirstName(bank1.getBpersonfirstName());
	    bankandCustomerDTO.setBpersonlastName(bank1.getBpersonlastName());
	    bankandCustomerDTO.setEmail(bank1.getEmail());
	    bankandCustomerDTO.setCm(loanCustomerDTOs);
		return  bankandCustomerDTO;
		 
	}

	@Override
	public BankDTO addNewBank(Long adminid,@Valid BankDTO bankdto) { //add new bank to existing 1 agency
		
		Admin admin=admindao.findById(adminid)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Agency  ID!!"));
		
		
		Bank bankEntity = mapper.map(bankdto, Bank.class);
		
		admin.addBanks(bankEntity);
		Bank persistentBank = bankdao.save(bankEntity);
		return mapper.map(persistentBank, BankDTO.class);
	}

	@Override
	public BankDTO updateBankdetails(Long bankId, @Valid BankDTO bankdto) {
		Bank bank = bankdao.findById(bankId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));
		bank.setBankname(bank.getBankname());
		bank.setEmail(bank.getEmail());
				return mapper.map(bank, BankDTO.class);
		
	}

	@Override
	public ApiResponse patchBank(@NotNull Long bankId, Map<String, Object> map) {
		
		Bank bank = bankdao.findById(bankId).orElseThrow(() -> new ResourceNotFoundException("Invalid Loan Id!!!!"));
		
		
		mapper.map(map,bank);
		
		System.out.println("updated bank " + bank);
		mapper.map(bank, BankDTO.class);
		
		return new ApiResponse ("Bank Details with ID " + bank.getId() + " updated successfully....");
		
	}

	@Override
	public ApiResponse deleteBankandallcustomer(Long bankid) {
		
		Bank bank1=bankdao.findById(bankid).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		
		
		System.out.println("this is surrent  bank by its id "+bank1);
		
		List<Customer> customers=customerdao.findAllCustomersbytitsbankid(bankid);
		
		
		for (Customer customer : customers) {
				
			Long bankid1=bank1.getId();
			Long custid=customer.getId();
			customerService.deleteParticularCustomer(bankid1,custid);
		}
		
		bankdao.delete(bank1);
		Optional<Admin> admin=admindao.findById(bankid);
		//admin.removeBanks(bank1);
		
		
		
		
		return new ApiResponse ("Bank Details with ID " + bank1.getId() + " deleted successfully....");
	}

	@Override
	public Boolean loginbank(String email, String password) {
		boolean result=bankdao.existsByEmailAndPassword(email,password);
		
		return result;
	}
	
	
	
	
	

}
