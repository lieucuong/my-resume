import Head from 'next/head'
import styles from '../styles/home.module.css'
import data from '../data/data.json';

export default function Introduction() {
  return (
      <article className={styles.introduction}>
          <img className={styles.avatar} src={data.introduction.avatar} />
          <div className={styles.wrapper}>
              <h1 className={styles.name}>{data.introduction.name}</h1>
              <h2 className={styles.title}>{data.introduction.position}</h2>
              {
                data.introduction.description.map((text, index) => (
                  <p key={`point_${index}`} className={styles.description}>{text}</p>
                ))
              }
          </div>
      </article>
  )
}
