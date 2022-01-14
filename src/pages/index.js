import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    

    <Card />

    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
