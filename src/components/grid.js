import * as React from "react"
//import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

import "./grid.css"
import "./card.css"

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
    
    render() {
        const { data } = this.props
        const { edges: blocks } = data.allMarkdownRemark
        return (
            <ResponsiveGridLayout
            className="layout"
            cols={{ md: 12, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={280}
            breakpoints={{ md: 996, sm: 768, xs: 480, xxs: 0 }}
            >
            
            {blocks &&
              blocks.map(({ node: block }) => (
                
                <div className={`card ${block.frontmatter.title}`} key={block.id}
                data-grid={{ 
                    x: (`${block.frontmatter.xrank}` * 1),
                    y: (`${block.frontmatter.yrank}` * 1),
                    w: (`${block.frontmatter.width}` * 1),
                    h: (`${block.frontmatter.height}` * 1),
                    isResizable:false }}
                style={{backgroundColor: `#${block.frontmatter.bgcolor}`}}>
                    
                    <h2>{block.frontmatter.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: block.html }}></div>
                    
                </div>
  
              ))}
          </ResponsiveGridLayout>
        )
      }
    }

  
export default function Grid() {
    return (
        <StaticQuery
          query={graphql`
        query MyQuery {
            allMarkdownRemark
            {
                edges {
                  node {
                    id
                    frontmatter {
                      xrank
                      yrank
                      width
                      height
                      title
                      bgcolor
                      bgimg
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