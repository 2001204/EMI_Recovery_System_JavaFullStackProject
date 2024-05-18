package com.app.service;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_Exceptions.ResourceNotFoundException;
import com.app.dao.AddressDao;
import com.app.dao.AdminDao;
import com.app.dao.BankDao;
import com.app.dao.CustomerDao;
import com.app.dao.EmployeeDao;
import com.app.dao.LoanDao;
import com.app.dto.*;
import com.app.model.Address;
import com.app.model.Admin;
import com.app.model.Bank;
import com.app.model.Customer;
import com.app.model.Employee;
import com.app.model.Loan;


import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	private BankDao bankDao;
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private EmployeeDao empDao;
	
	@Autowired
	private LoanDao loanDao;
	
	@Autowired
	private AddressDao addressDao;
	
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<CustomerDTO> getallcustomers() {
	
		return customerDao.findAll() // List<Department>
				.stream() // Stream<Department>
				.map(dept -> mapper.map(dept, CustomerDTO.class)) // Stream<DTO>
				.collect(Collectors.toList()); // List<Departmentdto>
		
	}

	@Override
	public LoanCustomerDTO addNewCustomer(Long bankid,@Valid LoanCustomerDTO dto) { //add new customer to existing 1 bank
		
		Bank bank =bankDao.findById(bankid)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Bank ID!!"));
		
		Customer custEntity = mapper.map(dto.getCustomer(), Customer.class);
		System.out.println(" initial customer :"+custEntity);
		Loan loanEntity=mapper.map(dto.getLoan(), Loan.class);
		System.out.println(" initial Loan :"+loanEntity);
		Address addressEntity=mapper.map(dto.getAdd(),Address.class);
		System.out.println(" initial Loan :"+loanEntity);
		
		custEntity.addLoan(loanEntity);
		
		custEntity.addAdd(addressEntity);
		
		System.out.println("after setting loan of customer Whole customer:"+custEntity);
		
		bank.addCustomer(custEntity);
		System.out.println("after adding bankid to  Whole customer:"+custEntity);
		
		Customer savedCust= customerDao.save(custEntity);
		System.out.println("after saving  Whole customer:"+savedCust);
		
		LoanCustomerDTO loanCustomerDTO = new LoanCustomerDTO();

        // Map Customer
        loanCustomerDTO.setCustomer(mapper.map(savedCust, CustomerFeedbackDTO.class));

        // Map Loan
        loanCustomerDTO.setLoan(mapper.map(loanEntity, LoanDTO.class));
        
        loanCustomerDTO.setAdd(mapper.map(addressEntity, AddressDTO.class));
		return loanCustomerDTO;
	}

	@Override
	public   ApiResponse deleteParticularCustomer(Long bankid, Long customerid) {
		
		Bank bank =bankDao.findById(bankid)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Bank ID!!"));
		if(bank!=null)
		{
		java.util.Optional<Loan> loan = loanDao.findById(customerid);
		java.util.Optional<Address> address= addressDao.findById(customerid);
		if (loan.isPresent())
			loanDao.delete(loan.get());
		if (address.isPresent())
			addressDao.delete(address.get());
		}
		Customer customer=customerDao.findById(customerid).
				orElseThrow(()-> new ResourceNotFoundException("Invalid Customer ID!!"));
		
		customerDao.delete(customer);
		
		
		
		
		
		return new ApiResponse ("Customer Details with ID " + customer.getId() + " deleted....");
	}

	@Override
	public ApiResponse assignEmpIdToCustomer(Long customerid, Long empid) {
		
		
		
		Employee employee=empDao.findById(empid).
				orElseThrow(()-> new ResourceNotFoundException("Invalid Employee ID!!"));
		
		java.util.Optional<Customer> customer=customerDao.findById(customerid);
				
		customer.ifPresent(cust->{cust.setMyEmp(employee); customerDao.save(cust);});
		
		return new ApiResponse ("Employee "+employee +"Assign To Customer"+customer+"Sucessfullyy!!");
	}

	@Override
	public CustomerFeedbackDTO findcustomerbyid(Long customerid) {
		
		 Customer cust=customerDao.findById(customerid).orElseThrow(()-> new ResourceNotFoundException("Invalid customeid ID!!"));
		 return mapper.map(cust, CustomerFeedbackDTO.class);
	}
	
	

}
