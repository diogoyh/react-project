import { Link } from 'react-router-dom'
import Styles from './home.module.css'


function Home () {
  return (
    <>

      
      <section className={Styles.home}>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Diogo Luiz</span><br />
            Desenvolvedor!!
          </p>
          <Link to="/sobre" className={`${Styles.btn} ${Styles.btn_red}`}>
            Saiba mais:
          </Link>
        </div>

        <figure className={Styles.figur}>
          <img className= {Styles.img_home} src="/developer-red.svg" alt="" />
        </figure>
      </section>
      
     
    </>

  )
}

export default Home