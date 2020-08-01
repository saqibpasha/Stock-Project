package com.saqib;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	
	@RequestMapping(method=RequestMethod.POST, value="/addStock_Exchange")
	void addNewCompany(@RequestBody StockExchange stock_exchange) 
	{
		service.addStockExchange(stock_exchange);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/listStock_Exchange")
	Iterable<StockExchange> listCompany() 
	{
		return service.listCompany();
	}
	
	
	
}
	
