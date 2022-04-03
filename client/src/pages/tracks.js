import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql`
query getTracks {
  tracksForHome {
    id
    title
    author {
      photo
      name
      id
    }
    thumbnail
    length
    modulesCount
  }
}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return <Layout grid>
    <QueryResult error={error} data={data} loading={loading}>
      {
        data?.tracksForHome?.map((track) => {
          return (
            <TrackCard onClick={() => {}} key={track.id} track={track} />
          )
        })
      }
    </QueryResult>
  </Layout>;
};

export default Tracks;
