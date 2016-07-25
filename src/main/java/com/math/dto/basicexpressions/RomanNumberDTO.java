package com.math.dto.basicexpressions;

import java.io.Serializable;

public class RomanNumberDTO implements Serializable {
    private String roman;

    public RomanNumberDTO() {
    }

    public RomanNumberDTO(String roman) {
        this.roman = roman;
    }

    public String getRoman() {
        return roman;
    }

    public void setRoman(String roman) {
        this.roman = roman;
    }

    @Override
    public String toString() {
        return "RomanNumberDTO{" +
                "roman='" + roman + '\'' +
                '}';
    }
}
