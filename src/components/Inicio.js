import React from 'react';
import { Link } from 'react-router-dom';
// import  bgcontent  from '../images/vectoricebg.png';
// import Spline from '@splinetool/react-spline';


export const Inicio = () => {
  return (
    <div className='inicio_container row'>
          <span className='subtitle_top'>Welcome!!</span> 
        <h1 className='title_init col-12'>
          Frontend <span className='dev'>Dev</span>eloper
        </h1>
       <div className='container_photo col-3'>
       </div>
       <p className='col-12'>Conoce un poco de mí, de mi trabajo, habilidades y proyectos personales.</p>

      <section>
        <h2 className='title_cards'>Proyectos personales</h2>
        <div className='container_cards'></div>
        <div className='short_description'>Para saber mas de mi experiencia como desarrollador <Link type='button' to="/Contacto" className='contact_me'>contactame !</Link></div>
      </section>
      <section className='tecnologies'>
      </section>
      <figure className='container_bg'>
      {/* <Spline scene="https://prod.spline.design/329nkHaMBn7eZ2je/scene.splinecode" /> */}
            {/* <img src={bgcontent} alt='intro img'/> */}
        </figure>
    </div>
  )
}
