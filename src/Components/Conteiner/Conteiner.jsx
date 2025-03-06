import Styles from './Conteiner.module.css'

const Conteiner = ({ children }) => {
  return (
    <section className={Styles.conteiner}>
        {children}

    </section>
  )
}

export default Conteiner