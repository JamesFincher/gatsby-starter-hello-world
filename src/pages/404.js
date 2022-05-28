import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Layout>
      <section className="error-page:">
        <h1>Lost?</h1>
        <p>
          Seems like you need help!
          <Link to="/"> Go back home!!!</Link>
        </p>
      </section>
    </Layout>
  )
}

export default Contact
