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
    Mutation: {
        // increments a track's numberOfViews property
        incrementTrackViews: async (parent, { id }, { dataSources }, info) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track
                };
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null
                }
            }
        },
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