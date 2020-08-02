package com.saqib;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.cloud.openfeign.EnableFeignClients;




@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@EnableFeignClients
public class Controller 
{
	
	@Autowired
	ServiceRepo service;
	
	
	
	@RequestMapping(method=RequestMethod.POST, value="/addNewCompany")
	void addNewCompany(@RequestBody StockCompany stockCompany) 
	{
		service.addNewCompany(stockCompany);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/listCompany")
	Iterable<StockCompany> listCompany()
	{
		return service.listCompany();
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/deleteCompany/{id}")
	Iterable<StockCompany> deleteCompanyById(@PathVariable int id) 
	{
		service.deleteCompanyById(id);
		return service.listCompany();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getCompanyByCode/{code}")
	Optional<StockCompany> getCompanyByCode(@PathVariable String code) 
	{
		return service.getCompanyByCode(code);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getCompanyBySector/{sector}")
	Iterable<StockCompany> getCompanyBySector(@PathVariable String sector)
	{
		return service.getCompanyBySector(sector);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getCompanyByName/{companyName}")
	Optional<StockCompany> getCompanyByName(@PathVariable String companyName) 
	{
		return service.getCompanyByName(companyName);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getCompanyById/{id}")
	Optional<StockCompany> getCompanyById(@PathVariable int id) 
	{
		return service.getCompanyById(id);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getSector")
	Iterable<String> getSector()
	{
		return service.getSector();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/listStockExchange")
	Iterable<StockExchange> listStockExchange()
	{
		return service.listStockExchange();
	}
	
	
	
	

}
