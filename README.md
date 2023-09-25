# Backend Sistema VentaFacil

## Listado de rutas

- Usuarios
- Roles
- Categorias
- Productos

## Rutas de App

### GET

- Roles:

  - 🌐 [http:/127.0.0.1:9000/roles](http://127.0.0.1:9000/roles)

- People:

  - 🌐 [http:/127.0.0.1:9000/people](http://127.0.0.1:9000/people)

- Categories:

  - 🌐 [http:/127.0.0.1:9000/categories](http://127.0.0.1:9000/categories)

- Products:
  - 🌐 [http:/127.0.0.1:9000/products](http://127.0.0.1:9000/products)

### POST

##### Categories:

- 🌐 [http:/127.0.0.1:9000/categories](http://127.0.0.1:9000/categories)

##### Esquema de Json enviar Datos Categories:

```
  {
  "id": "100",
  "name": "Bebidas"
  }
```

##### Products:

- 🌐 [http:/127.0.0.1:9000/products](http://127.0.0.1:9000/products)

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
