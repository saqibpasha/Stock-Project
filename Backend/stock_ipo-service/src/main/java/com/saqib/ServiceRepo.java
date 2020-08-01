package com.saqib;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceRepo 
{
	@Autowired
	Repos repo;

	public void addStock_Ipo(StockIpo stock_ipo) 
	{
		repo.save(stock_ipo);	
	}

	public Iterable<StockIpo> listIpo() 
	{
		return repo.listIpoByDate();
	}

	public void updateIpo(StockIpo stock_ipo) 
	{
		repo.save(stock_ipo);
		
	}

	public Optional<StockIpo> getIpoById(int id)
	{
		return repo.findById(id);
	}
	
	

}
