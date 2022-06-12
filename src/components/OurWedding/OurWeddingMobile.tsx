import styles from './OurWedding.module.scss'

export const OurWeddingMobile = () => {
  return (
    <div>
      <div className={styles.title}>OUR WEDDING</div>
      <div className={styles.name}>Эмилия | Алексей</div>
      <div className={styles.date}>28/08/22</div>
      <div className={styles.container}>
        <img src={require("../../images/left.jpg")} alt="foto" />
        {/* <img src={require("../../images/rigth.jpg")} alt="foto" /> */}
      </div>
      <div className={styles.decision}>МЫ <br/> РЕШИЛИ <br/> ПОЖЕНИТЬСЯ!</div>
      <img src={require("../../images/yes.png")} className={styles.yes} alt="yes" />
    </div>
  )
}