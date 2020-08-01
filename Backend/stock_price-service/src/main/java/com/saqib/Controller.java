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
	
	@RequestMapping(method=RequestMethod.POST, value="/addStockPrice")
	void addStockPrice(@RequestBody StockPrice stockprice) 
	{
		service.addStockPrice(stockprice);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getStockPrice/{companyCode}/{start}/{end}")
	Iterable<StockPrice> getStockPrice(@PathVariable String companyCode,@PathVariable String start,@PathVariable String end) 
	{
		return service.getStockPrice(companyCode,start,end);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/listStockPrice")
	Iterable<StockPrice> listStockPrice() 
	{
		return service.listStockPrice();
	}

}
