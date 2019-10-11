import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
      <Link to="/article-1"><li>This is the first article</li></Link>
      <li>This is the second article</li>
    </ul>
  </Layout>
)

export default IndexPage
