import React from 'react'
import { ButtonSend } from './ButtonSend'

export const FormContact = () => {
  return (
    <div className='container container_form'>
          <h2 className='title_form'>Contacto <span className='logo_letter-form'>&lt;H<span className='slash-form'>/</span>&gt;</span></h2>
          <div className='row content-contact_data'>
            <div className='data_info col-6'>
                <h3 className='title_data-form'>Pongamonos en contacto.</h3>
                <div className='container_info-contac'>
                  <p ><span className='linkedin_container'></span> heiner-landero-10b64b261</p>
                  <p ><span className='phone_container'></span>3005676633</p>
                  <p ><span className='github_container'></span>HeinerLandero</p>
                  <p ><span className='location_container'></span>Barranquilla - Colombia</p>
                </div>
            </div>
            <form className='contact_form col-6 form-vertical'>
              <div className='form-group'>
                <input className='form-control mt-4 col-lg-3' type='text' placeholder='Name' />
                <input className='form-control mt-4' type='text' placeholder='LastName' />
                <input className='form-control mt-4' type='text' placeholder='Email' />
                <textarea className='form-control mt-4' placeholder='Contact Reason' />
                <ButtonSend/>
              </div>
            </form>
          </div>
        </div>
  )
}
