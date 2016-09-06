package com.math.dto.statisticelement;

import java.io.Serializable;

public class VarianceDTO implements Serializable {
    private Double variance;
    private Double standardDeviation;

    public VarianceDTO() {
    }

    public VarianceDTO(Double variance, Double standardDeviation) {
        this.variance = variance;
        this.standardDeviation = standardDeviation;
    }

    public Double getVariance() {
        return variance;
    }

    public void setVariance(Double variance) {
        this.variance = variance;
    }

    public Double getStandardDeviation() {
        return standardDeviation;
    }

    public void setStandardDeviation(Double standardDeviation) {
        this.standardDeviation = standardDeviation;
    }

    @Override
    public String toString() {
        return "VarianceDTO{" +
                "variance=" + variance +
                ", standardDeviation=" + standardDeviation +
                '}';
    }
}
