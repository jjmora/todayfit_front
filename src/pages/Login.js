import React from 'react'
import EmailForm from '../components/form/EmailForm'

const Login = () => {
  return (
    <section className='container mt-5 d-flex justify-content-center'>
      <EmailForm 
        title="Sign in"
      />
    </section>
  )
}

export default Login