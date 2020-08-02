package com.saqib;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repos extends CrudRepository<StockCompany, Integer> 
{
	Optional<StockCompany> findByCompanyCode(String code); 
	Iterable<StockCompany> findBySector(String sector);
	Optional<StockCompany> findByCompanyName(String companyName);
	
	@Query(nativeQuery = true, value = "select distinct sector from stock_company")
	Iterable<String> getSector();
	
	
}
