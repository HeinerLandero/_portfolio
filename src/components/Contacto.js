import React from 'react'

export const Contacto = () => {
  return (
    <div className='container_main container flex-column d-flex align-items-center'>
      <h1 className='mt-4 text-center'>Contacto</h1>
      <form className='contact_form col-6 form-horizontal'>
          <div className='form-group'>
            <input className='form-control mt-4 col-lg-3' type='text' placeholder='Name'/>
            <input className='form-control mt-4' type='text' placeholder='LastName'/>
            <input className='form-control mt-4' type='text' placeholder='Email'/>
            <textarea className='form-control mt-4'  placeholder='Contact Reason'/> 
            <input className='btn btn-primary mb-2 mt-4' type='submit' value='SEND'/>
          </div>
      </form>
    </div>
  )
}
