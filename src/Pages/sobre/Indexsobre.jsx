import styles from './sobre.module.css'
import svg from './Images/svg1.jpg'
import htmlcss from './Images/htmlcss.svg'
import reactjs from './Images/reactjs.svg'
const Sobre = () => {
  return (
  <>
      <section className={styles.sobre}>         
         <div className={styles.bio}>
          <img className={styles.svg2} src={svg} alt="imagem_game" />
          <div className={styles.textos}>
            <h2>Sobre</h2>
            <span>Sou Diogo L</span> <br/>
          <p>Um desenvolvedor júnior entusiasmado por <strong>tecnologia.</strong> </p>
           <p> sempre disposto a aprender e enfrentar desafios.</p>
            <p>Busco crescer profissionalmente e contribuir para projetos inovadores."</p>
          </div>
         
         </div>

         <div className={styles.techs}>
          <h3>Techs</h3>
          <div className={styles.icones}>
          <img className={styles.svg3} src={htmlcss} alt="imagem_game" />
          <img className={styles.svg4} src={reactjs} alt="imagem_game" />
          </div>

         </div>
      </section>
      
      
    </>
  )
}

export default Sobre