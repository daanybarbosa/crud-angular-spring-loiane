# CRUD Angular + Spring Boot
<a href="https://github.com/loiane/curso-angular">GitHub</a>

### Ambiente Java
- ``$ java --version`` - versão do Java
- ``$ javac -version`` - versão do Javac

#### Instalação do Maven
- Link: https://maven.apache.org/download.cgi

### Criação do projeto com Spring
- **Comandos:**
  - Ctrl + Shift + P = abrir os comandos no VsCode
  - Digitar: Spring Initializr: [Create a Maven Project]
- **Specify Spring Boot version:** [2.7.4] (ou a versão mais instavel)
- **Project language:** [Java]
- **Groud:** [com.loiane]
- **Artifact:** (nome do projeto) [crud-spring]
- **Name:** [crud-spring]
- **Description:** [Projeto CRUD Spring + Angular]
- **Package name:** [com.loiane]
- **Packaging:** [Jar]
- **Java version:** [17]
- **Dependencies:** 
  - Spring Web
  - Lombok
  - Spring Data JPA
  - H2 Database
  - Spring Boot DevTools

### Extensões utilizadas
- Thunder Client (similar ao Postman e Insomnia)
- Peacock

### Banco de Dados - H2
<a href="http://localhost:8080/h2-console/">Acesso ao Banco de Dados H2</a>

#### Conexão
- **Login:**
    - Saved Settings: Generic H2 (Embedded)
    - Setting Name: Generic H2 (Embedded)
- **Driver Class:** [org.h2.Driver]
- **JDBC URL:** [jdbc:h2:mem:testdb]
- **User Name:** [sa]
- **Password:** [password]

#### Comandos
- Exibir o conteudo do banco de dados: ``SELECT * FROM COURSE;``

### Update da versão do Spring 
- A atualização das versões é realizada diretamente no arquivo pom.xml. <br>
``<parent> 
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.7.4</version> [alterar a versão do Spring para a mais atual]
		<relativePath/> 
</parent>``

#### Build da aplicação
- Para compilar a aplicação manualmente: ``Barra do Maven -> crud-spring -> Lifecycle -> compile -> run``
- Para gerar o arquivo jar ou war: ``Barra do Maven -> crud-spring -> Lifecycle -> package -> run``
- O arquivo **crud-spring-0.0.1-SNAPSHOT.jar** foi criado dentro da pasta target
