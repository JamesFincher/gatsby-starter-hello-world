import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Layout>
      <h1>Lost?</h1>
      <p>
        Seems like you need help!
        <Link to="/">Go back home!!!</Link>
      </p>
    </Layout>
  )
}

export default Contact
