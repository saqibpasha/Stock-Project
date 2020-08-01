package com.saqib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRepo 
{
	
	@Autowired
	Repos repo;

	public void addStockPrice(StockPrice stockprice) 
	{
		repo.save(stockprice);
		
	}

	public Iterable<StockPrice> getStockPrice(String companyCode, String start, String end) 
	{
		return repo.getStockPrice(companyCode, start, end);
	}

	public Iterable<StockPrice> listStockPrice() 
	{
		return repo.findAll();
	}

}
