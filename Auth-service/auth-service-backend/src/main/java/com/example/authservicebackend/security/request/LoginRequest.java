package com.example.authservicebackend.security.request;

public record LoginRequest(String email,
                           String password)
{}
