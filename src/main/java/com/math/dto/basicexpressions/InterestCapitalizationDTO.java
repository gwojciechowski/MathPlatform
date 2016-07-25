package com.math.dto.basicexpressions;

import java.io.Serializable;

public class InterestCapitalizationDTO implements Serializable {
    private Double initialCapital;
    private Double interestRate;
    private Double amountOfInterest;

    public InterestCapitalizationDTO() {
    }

    public InterestCapitalizationDTO(Double initialCapital, Double interestRate, Double amountOfInterest) {
        this.initialCapital = initialCapital;
        this.interestRate = interestRate;
        this.amountOfInterest = amountOfInterest;
    }

    public Double getInitialCapital() {
        return initialCapital;
    }

    public void setInitialCapital(Double initialCapital) {
        this.initialCapital = initialCapital;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public Double getAmountOfInterest() {
        return amountOfInterest;
    }

    public void setAmountOfInterest(Double amountOfInterest) {
        this.amountOfInterest = amountOfInterest;
    }

    @Override
    public String toString() {
        return "InterestCapitalizationDTO{" +
                "initialCapital=" + initialCapital +
                ", interestRate=" + interestRate +
                ", amountOfInterest=" + amountOfInterest +
                '}';
    }
}
