import styles from './WithoutFlowers.module.scss'

export const WithoutFlowers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>только не <span>Цветы!</span></div>
      <div className={styles.description}>Мы будем счастливы, если вместо цветов вы подарите нам книгу. 
Мы не успеем насладиться их ароматом до отъезда в свадебное путешествие. Однако подаренные вами книги будут радовать нас всю оставшуюся жизнь. Список желанных книг мы разместим в нашей группе Whats Up </div>
    </div>
  )
}