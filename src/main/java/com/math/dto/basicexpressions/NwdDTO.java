package com.math.dto.basicexpressions;

import java.io.Serializable;

public class NwdDTO implements Serializable{
    private int a;
    private int b;

    public NwdDTO() {
    }

    public NwdDTO(int a, int b) {
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
        return "NwdDTO{" +
                "a=" + a +
                ", b=" + b +
                '}';
    }
}
