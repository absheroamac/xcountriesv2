import React from 'react'
import styles from './CountryCard.module.css'

export const Card = ({data}) => {
  return (
    <div className={styles.countryCard}>
        <img src={data.flags.png} alt={"Flag of "+data.name.common}/>
        <h4>{data.name.common}</h4>
    </div>
  )
}
