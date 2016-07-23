package com.math.service;

import com.math.repositories.PersonRepository;
import com.math.entities.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person findUserByEmail(String email) {
        return personRepository.findUserByEmail(email);
    }
}

