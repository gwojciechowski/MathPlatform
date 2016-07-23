package com.math.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.TreeMap;

@Service
@Transactional
public class BasicExpressionsService {

    private final static TreeMap<Integer, String> map = new TreeMap<Integer, String>();

    static {
        map.put(1000, "M");
        map.put(900, "CM");
        map.put(500, "D");
        map.put(400, "CD");
        map.put(100, "C");
        map.put(90, "XC");
        map.put(50, "L");
        map.put(40, "XL");
        map.put(10, "X");
        map.put(9, "IX");
        map.put(5, "V");
        map.put(4, "IV");
        map.put(1, "I");
    }

    public String arabicToRoman(int number) {
        int l =  map.floorKey(number);
        if ( number == l ) {
            return map.get(number);
        }
        return map.get(l) + arabicToRoman(number-l);
    }

    public int romanToArabic(String number) {
        if (number.startsWith("M")) return 1000 + romanToArabic(number.substring(1));
        if (number.startsWith("CM")) return 900 + romanToArabic(number.substring(2));
        if (number.startsWith("D")) return 500 + romanToArabic(number.substring(1));
        if (number.startsWith("CD")) return 400 + romanToArabic(number.substring(2));
        if (number.startsWith("C")) return 100 + romanToArabic(number.substring(1));
        if (number.startsWith("XC")) return 90 + romanToArabic(number.substring(2));
        if (number.startsWith("L")) return 50 + romanToArabic(number.substring(1));
        if (number.startsWith("XL")) return 40 + romanToArabic(number.substring(2));
        if (number.startsWith("X")) return 10 + romanToArabic(number.substring(1));
        if (number.startsWith("IX")) return 9 + romanToArabic(number.substring(2));
        if (number.startsWith("V")) return 5 + romanToArabic(number.substring(1));
        if (number.startsWith("IV")) return 4 + romanToArabic(number.substring(2));
        if (number.startsWith("I")) return 1 + romanToArabic(number.substring(1));
        return 0;
    }
}
