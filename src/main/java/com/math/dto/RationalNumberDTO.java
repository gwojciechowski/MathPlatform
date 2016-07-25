package com.math.dto;

import java.io.Serializable;

public class RationalNumberDTO implements Serializable {
    private Double result;

    public RationalNumberDTO() {
    }

    public RationalNumberDTO(Double result) {
        this.result = result;
    }

    public Double getResult() {
        return result;
    }

    public void setResult(Double result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "RationalNumberDTO{" +
                "result=" + result +
                '}';
    }
}
