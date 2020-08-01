package com.saqib;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class StockUserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockUserServiceApplication.class, args);
	}

}
