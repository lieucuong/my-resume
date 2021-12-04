import Head from 'next/head'
import styles from '../styles/home.module.css'
import data from '../data/data.json';

export default function Experience() {
  return (
    <>
    <article className="experience">
      {
        data.experience.map((exp, index) => (
                <div key={`work_${index}`} className={styles['experience-work']}>
                    <div className={styles['experience-work-title']}>
                        <h4 className={styles['experience-work-position']}>{exp.title}</h4>
                        <span className={styles['experience-work-duration']}>{exp.duration}</span>
                    </div>
                    <div className={styles['experience-work-place']}>
                        <img src={exp.logo} alt={exp.company} />
                        <div>
                            <h6 className={styles['experience-work-company']}>{exp.company}</h6>
                            <span className={styles['experience-work-type']}>{exp.type}</span>
                        </div>
                    </div>
                    <ul className={styles['experience-work-description']}>
                    {
                      exp.description.map((text, index) => (
                        <li key={`point_${index}`} >{text}</li>
                      ))
                    }
                    </ul>
                </div>
              ))
          }
    </article>
    </>
  )
}
