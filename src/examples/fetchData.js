import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query fetchData {
    site {
      siteMetadata {
        title
        description
        author
        complexData {
          name
          age
        }
        simpleData
      }
    }
  }
`
const FetchData = () => {
  const {
    site: {
      siteMetadata: { title, author },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>{author}</h1>
    </div>
  )
}

export default FetchData
