import React from "react"
import Layout from "../components/layout"
//import {Link} from 'gatsby'
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  }
`

export default () => {
const response = useStaticQuery(getPosts);
console.log(response);

//grabs the array of posts
const posts = response.allMdx.edges;

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}
