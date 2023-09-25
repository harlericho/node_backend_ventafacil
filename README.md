# Backend Sistema VentaFacil

## Listado de rutas

- Usuarios
- Roles
- Categorias
- Productos

## Rutas de App

### GET

- Roles:

  - 🌐 [http://127.0.0.1:9000/api/roles](http://127.0.0.1:9000/api/roles)

- People:

  - 🌐 [http://127.0.0.1:9000/api/people](http://127.0.0.1:9000/api/people)

- Categories:

  - 🌐 [http://127.0.0.1:9000/api/categories](http://127.0.0.1:9000/api/categories)

- Products:
  - 🌐 [http://127.0.0.1:9000/api/products](http://127.0.0.1:9000/api/products)

### POST

##### Categories:

- 🌐 [http://127.0.0.1:9000/api/categories](http://127.0.0.1:9000/api/categories)

##### Esquema de Json enviar Datos Categories:

```
  {
  "id": "100",
  "name": "Bebidas"
  }
```

##### Products:

- 🌐 [http://127.0.0.1:9000/api/products](http://127.0.0.1:9000/api/products)

##### Esquema de Json enviar Datos Products:

```
  {
  "reference": "10001",
  "code": "10001",
  "name": "AGUA CIELO",
  "pricebuy": "0.90",
  "pricesell": "1.20",
  "category": "100",
  "taxcat":"001"
  }
```
