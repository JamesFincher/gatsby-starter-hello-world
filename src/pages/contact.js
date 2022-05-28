import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch!</h3>
            <p>
              Emmental cheese on toast queso. Squirty cheese lancashire emmental
              cottage cheese goat jarlsberg who moved my cheese cheese
              triangles. Paneer danish fontina melted cheese bavarian bergkase
              who moved my cheese cheesy feet brie ricotta. Fromage frais
              jarlsberg say cheese cauliflower cheese swiss red leicester
              bavarian bergkase cheese and biscuits. Cheese strings pepper jack
              stilton.
            </p>
            <p>
              Ricotta taleggio babybel. Brie cheese and biscuits cheeseburger
              dolcelatte smelly cheese who moved my cheese cut the cheese
              squirty cheese. Bavarian bergkase bocconcini cheese slices
              cheeseburger swiss feta edam who moved my cheese. St. agur blue
              cheese st. agur blue cheese.
            </p>
            <p>
              Airedale goat pepper jack. Cheesy feet fromage babybel goat chalk
              and cheese fromage frais stinking bishop queso. Danish fontina
              ricotta feta feta goat monterey jack roquefort airedale.
              Dolcelatte.
            </p>
            <article>
              <form action="" className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn  block">
                  Submit
                </button>
              </form>
            </article>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
