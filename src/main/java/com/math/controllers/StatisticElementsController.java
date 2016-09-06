package com.math.controllers;

import com.math.dto.RationalNumberDTO;
import com.math.dto.statisticelement.RationalNumbersDTO;
import com.math.dto.statisticelement.VarianceDTO;
import com.math.services.StatisticElementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;

@RestController
@RequestMapping("/section/statistic/")
public class StatisticElementsController implements Serializable {

    @Autowired
    private StatisticElementsService statisticElementsService;

    @RequestMapping(value = "arithmeticAverage", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RationalNumberDTO arithmeticAverage(@RequestBody RationalNumbersDTO dto) {
        return new RationalNumberDTO(statisticElementsService.arithmeticAverage(dto.getNumbers()));
    }

    @RequestMapping(value = "median", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RationalNumberDTO median(@RequestBody RationalNumbersDTO dto) {
        return new RationalNumberDTO(statisticElementsService.median(dto.getNumbers()));
    }

    @RequestMapping(value = "varianceAndDeviation", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public VarianceDTO varianceAndDeviation(@RequestBody RationalNumbersDTO dto) {
        return statisticElementsService.varianceAndDeviation(dto.getNumbers());
    }
}
