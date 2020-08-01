package com.saqib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ServiceRepo 
{
	@Autowired
	Repos repo;
	
	

	public void addStockExchange(StockExchange stock_exchange) 
	{
		repo.save(stock_exchange);	
	}

	public Iterable<StockExchange> listCompany() 
	{
		return repo.findAll();
	}

	
	
	
	

}
