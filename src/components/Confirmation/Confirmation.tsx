import styles from './Confirmation.module.scss'

export const Confirmation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>подтвердите присутствие</div>
      <div className={styles.description}>P.S. Если по каким-то причинам у Вас не получится присутствовать на нашей свадьбе, то вы нам больше не друзья.</div>
      <div className={styles.buttons}>
        <button>подтвердить</button>
        <button disabled>не друзья</button>
      </div>
      <div className={styles.ps}>P.P.S. Конечно, это шутка. Однако, мы будем чрезвычайно расстроены вашим отсутствием.</div>
    </div>
  )
}