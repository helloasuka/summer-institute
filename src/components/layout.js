import React from "react"
import "./layout.css"
import styles from "../css/postlist.module.css"
import styles2 from "../css/postcard.module.css"
import { Link } from "gatsby"

const layout = ({ children }) => {
  return (
    <>
      <main>
        <section className={styles.posts}>
          <h1>
            Digital Media Summer Institute 2020 - Human-
            <strike>computer</strike> Interactions
          </h1>
          <h4>
            Questioning and defining the (new) role(s) of computation on the
            mediation of Human Interactions
          </h4>
          <h5>13-16 July // iNOVA Media Lab @ Lisbon, Portugal</h5>
        </section>

        <div className={styles.center}>
          <Link to="/" className={styles2.link}>
            Home
          </Link>
          <Link to="./blog" className={styles2.link}>
            Blog
          </Link>
          <Link to="./workshops-call" className={styles2.link}>
            Workshops - Call
          </Link>
        </div>

        {children}

        <div className={styles.center}>

        <section className={styles.posts}>
          
          <h6><a href="http://inovamedialab.org/" target="_blank">
          iNOVA Media Lab 
          </a></h6>
          <h6><a href="http://nova-lincs.di.fct.unl.pt/" target="_blank">
          NOVALincs 
          </a></h6>
          <h6><a href="https://www.fct.unl.pt/" target="_blank">
          FCT 
          </a></h6>
          <h6><a href="https://www.fcsh.unl.pt/" target="_blank">
          FCSH
          </a></h6>
       
        </section>
        </div>

      </main>
    </>
  )
}

export default layout
