package net.ellise.springboot.controller.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoRestController {
    @GetMapping("/example/chart/data.json")
    public String exampleChartData() {
        return "[" +
                "{ year: 2010, count: 10 },"+
                "{ year: 2011, count: 20 },"+
                "{ year: 2012, count: 15 }"+
                "]\n";
    }
}
