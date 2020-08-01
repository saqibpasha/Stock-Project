package com.saqib;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Repos extends CrudRepository<StockPrice, Integer>
{
	@Query(nativeQuery = true, value = "select * from stock_price where company_code=?1 AND date>?2 AND date<?3 order by date ")
	Iterable<StockPrice> getStockPrice(String companyCode, String start, String end);

}
