import styles from './Program.module.scss'

export const Program = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={require("../../images/programm.png")} alt="programm" />
          <div className={styles.text}>Банкетная часть пройдёт в шатре на территории парка и подразумевает под собой море алкоголя и вкусную еду.</div>
          <div className={styles.text2}>Конечно же,  у нас будет ведущий, который заставит Вас участвовать в ужасных конкурсах, кричать «Горько» каждые 2 минуты и считать до миллиона.</div>
          <div className={styles.joke}>(Шутка. Он поможет сделать наш банкет веселым)</div>
        </div>
        <div>
          <img src={require("../../images/program_foto.jpg")} alt="program" />
        </div>
      </div>
      <div className={styles.close}>Мероприятие будет до 23:00 и завершится танцами.</div>
    </>
  )
};