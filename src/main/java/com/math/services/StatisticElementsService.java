package com.math.services;

import com.math.dto.statisticelement.VarianceDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StatisticElementsService {

    public Double arithmeticAverage(List<Double> numbers) {
        Double sum = numbers.stream().reduce(0D, (a, b) -> a + b);
        return sum / numbers.size();
    }

    public Double median(List<Double> numbers) {
        numbers.sort((p1, p2) -> p1.compareTo(p2));
        int center = ((numbers.size()-1)/ 2);

        if(numbers.size()%2 == 0) {
            return (numbers.get(center) + numbers.get(++center)) / 2;
        }

        return numbers.get(center);
    }

    public VarianceDTO varianceAndDeviation(List<Double> numbers) {
        Double average = arithmeticAverage(numbers);
        Double sum = 0D;

        for(Double number : numbers) {
            sum += Math.pow(number-average, 2);
        }

        Double variance = sum/numbers.size();

        VarianceDTO varianceDTO = new VarianceDTO();
        varianceDTO.setVariance(variance);
        varianceDTO.setStandardDeviation(Math.sqrt(variance));
        return varianceDTO;
    }
}
