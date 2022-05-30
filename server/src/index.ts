import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './Schema'
import cors from 'cors'
import { DataSource } from 'typeorm'

const main = async () => {
  await new DataSource({
    type: "mysql",
    database: "Docker-CRUD-FULLSTACK",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [],
  })

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(3001, () => {
    console.log("SERVER PORT 3001 🔥")
  })
}

main().catch((err => {
  console.log(err)
}))