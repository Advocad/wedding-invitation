import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Guest.module.scss'
import { GuestMobile } from './GuestMobile';

export interface GuestProps {
  name: string;
  rule?: string;
}

export const Guest: FC<GuestProps> = ({ name, rule }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  if(isMobile) {
    return <GuestMobile name={name} rule={rule} />
  }
  
  return (
    <div className={styles.conteiner}>
      <div className={styles.guest}>{rule ? `${rule} ${name}` : `Дорогие ${name}`}</div>
      <div className={styles.text}>Мы очень рады, что вы открыли это приглашение, и, надеемся, что вы уже догадались, О ЧЕМ ОНО.</div>
      <div className={styles.text2}>
        <span>28 августа может стать обычным летним днем и особенно не запомниться Вам , но... Мы решили внести свои изменения!</span>
        <span>Этот день станет одним из самых волшебных не только для нас, но и для Вас... Если вы примете наше приглашение, конечно же! ;)</span>
      </div>
      <img src={require("../../images/horizont.jpg")} alt="yes" />
    </div>
  )
};