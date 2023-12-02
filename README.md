# SGC


Para usar Swagger, ir a la siguiente url: https://localhost:44485/swagger/index.html

Para importar en Postman la coleccion de requests: https://localhost:44485/swagger/v1/swagger.json

Al momento de crear un nuevo controlador 
- agregar decorador: Route("api/[controller]")]
- heredar de GenericController, que agrega las EP de Get, Post, Put, PutInactive, PutActive
