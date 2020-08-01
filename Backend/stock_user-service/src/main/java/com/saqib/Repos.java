package com.saqib;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repos extends CrudRepository<StockUser, Integer> 
{
	Optional<StockUser> findByUsername(String username);
	Optional<StockUser> findByEmail(String email);
}
