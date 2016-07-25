package com.math.controllers;

import com.math.dto.RationalNumberDTO;
import com.math.dto.basicexpressions.*;
import com.math.services.BasicExpressionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;

@RestController
@RequestMapping("/section/basic/")
public class BasicExpressionsController implements Serializable {

    @Autowired
    private BasicExpressionsService basicExpressionsService;

    @RequestMapping(value = "romanToArabic", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NaturalNumberDTO romanToArabic(@RequestBody RomanNumberDTO dto) {
        return new NaturalNumberDTO(basicExpressionsService.romanToArabic(dto.getRoman()));
    }

    @RequestMapping(value = "arabicToRoman", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RomanNumberDTO arabicToRoman(@RequestBody NaturalNumberDTO dto) {
        return new RomanNumberDTO(basicExpressionsService.arabicToRoman(dto.getNumber()));
    }

    @RequestMapping(value = "primeFactors", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public PrimeFactorsDTO primeFactors(@RequestBody NaturalNumberDTO dto) {
        return new PrimeFactorsDTO(basicExpressionsService.primeFactors(dto.getNumber()));
    }

    @RequestMapping(value = "nwd", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NaturalNumberDTO nwd(@RequestBody NwdDTO dto) {
        return new NaturalNumberDTO(basicExpressionsService.nwd(dto.getA(), dto.getB()));
    }

    @RequestMapping(value = "nww", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public NaturalNumberDTO nww(@RequestBody NwwDTO dto) {
        return new NaturalNumberDTO(basicExpressionsService.nww(dto.getA(), dto.getB()));
    }

    // removal of the irrationality of the denominator

    @RequestMapping(value = "relativeError", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RationalNumberDTO relativeError(@RequestBody RelativeErrorDTO dto) {
        return new RationalNumberDTO(basicExpressionsService.relativeError(dto.getExactValue(), dto.getEstimatedValue()));
    }

    @RequestMapping(value = "absoluteError", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RationalNumberDTO absoluteError(@RequestBody AbsoluteErrorDTO dto) {
        return new RationalNumberDTO(basicExpressionsService.absoluteError(dto.getExactValue(), dto.getRelativeError()));
    }

    @RequestMapping(value = "interestCapitalization", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public RationalNumberDTO interestCapitalization(@RequestBody InterestCapitalizationDTO dto) {
        return new RationalNumberDTO(basicExpressionsService.interestCapitalization(dto.getInitialCapital(), dto.getInterestRate(),
                dto.getAmountOfInterest()));
    }

}
