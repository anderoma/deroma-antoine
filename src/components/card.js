import * as React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import "./card.css"

class CardTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: blocks } = data.allMarkdownRemark
    return (
      <div className="row">
        {blocks &&
          blocks.map(({ node: block }) => (
            <div className={`col ${block.frontmatter.size}`}>
                <div className="card">
                    <h2>{block.frontmatter.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: block.html }}></div>
                </div>
            </div>
          ))}
      </div>
    )
  }
}

Card.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

export default function Card() {
  return (
    <StaticQuery
      query={graphql`
    query CardQuery {
        allMarkdownRemark
        (sort: {order: ASC, fields: [frontmatter___rank]}) 
        {
            edges {
              node {
                frontmatter {
                  rank
                  size
                  title
                }
                html
              }
            }
          }
        }
    `}
      render={(data, count) => <CardTemplate data={data} count={count} />}
    />
  );
}
