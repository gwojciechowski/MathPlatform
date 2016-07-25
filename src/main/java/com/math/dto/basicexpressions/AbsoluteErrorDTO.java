package com.math.dto.basicexpressions;

import java.io.Serializable;

public class AbsoluteErrorDTO implements Serializable{
    private Double relativeError;
    private Double exactValue;

    public AbsoluteErrorDTO() {

    }

    public AbsoluteErrorDTO(Double relativeError, Double exactValue) {
        this.relativeError = relativeError;
        this.exactValue = exactValue;
    }

    public Double getRelativeError() {
        return relativeError;
    }

    public void setRelativeError(Double relativeError) {
        this.relativeError = relativeError;
    }

    public Double getExactValue() {
        return exactValue;
    }

    public void setExactValue(Double exactValue) {
        this.exactValue = exactValue;
    }

    @Override
    public String toString() {
        return "AbsoluteErrorDTO{" +
                "relativeError=" + relativeError +
                ", exactValue=" + exactValue +
                '}';
    }
}
