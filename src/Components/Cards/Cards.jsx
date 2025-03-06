import styles from './Card.module.css'
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



const Cards = () => {
  return (
    <section className={styles.card}>
        <h3>projeções</h3>
        <p>Tecnologias utilizadas... </p>
        <div className={styles.cards_footer}>
            <div className={styles.cards_icones}>
            <FaHtml5 />
            <SiCss3 />
            <FaJs />
            </div>
            
            <FaArrowRight />
            
        </div>

    </section>
  )
}

export default Cards