import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>

    <Helmet>
      <script src={withPrefix('jquery.min.js')} type="text/javascript" rel="preload" />
      <script src={withPrefix('packery-docs.min.js')} type="text/javascript" rel="preload" />
    </Helmet>
    <Seo title="Home" />
    

    <Card />

    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
     
    </p>
  </Layout>
)

export default IndexPage
