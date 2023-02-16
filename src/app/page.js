import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <section className={styles.welcomeSection}>
      <h1 className={styles.title}>Hi I'm Reid</h1>
      <p className={styles.description}>Marketer & Full Stack Developer</p>
    </section>

    <section className={`${styles.projectSection} ${styles.grid}`}>
      <div className={styles.card}>
        <h2>G_VE</h2>
        <p>React project using node.js</p>
      </div>
      <div className={styles.card}>
        <h2>Responsive landing page</h2>
        <p>HTML, CSS and Javascript</p>
      </div>
      <div className={styles.card}>
        <h2>Portfolio Website</h2>
        <p>Next.js project</p>
      </div>
      <div className={styles.card}>
        <h2>Mediahub Calculators</h2>
        <p>HTML, CSS and Javascript. Used to calcualte the percent difference and the percent change that marketers often use for reporting.</p>
      </div>
    </section>
    </main>
  )
}
