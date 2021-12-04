import Head from 'next/head'
import styles from '../styles/home.module.css'
import data from '../data/data.json';

export default function Contact() {
  return (
    <>
    <article className={styles.contact}>
        {
            data.contact.map((contact, index) => (
                <div className={styles['contact-type']} key={`skill_${index}`} >
                    <img src={contact.icon} />
                    <a href={contact.link} target="_blank">{contact.name}</a>
                </div>
            ))
        }
    </article>
    </>
  )
}
