import React, { useState, useEffect } from "react"
import { checkSession } from "./src/utils/auth"
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/apollo/client';

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => checkSession(() => stillLoading(false)));
  return loading === false && <>{children}</>
};

export const wrapRootElement = ({ element }) => (
  <SessionCheck>
  	<ApolloProvider client={client}>{element}</ApolloProvider>
  </SessionCheck>
);
