import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <>
      <Layout>
        <h1>Home Page!</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div>
          <a href="/contact">Contact</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aspernatur deserunt est deleniti molestias animi delectus, a sapiente
          cum adipisci, magnam rem, consequatur nam. Tempora inventore repellat
          ipsa assumenda rerum?
        </p>
      </Layout>
    </>
  )
}
