package com.app.exception_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?>handleMethodArgumentNotValidException(MethodArgumentNotValidException e){
		List<FieldError> list=e.getFieldErrors();
		
		Map<String,String> errormap=list.stream()
				.collect(Collectors.toMap(FieldError::getField,FieldError::getDefaultMessage));
		
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				.body(errormap);
		
		
	}

}
