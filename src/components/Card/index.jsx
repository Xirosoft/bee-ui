import Link from 'next/link'
import styles from './style.module.scss'

export const Card = ({
  children,
  href= '#',
  title,
  icon,
  ...props}) => {
  return (
    <Link href={href} className={styles.card} {...props}>
      {children}
      <span className={styles.card__icon}>{icon}</span>
      <span className={styles.card__title}>{title}</span>
    </Link>
  )
}


export const Cards = ({
  children,
  row = 3,
  ...props
}) => {

  return (
    <div className={styles.card__wrapper} {...props} style={{gridTemplateColumns: `repeat(${row}, 1fr)`}}>
      {children}
    </div>
  )
}
