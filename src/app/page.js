import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (

    <main className={styles.main}>
     <section className={styles.welcomeSection}>
      <h1 className={styles.title}>Hi I'm Reid</h1>
      <a className={styles.menu}>about</a>
      <p className={styles.description}>Marketer & Full Stack Developer</p>
    </section>

    <section className={`${styles.projectSection} ${styles.grid}`}>
      <div className={styles.card}>

        <div className={styles.cardTitleContainer}>
        <h2 className={styles.cardTitle}>Dynamic website</h2>
        <img className={styles.github} src="../github-mark-white-small.png"></img>
        </div>
        <p>React project using express and mongoDB</p>
      </div>

      <div className={styles.card} >
        <div className={styles.cardTitleContainer}>
          <h2 className={styles.cardTitle}>Responsive Website</h2>
           <img className={styles.github} src="../github-mark-white-small.png"></img>
        </div>

        <p>Repsonsive for most screen sizes with some nice animations</p>
      </div>

      <div className={styles.card}>
      <div className={styles.cardTitleContainer}>
        <h2 className={styles.cardTitle}>Portfolio Webite</h2>
        <img className={styles.github} src="../github-mark-white-small.png"></img>
        </div>
        <p>The website you are looking at right now</p>
      </div>
      <div className={styles.card}>
        <h2>Mediahub Calculators</h2>
        <p>HTML, CSS and Javascript</p>
      </div>
    </section>
    </main>
  )
}