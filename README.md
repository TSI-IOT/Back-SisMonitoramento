## Criar novo usuário

    POST http://localhost:5000/user
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
 
    {
      "name":"Evandro da Silva",
      "email": "evandro.silva@gmail.com",
      "password": "123456",
      "role": "USER",
      "userActive": "TRUE"
    }
Response code: 200 (OK);

## Autenticar

    POST http://localhost:5000/user/authenticate
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
    {
	    "email": "maria.silva@gmail.com", 
	    "password": "123456"
    }
Resposta:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1yM"
    }
Response code: 200 (OK);



## Listar Usuários
#### observações:
É necessário estar autenticado e passar o token no campo `x-auth-token`\
Número da página: `/page/0`\
Quantidade de itens por página: `/quantityPerPage/10`

    GET http://localhost:5000/user/page/0/quantityPerPage/10  
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1yM

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
ID do usuário: `id/5db8ea3e83748f07dc63b484`

    GET http://localhost:5000/user/id/5db8ea3e83748f07dc63b484  
    Accept: */*  
    Cache-Control: no-cache  
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU3MjQwMDc3MiwiZXhwIjoxNTcyNDg3MTcyfQ.GLoFIig5roxsY6Vwd_ZdQPOwzIxSWupTkfjhuF7D1y

## Remover Usuário
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`.\
ID do usuário: `id/5db8ea3e83748f07dc63b484`


    DELETE http://localhost:5000/user/id/5e7d46775070c804082cc3cb
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3ZDU4YWI0NzJmZmU0NWM0MzNlMDI0In0sImlhdCI6MTU4NTI3MzA3Nn0.pLIPxLbt_9Z-yicaRKPzIDzAtk1r2obAOC20Xq5bKnQ

Response code: 200 (OK);


## Criar novo Grupo
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`\
É necessário ter o campo `Content-Type: application/json`

    POST http://localhost:5000/group
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU4NTI2MjUxMX0.CDJXfe3rpSLGRdypVJWPwgI_R-U_ERmgHFaBGTXRDnc

    {
        "title":"Lab 88"
    }

Response code: 200 (OK);

## Listar todos os Dispositivos
#### observações:

É necessário estar autenticado e passar o token no campo  `x-auth-token`

    GET http://localhost:5000/device
    Accept: */*
    Cache-Control: no-cache
    x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWRiOGVhM2U4Mzc0OGYwN2RjNjNiNDg0In0sImlhdCI6MTU4NTI2MjUxMX0.CDJXfe3rpSLGRdypVJWPwgI_R-U_ERmgHFaBGTXRDnc

Exemplo de Resposta:

    [
      {
        "_id": "5db592e736d93f11f4e8003b",
        "name": "Temperatura Lab 01",
        "password": "$2a$10$WilKZoDTgQkeaNH07DYv7.LLQIQ.l7sLrHAZ.DHc./JEA5y/b6Xw.",
        "deviceType": "ISSUER",
        "unitOfMeasurement": "CELSIUS",
        "date": "2019-10-27T12:51:51.384Z",
        "user": "5db47bc42f7bfc170c856f93",
        "__v": 0
      },
      {
        "_id": "5db5966c36d93f11f4e8003c",
        "name": "Temperatura Lab 02",
        "password": "$2a$10$2fsq.vWOzMysh5m6LU9FPOwx4rl5KpTClXVqdJkegrQ72iTA6/VTG",
        "deviceType": "ISSUER",
        "unitOfMeasurement": "CELSIUS",
        "date": "2019-10-27T13:06:52.814Z",
        "user": "5db47bc42f7bfc170c856f93",
        "__v": 0
      },
      {
        "_id": "5e698183c8dab12a40c3f733",
        "name": "lab69",
        "password": "$2a$10$Q/ucsLOdQLjYMYZU6merVuds.FETSefygqhbKQ8Mdi0XlCoflbddK",
        "deviceType": "ISSUER",
        "unitOfMeasurement": "CELSIUS",
        "date": "2020-03-12T00:25:39.681Z",
        "__v": 0
      }
    ]


Response code: 200 (OK);
