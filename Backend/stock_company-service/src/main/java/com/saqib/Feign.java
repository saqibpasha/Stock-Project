package com.saqib;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

@FeignClient(url="http://localhost:8301", name="config")
public interface Feign 
{
	@RequestMapping(method=RequestMethod.GET, value="/listStock_Exchange")
	public Iterable<StockExchange> listStockExchange();
}

