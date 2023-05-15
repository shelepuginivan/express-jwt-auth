# Express JWT Auth Demo

This is a demo of jwt authorization in Express.

## Endpoints

### 1. POST `/auth/register`

Register new user

#### Request

Requires 3 parameters (in body):

* `username: string`
* `email: string`
* `password: string`

*Request body example:*

```json
{
  "username": "John Doe",
  "email": "email@example.com",
  "password": "qwerty123"
}
```

#### Response

Response body includes following parameters:

* `username: string` - username specified in request body
* `email: string` - email specified in request body
* `role: 'user'` - user role

*Note that this endpoint does not allow to create admin user, you can create admin account in MongoDB client*

Also, server sets http-only cookie `jwt` with generated token.

If there is an account with same `username` or `email`, server responds with status 400. 

*Server response example:*

```json
{
  "username": "John Doe",
  "email": "email@example.com",
  "role": "user"
}
```

### 2. POST `/auth/login`

Login into existing account

#### Request

Requires password and either username or email:

* `username: string (optional)`
* `email: string (optional)`
* `password: string`

*Request body example:*

```json
{
  "username": "John Doe",
  "password": "qwerty123"
}
```

*or*

```json
{
  "email": "email@example.com",
  "password": "qwerty123"
}
```


#### Response

Response body includes following parameters:

* `username: string` - username specified when registered
* `email: string` - email specified when registered
* `role: 'user' | 'admin'` - user role

Server sets http-only cookie `jwt` with generated token.

If account is not created yet, server responds with status 400.
Same happens if required fields (in body) are not provided.

*Server response example:*

```json
{
  "username": "John Doe",
  "email": "email@example.com",
  "role": "user"
}
```

### 3. GET `/auth/logout`

Logout from account

#### Request

*No parameters required*

#### Response

Server deletes cookie `jwt` and respond with status 200.

### GET `/admin/all-users`

Returns array of all users.

#### Request

*No parameters required in body, but jwt is required.*

#### Response

Response body is array of users

*Server response example:*

```json
[
  {
    "username": "John Doe",
    "email": "email@example.com",
    "role": "user"
  },
  {
    "username": "Jane Doe",
    "email": "another@example.com",
    "role": "admin"
  }
]
```

If token is not provided (user is not authenticated) or user role (which is determined by token) is not `'admin'`, server responds with status 403.

## How to run

Clone this repository

```shell
git clone https://github.com/shelepuginivan/express-jwt-auth.git
cd shrinker
```

Setup config file
```shell
cp .env.example .env
vi .env
```

Build the project

```shell
npm install
npm run build
```

Run server

```shell
npm start
```
