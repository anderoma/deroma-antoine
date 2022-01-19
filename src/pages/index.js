import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyFirstGrid from "../components/grid"

const IndexPage = () => (
  <Layout>


    <Seo title="Home" />
    
    <MyFirstGrid />

    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
     
    </p>
  </Layout>
)

export default IndexPage
