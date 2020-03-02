import React from "react"
import Layout from "../components/layout"
import styles from "../css/postTemplate.module.css"

export default () => {
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.info}>
          <h1>About</h1>
        </div>
        <div className={styles.content}>
          <p>
            The Digital Media Summer Institute is an immersive 4-day event aimed
            at the collaborative development of research projects. A small group
            of Ph.D. students and candidates will be selected to participate in
            this program, where four leading international researchers will
            tutor them, providing guidance and valuable insights into their
            research. Each day, the program will begin with a keynote, followed
            by various hands-on workshops and time to work on the research
            projects. At the end of the day, the participants will have
            one-on-one time on a private session with the tutors.
          </p>
          <p>
            Participants (applicants should be Ph.D. students or candidates)
            will be selected according to their topics of research and work, and
            each will be assigned a tutor (each tutor will have 3 students under
            their wing). Participants can look forward to strengthening their
            scientific approach by looking at their research from new, fresh
            perspectives, and by asking new and unconventional questions.
            Participants will also have the opportunity to build a community,
            share ideas, and collaborate with each other and with the
            instructors.
          </p>
          <p>
            The Summer Institute will take place at iNOVA Media Lab, a lab that
            brings together researchers and practitioners working at the
            intersections of digital media arts, sciences, and technologies.
            Participants will have a plethora of materials and gadgets available
            to them (see below), plus a brand new recording studio.
          </p>
          <p>
            We look forward to welcoming you to the beautiful and sunny Lisbon!
          </p>
        </div>

        <div className={styles.info}>
          <h1>Topics of Interest</h1>
        </div>
        <div className={styles.content}>
          <p>
            We are looking for PhD students or candidates whose research draws
            from technology, human-computer interaction, media, science, art,
            and design. Topics include, but are not limited to:
          </p>
          <ul>
            <li>Human-Computer Interaction</li>
            <li>Augmented Reality</li>
            <li>Virtual Reality</li>
            <li>Digital Art</li>
            <li>Web Technologies</li>
            <li>User Interaction</li>
            <li>Intelligent User Interfaces</li>
            <li>Tangible and Embedded Interactions</li>
            <li>Research design</li>
            <li>Research through design</li>
          </ul>
        </div>

        <div className={styles.info}>
          <h1>Program</h1>
        </div>
        <div className={styles.content}>
          <p>TBA</p>
        </div>

        <div className={styles.info}>
          <h1>Schedule</h1>
        </div>
        <div className={styles.content}>
          <a href="src/images/schedule.png" target="_blank">
            Tentative schedule
          </a>
        </div>

        <div className={styles.info}>
          <h1>Application Fee</h1>
        </div>
        <div className={styles.content}>
          <p>
            The registration fees for the immersive Summer Institute will be 400
            euros.
          </p>
        </div>

        <div className={styles.info}>
          <h1>Application</h1>
        </div>
        <div className={styles.content}>
          <p>
            To apply to the Digital Media Summer Institute 2020 please send an
            email to{" "}
            <a
              href="mailto:hit@fcsh.unl.pt?Subject=Summer Institute 2020 - Application"
              target="_blank"
            >
              hit@fcsh.unl.pt
            </a>{" "}
            with the following information:
          </p>
          <ul>
            <li>CV</li>
            <li>
              A short text stating your PhD or research topic, your research
              approach, and why you want be a part of the Digital Media Summer
              Institute.{" "}
            </li>
          </ul>
          <p>
            Notifications of acceptance and level of funding will be sent early
            March with a link for registration fee payment.
          </p>
        </div>

        <div className={styles.info}>
          <h1>Important Dates</h1>
        </div>
        <div className={styles.content}>
          <ul>
            <li>April 8th, 2020: Application deadline</li>
            <li>April 16th, 2020: Notification of acceptance</li>
            <li>April 30th, 2020: Deadline for registration </li>
          </ul>
        </div>

        <div className={styles.info}>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.content}>
          <p>
            For any information about the Digital Media Summer Institute please
            send an email to:{" "}
            <a
              href="mailto:hit@fcsh.unl.pt?Subject=Summer Institute 2020 - Contact"
              target="_blank"
            >
              hit@fcsh.unl.pt
            </a>{" "}
          </p>
        </div>
      </section>
    </Layout>
  )
}
