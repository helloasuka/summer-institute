import React from "react"
import "./layout.css"
import styles from "../css/postlist.module.css"
/* import styles2 from "../css/postcard.module.css"
import { Link } from "gatsby" */
import logo from "../images/logo.png"


const layout = ({ children }) => {
  return (
    <>
      <main>
      <div className={styles.center}>
        <a href="/">
        <img src={logo} alt="Logo" width="100%" max-width="400px" height="auto" />
        </a>
        </div>
        <section className={styles.posts}>
          <h1>13-16 July</h1>
          <br/>
          <br/>
          <h4>scroll down</h4>
          <h4>▼</h4>
        </section>

        {/* <div className={styles.center}>
          <Link to="/" className={styles2.link}>
            Home
          </Link>
          <Link to="./workshops-call" className={styles2.link}>
            Workshops - Call
          </Link>
          <Link to="./blog" className={styles2.link}>
            Blog
          </Link>
        </div> */}

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
