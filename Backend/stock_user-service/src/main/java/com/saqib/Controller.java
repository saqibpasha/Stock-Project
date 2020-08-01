package com.saqib;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller 
{
	@Autowired
	ServiceRepo service;
	
	@RequestMapping(method=RequestMethod.POST, value="/addStockUser")
	void addNewUser(@RequestBody StockUser stockuser) 
	{
		service.addStockUser(stockuser);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getUserById/{id}")
	Optional<StockUser> getUserById(@PathVariable int id) 
	{
		return service.getUserById(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getUserByUsername/{username}")
	Optional<StockUser> getUserByUsername(@PathVariable String username) 
	{
		return service.getUserByUsername(username);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getUserByEmail/{email}")
	Optional<StockUser> getUserByEmail(@PathVariable String email) 
	{
		return service.getUserByEmail(email);
	}
	

}
