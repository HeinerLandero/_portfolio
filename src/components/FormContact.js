import React from 'react'

export const FormContact = () => {
  return (
    <div className='container_form'>
          <h2 className='title_form'>Contactame</h2>
          <form className='contact_form col-12 form-vertical'>
            <div className='form-group'>
              <input className='form-control mt-4 col-lg-3' type='text' placeholder='Name' />
              <input className='form-control mt-4' type='text' placeholder='LastName' />
              <input className='form-control mt-4' type='text' placeholder='Email' />
              <textarea className='form-control mt-4' placeholder='Contact Reason' />
              <input className='btn btn-primary mb-2 mt-4' type='submit' value='SEND' />
            </div>
          </form>
        </div>
  )
}
