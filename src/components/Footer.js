import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="">Simply Recipes</span> Built with{" "}
        <a href="https://gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
