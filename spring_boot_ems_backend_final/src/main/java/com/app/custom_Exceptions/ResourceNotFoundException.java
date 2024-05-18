package com.app.custom_Exceptions;

public class ResourceNotFoundException extends RuntimeException{
	public ResourceNotFoundException(String Mesg) {
		super(Mesg);
	}

}
