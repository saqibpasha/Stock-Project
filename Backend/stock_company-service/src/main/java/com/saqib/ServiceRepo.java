package com.saqib;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ServiceRepo 
{
	@Autowired
	Repos repo;
	
	@Autowired
	Feign config;

	public void addNewCompany(StockCompany stockCompany) 
	{
		repo.save(stockCompany);
	}

	public Iterable<StockCompany> listCompany() 
	{
		return repo.findAll();
	}

	public void deleteCompanyById(int id) 
	{
		repo.deleteById(id);
		
	}

	public Optional<StockCompany> getCompanyByCode(String code) 
	{
		return repo.findByCompanyCode(code);
	}

	public Iterable<StockCompany> getCompanyBySector(String sector) 
	{
		return repo.findBySector(sector);
	}

	public Optional<StockCompany> getCompanyByName(String companyName)
	{
		return repo.findByCompanyName(companyName);
	}

	public Optional<StockCompany> getCompanyById(int id) 
	{
		
		return repo.findById(id);
	}

	public Iterable<String> getSector() 
	{
		return repo.getSector();
	}

	public Iterable<StockExchange> listStockExchange() 
	{
		return config.listStockExchange();
	}


	
	
	
	

}
