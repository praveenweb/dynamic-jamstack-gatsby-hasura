import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div><Link to="/profile">Profile page</Link></div>
    <ul>
    	{data.hasura.articles.map((article) => (
	      <li key={article.id}>
	      	<div>{article.title}</div>
	      	<div>{article.content}</div>
	      </li>
    	))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query ArticleQuery {
    hasura {
      articles {
        id
        title
        content
      }
    }
  }
`


