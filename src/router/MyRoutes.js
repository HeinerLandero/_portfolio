import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { Servicios } from '../components/Servicios';
import { Portafolio } from '../components/Portafolio';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto} from '../components/Proyecto';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
         {/*Navegacion*/}
         <HeaderNav/>
         {/*Contenido*/}
         <section className='content'>
            <Routes>
                <Route path='/' element={< Navigate to ="/inicio"/>}/>
                <Route path='/Inicio' element={<Inicio/>}/>
                <Route path='/Curriculum' element={<Curriculum/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/Portafolio' element={<Portafolio/>}/>
                <Route path='/Servicios' element={<Servicios/>}/>
                <Route path='/Portafolio/:id' element={<Proyecto/>}/>
                <Route path='*' element={
                  <div>
                      <h1>ERROR 404</h1>
                      <p>page no found</p>
                  </div>
                }/>

            </Routes>
         </section>
        {/*Footer*/}
        <Footer/>

    </BrowserRouter>
  )
}
