import React from 'react';
import { Link } from 'react-router-dom';
import { Contacto } from './Contacto';
import  PersonCard  from './PersonCard';
import { Portafolio } from './Portafolio';
import { ExperienciaProfesional } from './ExperienciaProfesional';

export const Inicio = () => {
  return (
    <div className='container'>
      <div className='inicio_container row'>
        <div className='intro_content-text'>
            <span className='subtitle_top col-12'>Bienvenido!!</span>
            <h1 className='title_init col-12'>
              Frontend <span className='dev'>Dev</span>eloper
            </h1>
            <p className='col-12'>Conoce un poco de mí, de mi trabajo, habilidades y proyectos personales.</p>
            <div className='short_description'>
              Para saber mas de mi experiencia como desarrollador <Link type='button' to="/Contacto" className='contact_me'>contactame !</Link>
            </div>
        </div>
        <div className='person_card'>
          <div className='container_person'>
            <PersonCard/>
          </div>
        </div>
      </div>
      <Portafolio/>
      <Contacto />
      <ExperienciaProfesional/>
    </div>
  )
}
