package com.loiane.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class HelloController {
    
    /* @RequestMapping(method = {RequestMethod.}, produces = JSON )
     * method = RequestMethod - os mais usados é POST/GET/PUT
     * produces = JSON - especificar o quer gerar, geralmente é usado o JSON
     */
    @GetMapping
    public String hello(){
        return "Hello, World!";
    }
}
