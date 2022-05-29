import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>This is the About heading </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              vitae possimus optio minima consectetur laudantium distinctio
              facilis suscipit, magnam reiciendis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              sit voluptate necessitatibus minima reiciendis esse? Porro
              corporis nam voluptatibus, delectus praesentium voluptate quos
              explicabo esse illo, repellendus exercitationem, distinctio iusto.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring salt in Bowl"
            className="about-img"
            placeholder="dominantColor"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
