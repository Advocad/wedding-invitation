import styles from './Essence.module.scss'

export const Essence = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Суть нашей свадьбы</div>
      <div className={styles.description}>- РАССЛАБИТЬСЯ И ПОЛУЧиТЬ УДОВОЛЬСТВИЕ!</div>
      <div className={styles.text}>Выездная церемония будет проходить под открытым небом в парке рядом с шатром. В случае дождя мы не заставим Вас мокнуть. ;)</div>
    </div>
  )
};