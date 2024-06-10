# Node Reference Architecture - Backend 

## How to setup this starter kit ?.

### Pre Requisite Tools and Software

* #### Node JS - Manadotry
* #### Git - Manadotry
* #### VS Code IDE - Optional


### Code Setup Steps:

#### STEP - 1

* Fork this repository from git to create your own repositry on github.
* Clone newly created repositry on your local computer using below command.

```bash
  git clone https://link-to-project
```
* Go to the project directory

```bash
  cd my-project
```
* Install dependencies

```
* Setup DB (Postgres is being used)

```bash
  for quick you can use docker version of DB
  
  1. pull image
    docker pull postgres
  2. Run instance
    docker run --name local-postgres -e POSTGRES_PASSWORD=xyz -p 5432:5432 -d postgres:latest

```
* Change environment variables in code

```bash
  Change DB connection details in .env file

```

###

```bash
  npm install
```
Start the server

```bash
  npm run start:dev	
```
* App should be started without any issue
* wk_user table should be created in DB

```
* Open below url in your browser once your project is started.

```bash
  http://localhost:3500/swagger
  

* Here are sample endpoints  
```

POST - http://localhost:3500/api/wk/users

{"user":"U1", "name":"Ram"}

201

{
  "code": 201,
  "message": "Success",
  "data": {
    "id": "U1",
    "name": "Ram"
  }
}



GET - http://localhost:3500/api/wk/users/U1

{
  "code": 200,
  "message": "Success",
  "data": {
    "id": "U1",
    "name": "Ram",
    "createdAt": "2024-06-10T01:33:45.685Z",
    "updatedAt": "2024-06-10T01:33:45.685Z"
  }
}

GET - http://localhost:3500/api/wk/users

{
  "code": 200,
  "message": "Success",
  "data": [
    {
      "id": "U2",
      "name": "Krishna",
      "createdAt": "2024-06-10T02:25:46.353Z",
      "updatedAt": "2024-06-10T02:25:46.353Z"
    },
    {
      "id": "U1",
      "name": "Ram",
      "createdAt": "2024-06-10T01:33:45.685Z",
      "updatedAt": "2024-06-10T01:33:45.685Z"
    }
  ]
}


PATCH - http://localhost:3500/api/wk/users/U1

{"user":"U1", "name":"Ram"}


{
  "code": 200,
  "message": "Success",
  "data": {
    "id": "U1",
    "name": "Ram",
    "createdAt": "2024-06-10T01:33:45.685Z",
    "updatedAt": "2024-06-10T01:33:45.685Z",
    "user": "U1"
  }
}



DELETE - http://localhost:3500/api/wk/users/U1

{
  "code": 200,
  "message": "Success",
  "data": {
    "raw": [],
    "affected": 1
  }
}
