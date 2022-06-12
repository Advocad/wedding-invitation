import { useMediaQuery } from 'react-responsive';
import styles from './OurWedding.module.scss'
import { OurWeddingMobile } from './OurWeddingMobile';

export const OurWedding = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })


  if(isMobile) {
    return <OurWeddingMobile />
  }
  
  return (
    <div>
      <div className={styles.title}>OUR WEDDING</div>
      <div className={styles.container}>
        <div>
          <img src={require("../../images/left.jpg")} alt="foto" />
          <div className={styles.decision}>МЫ <br/> РЕШИЛИ <br/> ПОЖЕНИТЬСЯ!</div>
          <img src={require("../../images/yes.png")} alt="yes" />
        </div>
        <div>
          <div className={styles.name}>Эмилия | Алексей</div>
          <div className={styles.date}>28/08/22</div>
          <img src={require("../../images/rigth.jpg")} alt="foto" />
        </div>
      </div>
    </div>
  )
};
