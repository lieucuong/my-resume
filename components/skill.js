import Head from 'next/head'
import styles from '../styles/home.module.css'
import data from '../data/data.json';

export default function Skill() {
  return (
    <>
    <article className={styles.skills}>
        <h5 >Management skill</h5>
        {data.management_skills.map((mskill, index) => (
            <div className={styles.skill} key={`skill_${index}`} >
                <span className={styles.tag}>{mskill}</span>
            </div>
        ))}
    </article>
    <article className={styles.skills}>

        <h5 >Technical skill</h5>
        {data.technical_skills.map((tskill, index) => (
            <div className={styles.skill} key={`skill_${index}`} >
                <img src={tskill.icon} />
                <span>{tskill.name}</span>
            </div>
        ))}
    </article>
    </>
  )
}
