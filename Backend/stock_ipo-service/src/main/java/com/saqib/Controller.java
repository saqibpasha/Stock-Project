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
	
	@RequestMapping(method=RequestMethod.POST, value="/addStock_Ipo")
	void addNewIpo(@RequestBody StockIpo stock_ipo) 
	{
		service.addStock_Ipo(stock_ipo);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/listStock_Ipo")
	Iterable<StockIpo> listIpo() 
	{
		return service.listIpo();
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/updateIpo/{id}")
	void updateIpo(@RequestBody StockIpo stock_ipo,@PathVariable int id) 
	{
		service.updateIpo(stock_ipo);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/getIpoById/{id}")
	Optional<StockIpo> getIpoById(@PathVariable int id) 
	{
		return service.getIpoById(id);
	}
	

}
