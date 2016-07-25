package com.math.dto.basicexpressions;

import java.io.Serializable;
import java.util.List;

public class PrimeFactorsDTO implements Serializable {
    private List<Integer> factors;

    public PrimeFactorsDTO() {
    }

    public PrimeFactorsDTO(List<Integer> factors) {
        this.factors = factors;
    }

    public List<Integer> getFactors() {
        return factors;
    }

    public void setFactors(List<Integer> factors) {
        this.factors = factors;
    }

    @Override
    public String toString() {
        return "PrimeFactorsDTO{" +
                "factors=" + factors +
                '}';
    }
}
