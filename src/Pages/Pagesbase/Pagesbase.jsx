import Header from '../../Components/Header/Index'
import Conteiner from '../../Components/Conteiner/Conteiner'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Pagesbase = () => {
  return (
    <main>
        <Header/>
        <Conteiner>
            <Outlet/>
        </Conteiner>
        <Footer/>
    </main>
  )
}

export default Pagesbase