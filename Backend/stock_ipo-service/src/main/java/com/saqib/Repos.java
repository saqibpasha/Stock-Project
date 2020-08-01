package com.saqib;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface Repos extends CrudRepository<StockIpo, Integer>
{
	@Query(nativeQuery = true, value = "select * from stock_ipo  order by date ")
	Iterable<StockIpo> listIpoByDate();
}
