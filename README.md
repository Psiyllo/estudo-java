Sistema de Gerenciamento de Pessoas
Um simples sistema de gerenciamento de pessoas, construído com Spring Boot, que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma entidade Person.

Tecnologias Utilizadas
Java 17
Spring Boot 3.2.4
Spring Data JPA
H2 Database
Spring Web
Lombok

Como Usar
Clone este repositório: https://github.com/Psiyllo/Estudo-java.git
Importe o projeto em sua IDE preferida.
Certifique-se de ter o Java 17 e o Maven instalados em sua máquina.
Execute o aplicativo Spring Boot. Isso pode ser feito executando a classe PeopleApplication.java como uma aplicação Java.
O aplicativo estará disponível em http://localhost:8080.

Endpoints Disponíveis
GET /people: Retorna todas as pessoas cadastradas.
GET /people/{id}: Retorna uma pessoa com o ID especificado.
POST /people: Registra uma nova pessoa.
PUT /people/{id}: Atualiza os dados de uma pessoa existente.
DELETE /people/{id}: Remove uma pessoa existente.

![image](https://github.com/Psiyllo/Estudo-java/assets/166714883/3f71007f-5171-461f-9da9-e6c5c4f61074)
