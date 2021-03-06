## Criar novo usuário
    POST http://localhost:5000/user
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
        {
          "name":"Manoel Vaz",
          "email": "manoel.vaz@gmail.com",
          "password": "123456"
        }
Response code: 200 (OK);

## Autenticar

    POST http://localhost:5000/user/authenticate
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
    {
	    "email": "manoel.vaz@gmail.com",
        "password": "123456"
    }
Resposta:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTg1NTE2OH0.JCq5LHXByKycjqLLn6RmbdmVTGu3084JzJKgf6xE1zM",
      "user": {
        "nome": "Manoel Vaz",
        "email": "manoel.vaz@gmail.com",
        "role": "ADMINISTRATOR"
      }
    }
Response code: 200 (OK);



## Listar Usuários
#### observações:
É necessário estar autenticado e passar o token no campo `x-auth-token`\
Número da página: `/page/1`\
Quantidade de itens por página: `/quantityPerPage/10`\
Apenas **ADMINISTRADORES** podem listar usuarios.

    GET http://localhost:5000/user/page/1/quantityPerPage/10  
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Resposta:

    [
       {
        "_id": "5db8ea3e83748f07dc63b484",
        "name": "Maria da Silva",
        "email": "maria.silva@gmail.com",
        "date": "2019-10-30T01:41:19.005Z",
        "__v": 0
      },
      {
        "_id": "5db8ed8283748f07dc63b485",
        "name": "Joao da Silva",
        "email": "joao.silva@gmail.com",
        "date": "2019-10-30T01:55:14.472Z",
        "__v": 0
      }
    ]
Response code: 200 (OK);

## Buscar usuário por ID
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`,\
ID do usuário: `id/5db8ea3e83748f07dc63b484`\
Apenas **ADMINISTRADORES** ou o proprio usuario podem realizar a busca.

    GET http://localhost:5000/user/id/5dd893472b15f93d6c681a6f
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

## Remover Usuário
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`.\
ID do usuário: `id/5e83ae1c1b6f8511d8805ae3`\
Apenas **ADMINISTRADORES** podem remover usuarios.


    DELETE http://localhost:5000/user/id/5e83ae1c1b6f8511d8805ae3
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Response code: 200 (OK);


## Criar novo Grupo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
É necessário ter o campo `Content-Type: application/json`

    POST http://localhost:5000/group
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

    {
        "title":"Lab 88"
    }

Response code: 200 (OK);




## Listar Grupos por ID de Usuario
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
Número da página: `/page/1`\
Quantidade de itens por página: `/quantityPerPage/10`\

    GET http://localhost:5000/group/page/1/quantityPerPage/10
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Response code: 200 (OK);



## Remover Grupo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
ID do grupo: `id/5e83ae1c1b6f8511d8805ae3`\
Somente o usuario que criou o grupo pode exclui-lo.

     DELETE http://localhost:5000/group/id/5e83b6deec8feb2f28d771a9
     Accept: */*
     Cache-Control: no-cache
     x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Response code: 200 (OK);




## Criar novo Dispositivo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
É necessário ter o campo `Content-Type: application/json`

    POST http://localhost:5000/device
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

    {
        "name":"Teste",
        "groupId":"5e83b6a7ec8feb2f28d771a8",
        "deviceType":"ISSUER",
        "unitOfMeasurement":"CELSIUS"
    }

Response code: 200 (OK);



## Criar novo Dispositivo de Humidade
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
É necessário ter o campo `Content-Type: application/json`

    POST http://localhost:5000/device/preset/humidity
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY
    
    {
      "name":"Umidade",
      "groupId":"5e83b6a7ec8feb2f28d771a8"
    }

Response code: 200 (OK);



## Criar novo Dispositivo de Temperatura
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
É necessário ter o campo `Content-Type: application/json`

    POST http://localhost:5000/device/preset/temperature
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY
    
    {
      "name":"Temperatura",
      "groupId":"5e83b6a7ec8feb2f28d771a8"
    }

Response code: 200 (OK);




## Listar Dispositivos por ID de Grupo e de Usuario
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
ID do grupo: `/id/5e83b6a7ec8feb2f28d771a8`\
Número da página: `/page/1`\
Quantidade de itens por página: `/quantityPerPage/10`\

    GET http://localhost:5000/device/id/5e83b6a7ec8feb2f28d771a8/page/1/quantityPerPage/10
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Exemplo de Resposta:

    [
      {
        "active": true,
        "_id": "5e83c9810f7db325d4a9b4b1",
        "name": "Teste",
        "groupId": "5e83b6a7ec8feb2f28d771a8",
        "deviceType": "ISSUER",
        "unitOfMeasurement": "CELSIUS",
        "date": "2020-03-31T22:51:45.257Z",
        "userId": "5e83986b4f7c4d1c2cd229ba",
        "password": "$2a$10$4NQ.qbxE1lP6UxdV4xwhPupW8u9qDVogdoP4Ba6eU1qjZeCdOzacm",
        "__v": 0
      },
      {
        "active": true,
        "_id": "5e83d205fdee6626e404f436",
        "name": "Umidade",
        "groupId": "5e83b6a7ec8feb2f28d771a8",
        "date": "2020-03-31T23:28:05.254Z",
        "userId": "5e83986b4f7c4d1c2cd229ba",
        "deviceType": "ISSUER",
        "unitOfMeasurement": "PERCENT",
        "password": "$2a$10$RZ9zUcbcZSWNTH9PFW/uU.OyRHxaGxR1MZOv.ih7nPlMQYOqZRu4G",
        "__v": 0
      }
    ]
Response code: 200 (OK);



## Gerar nova senha do Dispositivo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\

    PUT http://localhost:5000/device/update/password/id/5e83d3237a71e44f641db683
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY
Response code: 200 (OK);




## Remover Dispositivo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
ID do dispositivo: `id/5e83d9ceb3c6ac2ba4bb8c83`

     DELETE http://localhost:5000/device/id/5e83d9ceb3c6ac2ba4bb8c83
     Accept: */*
     Cache-Control: no-cache
     x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTY4NTQzMH0.vs8Tb585HdL99UgBoJTHZMfBN1XZx-fH13SUK-i60qY

Response code: 200 (OK);