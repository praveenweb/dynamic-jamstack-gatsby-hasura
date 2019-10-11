import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    articles {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

export default ({token}) => {
  console.log(token);
  const { loading, error, data } = useQuery(APOLLO_QUERY, {context: {headers: {'Authorization': 'Bearer ' + token}}});

  return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data && data.articles && data.articles.map((article) => {
          return (
            <div key={article.id}>{article.id} - {article.title}</div>
          );
        }
        )}
      </div>
  );
};
