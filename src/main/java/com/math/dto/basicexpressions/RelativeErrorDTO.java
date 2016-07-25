package com.math.dto.basicexpressions;

import java.io.Serializable;

public class RelativeErrorDTO implements Serializable {
    private Double exactValue;
    private Double estimatedValue;

    public RelativeErrorDTO() {
    }

    public RelativeErrorDTO(Double exactValue, Double estimatedValue) {
        this.exactValue = exactValue;
        this.estimatedValue = estimatedValue;
    }

    public Double getExactValue() {
        return exactValue;
    }

    public void setExactValue(Double exactValue) {
        this.exactValue = exactValue;
    }

    public Double getEstimatedValue() {
        return estimatedValue;
    }

    public void setEstimatedValue(Double estimatedValue) {
        this.estimatedValue = estimatedValue;
    }

    @Override
    public String toString() {
        return "RelativeErrorDTO{" +
                "exactValue='" + exactValue + '\'' +
                ", estimatedValue='" + estimatedValue + '\'' +
                '}';
    }
}
