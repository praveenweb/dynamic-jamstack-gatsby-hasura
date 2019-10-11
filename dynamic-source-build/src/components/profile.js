import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProfilePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      <li key={data.hasura.users[0].id}>
      	<div>{data.hasura.users[0].name}</div>
      </li>
    </ul>
  </Layout>
)

export default ProfilePage

export const query = graphql`
  query UsersQuery {
    hasura {
      users {
        id
        name
      }
    }
  }
`


