import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Layout padrão
import Layout from '../layout/DefaultLoyaut';
import LayoutCourse from '../layout/DefaultLayoutCourses.jsx';

//Cursos
import Cursos from '../pages/Courses/Todos/index.jsx'
import Especializados from '../pages/Courses/Especializados-Formados/index.jsx';
import Atualizados from '../pages/Courses/Especializados-Atualizados/index.jsx';
import Reciclagem from '../pages/Courses/Reciclagem-Atualizacao-CNH/index.jsx';
import CondutoresApp from '../pages/Courses/Taxista-Condutores-APP/index.jsx';
import NR from '../pages/Courses/Cursos-NR/index.jsx';
import Graduacao from '../pages/Courses/Pos-Graduacao/index.jsx';
import Livres from '../pages/Courses/Cursos-Livres/index.jsx';


// Paginas
import Pcursos from '../pages/Courses/index.jsx';
import Contact from '../pages/Courses/Pages/Contact'
// import Payments from '../pages/Payments';

import Pag1 from '../pages/Courses/Pages/1/index.jsx';
import Pag2 from '../pages/Courses/Pages/2/index.jsx';
import Pag3 from '../pages/Courses/Pages/3/index.jsx';
import Pag4 from '../pages/Courses/Pages/4/index.jsx';
import Pag5 from '../pages/Courses/Pages/5/index.jsx';
import Pag6 from '../pages/Courses/Pages/6/index.jsx';
import Pag7 from '../pages/Courses/Pages/7/index.jsx';
import Pag8 from '../pages/Courses/Pages/8/index.jsx';
import Pag9 from '../pages/Courses/Pages/9/index.jsx';
import Pag10 from '../pages/Courses/Pages/10/index.jsx';
import Pag11 from '../pages/Courses/Pages/11/index.jsx';
import Pag12 from '../pages/Courses/Pages/12/index.jsx';
import Pag13 from '../pages/Courses/Pages/13/index.jsx';
import Pag14 from '../pages/Courses/Pages/14/index.jsx';
import Pag15 from '../pages/Courses/Pages/15/index.jsx';
import Pag16 from '../pages/Courses/Pages/16/index.jsx';
import Pag17 from '../pages/Courses/Pages/17/index.jsx';
import Pag18 from '../pages/Courses/Pages/18/index.jsx';
import Pag19 from '../pages/Courses/Pages/19/index.jsx';
import Pag20 from '../pages/Courses/Pages/20/index.jsx';
import Pag21 from '../pages/Courses/Pages/21/index.jsx';
import Pag22 from '../pages/Courses/Pages/22/index.jsx';
import Pag23 from '../pages/Courses/Pages/23/index.jsx';
import Pag24 from '../pages/Courses/Pages/24/index.jsx';
import Pag25 from '../pages/Courses/Pages/25/index.jsx';
import Pag26 from '../pages/Courses/Pages/26/index.jsx';
import Pag27 from '../pages/Courses/Pages/27/index.jsx';
import Pag28 from '../pages/Courses/Pages/28/index.jsx';
import Pag29 from '../pages/Courses/Pages/29/index.jsx';
import Pag30 from '../pages/Courses/Pages/30/index.jsx';
import Pag31 from '../pages/Courses/Pages/31/index.jsx';
import Pag32 from '../pages/Courses/Pages/32/index.jsx';
import Pag33 from '../pages/Courses/Pages/33/index.jsx';
import Pag34 from '../pages/Courses/Pages/34/index.jsx';
import Pag35 from '../pages/Courses/Pages/35/index.jsx';
import Pag36 from '../pages/Courses/Pages/36/index.jsx';
import Pag37 from '../pages/Courses/Pages/37/index.jsx';
import Pag38 from '../pages/Courses/Pages/38/index.jsx';
import Pag39 from '../pages/Courses/Pages/39/index.jsx';
import Pag40 from '../pages/Courses/Pages/40/index.jsx';
import Pag41 from '../pages/Courses/Pages/41/index.jsx';



function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route element={<Layout />}>
            {/* Cursos */}
            <Route path='/' element={<Cursos />} />
            <Route path='/home' element={<Cursos />} />
            <Route path='/especializados' element={<Especializados />} />
            <Route path='/atualizados' element={<Atualizados />} />
            <Route path='/reciclagem' element={<Reciclagem />} />
            <Route path='/condutoresapp' element={<CondutoresApp />} />
            <Route path='/nr' element={<NR />} />
            <Route path='/graduacao' element={<Graduacao />} />
            <Route path='/livres' element={<Livres />} />
            {/* <Route path='/payments' element={<Payments />} /> */}

          </Route>


          <Route path='/contatos' element={<Contact />} />

          {/*Cursos */}
          <Route element={<LayoutCourse />}>
            <Route path='/courses' element={<Pcursos />} />

  
          </Route>




          {/* {Pagina Cursos} */}
          <Route path='/page/1' element={<Pag1 />} />
          <Route path='/page/2' element={<Pag2 />} />
          <Route path='/page/3' element={<Pag3 />} />
          <Route path='/page/4' element={<Pag4 />} />
          <Route path='/page/5' element={<Pag5 />} />
          <Route path='/page/6' element={<Pag6 />} />
          <Route path='/page/7' element={<Pag7 />} />
          <Route path='/page/8' element={<Pag8 />} />
          <Route path='/page/9' element={<Pag9 />} />
          <Route path='/page/10' element={<Pag10 />} />
          <Route path='/page/11' element={<Pag11 />} />
          <Route path='/page/12' element={<Pag12 />} />
          <Route path='/page/13' element={<Pag13 />} />
          <Route path='/page/14' element={<Pag14 />} />
          <Route path='/page/15' element={<Pag15 />} />
          <Route path='/page/16' element={<Pag16 />} />
          <Route path='/page/17' element={<Pag17 />} />
          <Route path='/page/18' element={<Pag18 />} />
          <Route path='/page/19' element={<Pag19 />} />
          <Route path='/page/20' element={<Pag20 />} />
          <Route path='/page/21' element={<Pag21 />} />
          <Route path='/page/22' element={<Pag22 />} />
          <Route path='/page/23' element={<Pag23 />} />
          <Route path='/page/24' element={<Pag24 />} />
          <Route path='/page/25' element={<Pag25 />} />
          <Route path='/page/26' element={<Pag26 />} />
          <Route path='/page/27' element={<Pag27 />} />
          <Route path='/page/28' element={<Pag28 />} />
          <Route path='/page/29' element={<Pag29 />} />
          <Route path='/page/30' element={<Pag30 />} />
          <Route path='/page/31' element={<Pag31 />} />
          <Route path='/page/32' element={<Pag32 />} />
          <Route path='/page/33' element={<Pag33 />} />
          <Route path='/page/34' element={<Pag34 />} />
          <Route path='/page/35' element={<Pag35 />} />
          <Route path='/page/36' element={<Pag36 />} />
          <Route path='/page/37' element={<Pag37 />} />
          <Route path='/page/38' element={<Pag38 />} />
          <Route path='/page/39' element={<Pag39 />} />
          <Route path='/page/40' element={<Pag40 />} />
          <Route path='/page/41' element={<Pag41 />} />

    

      
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
