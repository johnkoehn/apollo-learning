const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');


const server = new ApolloServer({
    typeDefs,
    cors: true,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        }
    }
})

server
    .listen()
    .then(() => {
        console.log('Server is running 😄! Query at https://studio.apollographql.com/dev')
    })
