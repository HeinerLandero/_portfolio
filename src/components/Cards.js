import React from 'react';
import { skills } from '../data/skills';

export const Cards = () => {
  return (
    <section className="page card-1-page">
      <div className="cards">
        {skills.map((card) => (
          <label id={card.name} className='content_card'>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2 className='title_skill'>{card.name}</h2>
                  <span className="material-symbols-outlined open"></span>
                </header>
                <figure className='container_logo-skill'>
                  <img src={card.imagen} alt={card.alt}/>
                </figure>
                <h3>{card.description}</h3>
                <h4>{card.footer}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined close"></span>
                </header>
                <ul className='list_url-skills'>
                  {card.proyects_relations.map((url)=>{
                    return <li className='item_url_skill' alt={url}>
                      <a target='_blank' href={`https://github.com/HeinerLandero/${url}`}>{url}</a></li>
                  })}
                </ul>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};