package com.app.service;

import java.util.Map;

import javax.validation.constraints.NotNull;

public interface AddressService {

	
	Object  patchCustomerAddress(@NotNull Long custId, Map<String, Object> map);

}
