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
import com.app.dao.EmployeeDao;
import com.app.dao.LoanDao;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;
import com.app.dto.BankCustomerLoanAddressDTO;
import com.app.dto.BankDTO;
import com.app.dto.CustomerDTO;
import com.app.dto.CustomerFeedbackDTO;
import com.app.dto.EmployeeCustomerDTO;
import com.app.dto.EmployeeDTO;
import com.app.dto.LoanCustomerDTO;
import com.app.dto.LoanDTO;
import com.app.model.Address;
import com.app.model.Admin;
import com.app.model.Bank;
import com.app.model.Customer;
import com.app.model.Employee;
import com.app.model.Loan;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	
	
	@Autowired
	private EmployeeDao empdao;
	
	@Autowired
	private AdminDao admindao;
	
	
	@Autowired
	private CustomerDao customerdao;
	
	@Autowired
	private AddressDao addressdao;
	
	@Autowired
	private LoanDao loandao;
	
	@Autowired
	private BankDao bankdao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<EmployeeDTO> getallemployees() {
		return empdao.findAll() // List<Department>
				.stream() // Stream<Department>
				.map(emp -> mapper.map(emp, EmployeeDTO.class)) // Stream<DTO>
				.collect(Collectors.toList()); // List<Departmentdto>
		
	}

	@Override
	public EmployeeDTO addNewEmployee(Long agencyid,@Valid EmployeeDTO dto) {
		Admin admin =admindao.findById(agencyid)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid agency ID!!"));
		
		
		Employee empEntity = mapper.map(dto, Employee.class);
		admin.addEmployee(empEntity);
		Employee persistentEmp = empdao.save(empEntity);
		return mapper.map(persistentEmp, EmployeeDTO.class);
		
	}

	@Override
	public EmployeeCustomerDTO getallcustomerswithemployee(Long empid) {
		Employee emp=empdao.findById(empid).orElseThrow(() -> new ResourceNotFoundException("Invalid employee Id !!!!"));;;
		 List<Customer> customers= customerdao.findAllCustomersByEmpId(empid);
		 List<BankCustomerLoanAddressDTO> BankCustomerLoanAddressDTOs = new ArrayList<>();
		 for(Customer cust:customers) {
			 
			 
			 Loan loan = loandao.findById(cust.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		     System.out.println("this is cureent loan "+loan+" to customerr"+cust);
		        
		     Address address= addressdao.findById(cust.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));;
		     System.out.println("this is cureent loan "+loan+" to customerr"+cust);
			 Bank bank=bankdao.findById(cust.getMyBank().getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid bankId Id !!!!"));
			 
			 
		     BankCustomerLoanAddressDTO bankCustomerLoanAddressDTO = new BankCustomerLoanAddressDTO();
		        
		     bankCustomerLoanAddressDTO.setCustomer(mapper.map(cust, CustomerFeedbackDTO.class));  
		    
		     bankCustomerLoanAddressDTO.setBank(mapper.map(bank, BankDTO.class));
		     bankCustomerLoanAddressDTO.setAdd(mapper.map(address, AddressDTO.class));
		     bankCustomerLoanAddressDTO.setLoan(mapper.map(loan, LoanDTO.class));
		     
		     BankCustomerLoanAddressDTOs.add(bankCustomerLoanAddressDTO) ;
		
		     
		     
			 
		 }
		 
		 EmployeeCustomerDTO empwithallcust=new EmployeeCustomerDTO();
		 
		 empwithallcust.setFirstname(emp.getFirstname());
		 empwithallcust.setLastname(emp.getLastname());
		 empwithallcust.setId(emp.getId());
		 empwithallcust.setCm(BankCustomerLoanAddressDTOs);
		 
		 
		 
		return empwithallcust;
	}

	@Override
	public CustomerFeedbackDTO updateCustomerFeedback(@NotNull Long custId, Map<String, Object> map) {
		Customer customer = customerdao.findById(custId).orElseThrow(() -> new ResourceNotFoundException("Invalid Customer Id!!!!"));
		
		
		
		mapper.map(map,customer);
		
		return mapper.map(customer, CustomerFeedbackDTO.class);
		
	}

	@Override
	public Object deleteEmployee(Long empid) {
		Employee employee=empdao.findById(empid).orElseThrow(() -> new ResourceNotFoundException("Invalid Customer Id!!!!"));
		 List<Customer> customers= customerdao.findAllCustomersByEmpId(empid);
//		 for(Customer cust:customers) {
//			
//			 cust.setMyEmp(null);
//			 
//		 }
		 
		// empdao.delete(employee);
		 
		 return new ApiResponse ("Employee Details with ID " + employee.getId() + " deleted successfully....");
	}

	@Override
	public Boolean loginemployee(String email, String password) {
		boolean result = empdao.existsByEmailAndPassword(email,password);
		return result;
	}
	
	

	
	
}
