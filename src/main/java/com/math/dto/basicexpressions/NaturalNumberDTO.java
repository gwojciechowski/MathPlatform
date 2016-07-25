package com.math.dto.basicexpressions;

import java.io.Serializable;

public class NaturalNumberDTO implements Serializable {
    private int number;

    public NaturalNumberDTO() {
    }

    public NaturalNumberDTO(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "NaturalNumberDTO{" +
                "number=" + number +
                '}';
    }
}
