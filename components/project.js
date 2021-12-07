import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data/resume.json';

export default function Project() {
  return (
    <>
    <article className="summary">
    {
      data.projects.map((pj, index) => (
        <div key={`work_${index}`} className={styles['summary-work']}>
          <div className={styles['summary-work-title']}>
            <h4 className={styles['summary-work-position']}>
              <a href={pj.url} target="_blank" rel="noopener noreferrer">{pj.name}</a>
            </h4>
            <span className={styles['summary-work-duration']}>{pj.startDate} - {pj.endDate}</span>
          </div>
          <div className={styles['summary-work-place']}>
            <h6 className={styles['summary-work-company']}>{pj.role}</h6>
          </div>
          <ul className={styles['summary-work-description']}>
            <li key={`point_${index}`} >{pj.description}</li>
          </ul>
          <div className={styles['summary-work-stack']}>
            {pj.keywords.map((tool, index) => (
              <div className={styles['summary-work-tool']} key={`tool_${index}`} >
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
    </>
  )
}
