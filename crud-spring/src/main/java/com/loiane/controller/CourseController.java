package com.loiane.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.loiane.model.Course;
import com.loiane.repository.CourseRepository;

import lombok.AllArgsConstructor;

/*
 * @RestController - essa classe contem um endpoint/URL que pode acessar uma API
 * @RequestMapping() - endpoint exposto
 * @GetMapping - possui a mesma funcionalidade do @RequestMapping(method = RequestMethod.GET)
 * @ResponseBody - possui o FasterXML, irá transformar os parametros do metodo de XML para a instancia do objeto Java e vice-versa
 */
@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {
    
    private final CourseRepository courseRepository;

    @GetMapping
    public @ResponseBody List<Course> list(){
        return courseRepository.findAll();
    }
}
