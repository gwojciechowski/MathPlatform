package com.math.repositories;

import com.math.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface PersonRepository extends JpaRepository<Person, Serializable> {
    Person findUserByEmail(String email);
}
