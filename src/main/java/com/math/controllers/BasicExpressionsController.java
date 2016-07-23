package com.math.controllers;

import com.math.services.BasicExpressionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.Serializable;

@Controller
@RequestMapping("/section/basic/")
public class BasicExpressionsController implements Serializable {

    @Autowired
    private BasicExpressionsService basicExpressionsService;

    @RequestMapping(value = "romanToArabic", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String romanToArabic() {
        return String.valueOf(basicExpressionsService.romanToArabic("MMCCCXXIII")); // test
    }

    @RequestMapping(value = "arabicToRoman", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String arabicToRoman() {
        return basicExpressionsService.arabicToRoman(2323); // test
    }
}
