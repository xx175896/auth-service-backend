package com.example.authservicebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class AuthServiceBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceBackendApplication.class, args);
    }

}
