
import styles from '../Contatos/Contatos.module.css'
import { CiMail } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const Contatos = () => {
  return (
    <>
    
      <section className={styles.contatos}>
        <h2>Conatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre</p>
        <div className={styles.icones}>

          <a href="mailto:diogoyh@yahoo.com.br" target='_Blank'
          rel='noopner noreferrer'>
        <CiMail className={styles.icone}/></a>
        <BsInstagram className={styles.icone} />
        <BsYoutube className={styles.icone} />
        <BsLinkedin className={styles.icone}/>
        
        </div>

      </section>
     
    </>
  )
}

export default Contatos