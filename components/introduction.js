import Head from 'next/head'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import data from '../data/resume.json'

export default function Introduction() {
  return (
      <article className={styles.introduction}>
        <div className={styles.avatar}>
          <Image
            src={data.basics.image}
            width={200}
            height={200}
            alt="Avatar"
          />
        </div>
        <div className={styles.wrapper}>
            <h1 className={styles.name}>{data.basics.name}</h1>
            <h2 className={styles.title}>{data.basics.label}</h2>
            {
              data.basics.summary.map((text, index) => (
                <p key={`point_${index}`} className={styles.description}>{text}</p>
              ))
            }

        </div>
      </article>
  )
}
