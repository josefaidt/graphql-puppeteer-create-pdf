const fs = require('fs')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { FILE_STORE, PORT } = require('./config')
const init = require('./init')
const resolvers = require('./resolvers')

const typeDefs = fs.readFileSync('schema.graphql', 'utf-8')

const server = new ApolloServer({ typeDefs, resolvers })

async function main() {
  await init()
  const app = express()
  server.applyMiddleware({ app, path: '/graphql' })
  app.use('/files', express.static(FILE_STORE))
  app.listen(PORT, () => console.log(`🚀  Server ready at http://localhost:${PORT}`))
}

main()
