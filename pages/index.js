import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Introduction from '../components/introduction';
import Experience from '../components/experience';
import Skill from '../components/skill';
import Contact from '../components/contact';

export default function Home() {
  return (
    <section className="resume">
      <Head>
        <title>Cuong Resume</title>
        <meta name="description" content="My resume" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Introduction/>
      <section className="resume-content">
        <section className="resume-main">
          <h3>Working Experiences</h3>
          <Experience />
        </section>
        <section className="resume-sidebar">
          <h3>Skills</h3>
          <Skill />
          <h3>Contact</h3>
          <Contact />
        </section>
      </section>
    </section>
  )
}
