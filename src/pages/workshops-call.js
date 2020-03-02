import React from "react"
import Layout from "../components/layout"
import styles from "../css/postTemplate.module.css"

const workshopsCall = () => {
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>About</h1>
        </div>
        <div className={styles.content}>
          <p>
            We are looking for hands-on workshops that will complement the
            Summer Institute’s topics. Workshops should focus on methods and
            techniques to advance research, or on technologies to build
            prototypes.
          </p>

          <h1>Remuneration</h1>
          <p>
            Workshop facilitators will be paid a base fee (50 euros - 3h
            workshop, 100 euros - 6h workshop) plus 20€ for external participant
            (not in the Summer Institute immersive program).
          </p>

          <h1>Application</h1>
          <p>
            If you are interested in conducting a workshop at the Digital Media
            Summer Institute 2020 please send an email to{" "}
            <a
              href="mailto:hit@fcsh.unl.pt?Subject=Summer Institute 2020 - Workshop Application"
              target="_blank"
            >
              hit@fcsh.unl.pt
            </a>{" "}
            along with your CV and a short text describing the workshop,
            including how long it will be (3h or 6h).
          </p>

          <h1>Deadline March 13th, 2020</h1>
        </div>
      </section>
    </Layout>
  )
}

export default workshopsCall
