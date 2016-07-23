package com.math.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ROLE")
public class Role implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RoleSeqGen")
    @SequenceGenerator(name = "RoleSeqGen", sequenceName = "role_seq", allocationSize = 1)
    @Column(name = "role_id")
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;

    public Role() {
    }

    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
