import styles from './DressCode.module.scss'

export const DressCode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Дресскод</div>
      <div className={styles.description}>Мы очень старались сделать праздник красивым, поэтому мы настоятельно просим джентельменов быть в смокингах, а дам подобрать свой образ в пастельных оттенках:</div>
      <div className={styles.common_color}>
        <div className={styles.color} />
        <div className={styles.color} />
        <div className={styles.color} />
        <div className={styles.color} />
        <div className={styles.color} />
        <div className={styles.color} />
      </div>
    </div>
  )
};