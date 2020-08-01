package com.saqib;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Repos extends CrudRepository<StockExchange, Integer>
{
	
}
