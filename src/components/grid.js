import * as React from "react"
//import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

import "./grid.css"
import "./card.css"


import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

class MyFirstGrid extends React.Component {
    
    render() {
        const { data } = this.props
        const { edges: blocks } = data.allMarkdownRemark
        return (
            <ReactGridLayout
            className="layout"
            
            cols={12}
            rowHeight={280}
            width={1200}
            >
            {blocks &&
              blocks.map(({ node: block }) => (
                
                <div className="card" key={block.id}
                data-grid={{ 
                    x: (`${block.frontmatter.rank}` * `${block.frontmatter.width}`) % 12,
                    y: (`${block.frontmatter.rank}` * `${block.frontmatter.height}`) % 12,
                    w: (`${block.frontmatter.width}` * 1),
                    h: (`${block.frontmatter.height}` * 1) ,
                    isResizable:false }}>
                    
                    <h2>{block.frontmatter.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: block.html }}></div>
                    
                </div>
  
              ))}
          </ReactGridLayout>
        )
      }
    }

  
export default function Grid() {
    return (
        <StaticQuery
          query={graphql`
        query MyQuery {
            allMarkdownRemark
            (sort: {order: ASC, fields: [frontmatter___rank]}) 
            {
                edges {
                  node {
                    id
                    frontmatter {
                      rank
                      width
                      height
                      title
                      bgcolor
                    }
                    html
                  }
                }
              }
            }
        `}
          render={(data, count) => <MyFirstGrid data={data} count={count}/>}
        ></StaticQuery>
      );
}