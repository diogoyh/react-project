import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Index'
import Sobre from './Pages/sobre/Indexsobre'
import Projetos from './Pages/projetos/Indexprojetos'
import Contatos from './Pages/Contatos/Indexcontatos'
import Page404 from "./Pages/Page404/Page404";
import Pagesbase from "./Pages/Pagesbase/Pagesbase";



function Approutes() {
  return (
   <BrowserRouter>
   <Routes>
          
          <Route path="/" element={<Pagesbase/>}>
            <Route index element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/Contatos" element={<Contatos />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          
          
        </Routes>
   </BrowserRouter>

  )
}

export default Approutes