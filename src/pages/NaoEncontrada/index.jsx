import styles from './NaoEncontrada.module.css'
import React from 'react'

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>Conteúdo não encontrado! :/</p>
    </section>
  )
}
