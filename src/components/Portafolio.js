import React from 'react';
import { proyectos } from '../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export const Portafolio = ({limite}) => {
  return (
    <div className='container_main mt-4 row'>
      <h1 className='title_porfolio mt-4'>Proyectos</h1>
      <Swiper spaceBetween={80}
              slidesPerView={limite}
              centeredSlides={true}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              modules={[Navigation,  Mousewheel, Keyboard]} >
      {
        proyectos.map( proyecto => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={proyecto.id} >
            <SwiperSlide  className="card">
                <img src={proyecto.imagen} className="card-img-top" alt={proyecto.alt} />
                <div className="card-body">
                  <h3 className="card-title">{proyecto.name}</h3>
                  <p className="card-text">{proyecto.content}</p>
                  <span className='learn_more-proyct'><Link to={'/portafolio/'+proyecto.id}>LEE MAS</Link></span>
                </div>
            </SwiperSlide>
          </div>
        ))
      }
      </Swiper>
    </div>
  )
}
