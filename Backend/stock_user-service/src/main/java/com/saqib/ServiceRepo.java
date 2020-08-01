package com.saqib;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRepo 
{
	@Autowired
	Repos repo;
	

	public void addStockUser(StockUser stockuser) 
	{
		repo.save(stockuser);
		
	}


	public Optional<StockUser> getUserById(int id) 
	{
		return repo.findById(id);
	}


	public Optional<StockUser> getUserByUsername(String username) 
	{
		return repo.findByUsername(username);
	}


	public Optional<StockUser> getUserByEmail(String email) 
	{
		return repo.findByEmail(email);
	}


	

}
