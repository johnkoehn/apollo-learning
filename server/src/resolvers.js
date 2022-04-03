const resolvers = {
    Query: {
        // returns an array of tracks that will be used to populate homepage
        tracksForHome: (parent, args, { dataSources }, info) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: (parent, { id }, { dataSources }, info) => {
            return dataSources.trackAPI.getTrack(id);
        }
    },
    Track: {
        author: ({ authorId }, args, { dataSources }, info) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: (parent, args, { dataSources }, info) => {
            return dataSources.trackAPI.getTrackModules(parent.id);
        }
    }
}

module.exports = resolvers;