import styles from '../Page404/Page404.module.css'

const Page404 = () => {
  return (
    <>
    
      <h2 className={styles.titulo1}>Algo está errado, favor verificar!!</h2>
      <div className={styles.textos}>
      <span className={styles.titulo_grande}>404</span> <br/>
      <strong className={styles.titulo_vermelho}>Página nã localizada</strong>
      </div>
      
    </>
  )
}

export default Page404