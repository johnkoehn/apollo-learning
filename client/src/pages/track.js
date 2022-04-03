import React from 'react';
import {gql, useQuery} from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
query TrackQuery($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
    author {
      id
      name
      photo
    }
    thumbnail
    length
    description
    numberOfViews
    modulesCount
  }
}
`


const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
      variables: { trackId }
  });

    return (
        <Layout>
            <QueryResult error={error} data={data} loading={loading}>
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    );
};

export default Track;