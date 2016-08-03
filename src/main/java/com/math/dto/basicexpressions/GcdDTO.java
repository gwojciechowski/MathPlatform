package com.math.dto.basicexpressions;

import java.io.Serializable;

public class GcdDTO implements Serializable{
    private int a;
    private int b;

    public GcdDTO() {
    }

    public GcdDTO(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public int getB() {
        return b;
    }

    public void setB(int b) {
        this.b = b;
    }

    @Override
    public String toString() {
        return "GcdDTO{" +
                "a=" + a +
                ", b=" + b +
                '}';
    }
}
