package com.app.service;

import java.util.Map;

import javax.validation.constraints.NotNull;

public interface LoanService {

	Object patchCustomerLoan(@NotNull Long custId, Map<String, Object> map);
	Object getloanbbyid(Long custId);

}
