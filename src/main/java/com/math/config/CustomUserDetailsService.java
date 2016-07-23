package com.math.config;

import com.math.entities.Person;
import com.math.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private PersonService personService;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Person person = personService.findUserByEmail(userName);

        if (person == null) {
            throw new UsernameNotFoundException("UserName " + userName + " not found");
        }

        if(!person.getStatus().equals("ACTIVE")) {
            throw new UsernameNotFoundException("UserName " + userName + " is not active");
        }

        return new SecurityUser(person);
    }
}
