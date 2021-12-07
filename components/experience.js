import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/resume.json';

export default function Experience() {
  return (
    <>
    <article className="summary">
    {
      data.work.map((exp, index) => (
        <div key={`work_${index}`} className={styles['summary-work']}>
          <div className={styles['summary-work-title']}>
            <h4 className={styles['summary-work-position']}>{exp.position}</h4>
            <span className={styles['summary-work-duration']}>{exp.startDate} - {exp.endDate}</span>
          </div>
          <div className={styles['summary-work-place']}>
            <div className={styles['small-logo']}>
              <a href={exp.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={exp.logo}
                  width={45}
                  height={45}
                  alt={exp.name}
                />
              </a>
            </div>
            <div>
              <h6 className={styles['summary-work-company']}><a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.name}</a></h6>
              <span className={styles['summary-work-type']}>{exp.type}</span>
            </div>
          </div>
          <ul className={styles['summary-work-description']}>
          {
            exp.highlights.map((text, index) => (
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
