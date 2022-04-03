const { gql } = require('apollo-server');

const typeDefs = gql`
    type Mutation {
        incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    }

    type IncrementTrackViewsResponse {
        code: Int!
        success: Boolean!
        message: String!
        track: Track
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        "The number of modules in the Track"
        length: Int
        modulesCount: Int
        "The description of a track"
        description: String
        "The numbver of times the track has been viewed"
        numberOfViews: Int
        modules: [Module!]!
    }

    "Multiple modules compose a single track. A module could be found in more than one track"
    type Module {
        id: ID!
        title: String!
        length: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        track(id: ID!): Track
    }
`;

module.exports = typeDefs;
