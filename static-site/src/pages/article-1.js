import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlePage = () => (
  <Layout>
    <SEO title="Article one" />
    <h1>Hi from the first article</h1>
    <p>Welcome to first article</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticlePage
