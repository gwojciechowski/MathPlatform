package com.math.dto.statisticelement;

import java.io.Serializable;
import java.util.List;

public class RationalNumbersDTO implements Serializable {
    private List<Double> numbers;

    public RationalNumbersDTO() {
    }

    public RationalNumbersDTO(List<Double> numbers) {
        this.numbers = numbers;
    }

    public List<Double> getNumbers() {
        return numbers;
    }

    public void setNumbers(List<Double> numbers) {
        this.numbers = numbers;
    }

    @Override
    public String toString() {
        return "RationalNumbersDTO{" +
                "numbers=" + numbers +
                '}';
    }
}
