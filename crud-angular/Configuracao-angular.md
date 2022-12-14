# CRUD Angular + Spring Boot
<a href="https://github.com/loiane/curso-angular">GitHub</a>


### Instalação
- Instalar a última versao do Node.js ``$ node -v``
- Instalar o angular ``$ npm install -g @angular/cli ``
- Verificar se o angular foi instalado ``$ ng --version``
- Acessar a pasta do projeto e iniciar um novo projeto angular ``$ ng new crud-angular``
  - Would you like to add Angular routing? [y]
  - Which stylesheet format would you like to use? [CSCC]

### Instalar o Angular Material
**Link:** https://material.angular.io/ <br>
**Comandos**: ``$ ng add @angular/material``
  - Would you like to proceed? [y]
  - Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)
    - [Indigo/Pink] [ Preview: https://material.angular.io?theme=indigo-pink ] 
    - Deep Purple/Amber [ Preview: https://material.angular.io?theme=deeppurple-amber ] 
    - Pink/Blue Grey [ Preview: https://material.angular.io?theme=pink-bluegrey ] 
    - Purple/Green   [ Preview: https://material.angular.io?theme=purple-green ] 
    - Custom 
  - Set up global Angular Material typography styles? [y]
  - Include the Angular animations module? 
    - [Include and enable animations]
    - Include, but disable animations 
    - Do not include 

### Extensões VSCode
- Angular Extension Pack
- Java + Spring Extension Pack

### Expansão usadas
- TS Hero: Organize imports

### Links uteis
- https://material.angular.io/ 
- https://angular.io/guide/lazy-loading-ngmodules
- https://material.io/design/color/the-color-system.html#tools-for-picking-colors
- https://angular.io/guide/typed-forms

### Comandos usados
- ``$ ng serve`` - Para executar a aplicação angular 
- ``$ ng g m courses --routing`` (ou $ ng generate module <nome_do_modulo> --routing) - Criar o modulo de cursos, podendo organizar de forma logica os componentes no Angular, e criando o modulo de roteamento
- ``$ ng g c courses/courses`` (ou $ ng generate component <nome_do_componente>) - criar um componente no modulo cursos 
- ``$ ng g interface courses/model/course`` - criar o arquivo para interface dentro do modulo de courses, ficará na pasta model, mensagem de retorno: CREATE src/app/courses/model/course.ts
- ``$ ng g m shared/app-material`` - criar modulo para armazenar todos os imports do Angular Material que será compartilhado entre outros modulos da aplicação
- ``$ ng g s courses/services/courses`` (ou $ ng generate service <nome_do_modulo> <nome_do_diretorio> <nome_do_service>) - criar um service 
- ``$ ng g m shared`` - modulo de erro
- ``$ ng g c shared/components/error-dialog`` - componente de error - mensagem de erro para o usuario
- ``$ ng g pipe shared/pipes/category`` - criação do pipe para inclusão do icone junto com as categorias
- ``$ npm run start`` - iniciar a aplicacao apos a configuracao do proxy
- ``$ ng g c courses/course-form`` - componente de formulário
- ``$ ng g c courses/courses-list`` - componente para renderizar o material table
- ``$ ng g resolver courses/guards/course`` - criar um resolver (guarda de rotas), ao clicar no curso para editar, irá obter o id deste curso e precisará carregar todas as informações antes de exibir na tela e fazer o redirecionamento, dependendo do tamanho os dados não é uma boa opção. 


### Update da versão Angular
**Links:** 
- https://angular.io/cli/update
- https://update.angular.io/
**Comandos:**
- Select the options matching your project:
  - Angular versions: 
    - From: [versao atual] 
    - To: [versao nova]
  - App Complexity: [Basic]
  - Other Dependecies: [I use Angular Material]

#### Comandos para update da versão Angular
- ``$ node -v`` - versão do node
- ``$ ng update`` - atualizar a versao do Angular
- ``$ ng update @angular/cli@13.3.3 @angular/core@13.3.3 @angular/cdk@13.3.3 @angular/material@13.3.3`` - definir a versao que será atualizada (quando tem uma versão release, o ideal é definir a versão que deseja atualizar)
- ``$ ng serve`` - rodar a aplicação
- ``$ ng update @angular/cli @angular/core @angular/cdk @angular/material`` - atualizar para a ultima versão do Angular
- ``$ npm run start`` - rodar a aplicação
