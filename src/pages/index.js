import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../examples/fetchData"
export default function Home() {
  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="./../assets/images/main.jpeg"
              alt="egs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simply Recipes</h1>
                <h4>Just yummy stuff!</h4>
              </div>
            </div>
          </header>
          <FetchData />
        </main>
      </Layout>
    </>
  )
}
