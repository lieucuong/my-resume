import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/resume.json'

export default function Skill() {
  return (
    <>
    {
      data.skills.map((skill, index) => (
        <article className={styles.skills} key={`point_${index}`}>
          <h5 >{skill.name}</h5>
          {
            skill.keywords.map((text, index) => (
              <div className={styles.skill} key={`skill_${index}`} >
                <span className={styles.tag}>{text}</span>
              </div>
            ))
          }
        </article>
      ))
    }
    </>
  )
}
