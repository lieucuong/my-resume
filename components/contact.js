import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import data from '../data/resume.json';

export default function Contact() {
  return (
    <>
    <article className={styles.contact}>
      {
        data.basics.profiles.map((profile, index) => (
          <div className={styles['contact-type']} key={`skill_${index}`} >
            <div className={styles['small-logo']}>
              <Image
                src={profile.icon}
                width={20}
                height={20}
                alt={profile.network}
              />
            </div>
            <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.network}</a>
          </div>
        ))
      }
      <div className={styles['contact-type']} >
        <a href={`mailto:${data.basics.email}`} target="_blank" rel="noopener noreferrer">{data.basics.email}</a>
      </div>
      <div className={styles['contact-type']} >
        <a href={`tel:${data.basics.phone}`} target="_blank" rel="noopener noreferrer">{data.basics.phone}</a>
      </div>
    </article>
    </>
  )
}
