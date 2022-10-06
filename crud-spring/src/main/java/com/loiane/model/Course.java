package com.loiane.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

/*
 * Lombok - ira gerar automaticamente os gets/sets, construtor, toString, por meio da anotação:
 * @Getter - ira gerar os gets 
 * @Setter - ira gerar os sets
 * @Data - equivalente aos @Getter/@Setter/@RequiredArgsContructor/@ToString/@EqualsAnHashCode
 * 
 * @Entity - especificando a classe como entidade para o banco de dados
 * @Table(name = "cursos") - especificar o nome da tabela 
 * @Id - definir a chave primaria 
 * @GeneratedValue(strategy = GenerationType.AUTO) - valor gerado automaticamente pelo banco de dados
 * @Column(name = "nome") - alterar o nome da coluna
 * @Column(length = 200) - alterar o tamanho permitido de caracteres - padrão é 255.
 * @Column(nullable = false) - não ira aceitar valores nulos
 * @JsonProperty - ira transformar o id em _id.
 * @JsonIgnore - ira ignorar o campo id
 */

@Data
@Entity
public class Course {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO) 
    @JsonProperty("_id")
    //@JsonIgnore
    private Long id;

    @Column(length = 200, nullable = false) 
    private String name;

    @Column(length = 10, nullable = false)
    private String category;


}
