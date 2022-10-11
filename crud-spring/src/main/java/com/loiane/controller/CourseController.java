package com.loiane.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.loiane.model.Course;
import com.loiane.repository.CourseRepository;

import lombok.AllArgsConstructor;

/*
 * @RestController - essa classe contem um endpoint/URL que pode acessar uma API
 * @RequestMapping() - endpoint exposto
 * @GetMapping - possui a mesma funcionalidade do @RequestMapping(method = RequestMethod.GET)
 * @ResponseBody - possui o FasterXML, irá transformar os parametros do metodo de XML para a instancia do objeto Java e vice-versa
 * @PostMapping - Salvar os dados no banco de dados via POST. Possui a mesma funcionalidade do @RequestMapping(method = RequestMethod.POST)
 * @RequestBody - corpo do request, ira mapear os dados inseridos no formulario para dentro do banco de dados
 * @ResponseEntity - Maneira de retornar o status do HTTP
 *  - Anteriormente estava retornando o status 200 OK, o ideal é retornar o status 201 Created para ter certeza que o objeto foi criado,
 *  - A vantagem de utilizar o ResponseEntity é caso precise manipular o header/cabeçalho/informações do Response
 * @ResponseStatus - é uma alternativa ao @ResponseEntity, é um código padrão que será retornado pelo o método
 *  - Parametros: código (status do HTTP) e o motivo (é mais utilizado quando vai tratar)
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

    /*@PostMapping 
    public void create(@RequestBody Course course){
       //System.out.println(course.getName());
       courseRepository.save(course); //salvar o objeto no Banco de dados
    } */

    /*@PostMapping
    public Course create(@RequestBody Course course){
        //System.out.println(course.getName());
        return courseRepository.save(course);
     } */

    /*@PostMapping
    public ResponseEntity<Course> create(@RequestBody Course course){
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(courseRepository.save(course)); //status 201 - Created
     } */

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course){
        return courseRepository.save(course);
     }
}
