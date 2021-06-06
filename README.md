# Challenge Entria

Create a CRUD using graphql and mongodb.

## Getting Started

---

    # MongoDB
    - You have to create a database (only MongoDB). And then connect this application with your own database.
    - In order to work, use the same model in src/model/user.js.

    # install dependencies
    $ yarn

    # start project
    $ yarn dev

    # see graphql interface on localhost link
    http://localhost:4001/graphql

## GraphQL Creation

---

- Create User

        mutation {
            createUser(data: {
                firstName: "Leandro",
                lastName: "Alencar",
                email: " zzleandrobritozz@gmail.com"
            }) {
                _id
                firstName
                lastName
                email
            }
        }

- Query User

        query {
            users {
                _id
                firstName
                lastName
                email
            }
        }

- Update User

        mutation {
            updateUser (id: "60bc0f18d51ab63f3cabb2ca", data: {
                firstName: "Leandro",
                lastName: "Brito",
                email: "zzleandrobritozz@gmail.com"
            }) {
                _id
                firstName
                lastName
                email
            }
        }

- Delete User

        mutation{
            deleteUser(id: "60bc0f18d51ab63f3cabb2ca")
        }
