import styles from './Place.module.scss'

export const PlaceMobile = () => {
  return (
      <div className={styles.container}>
        <div className={styles.title}><img src={require("../../images/when.png")} alt="when" /></div>
        <div className={styles.address}>Наша вечеринка состоится <span>28 августа 2022 года в 14:20</span> по адресу: г. Оренбург, ул. Волгоградская, 3 , шатёр ресторана «Вилла д’Идальго»</div>
        <div className={styles.text}>Ваше присутствие искренне важно для нас.</div>
        <img src={require("../../images/place.jpg")} alt="yes" />
    </div>
  )
}