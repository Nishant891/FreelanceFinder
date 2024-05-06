"use client"
import React from 'react'
import RegistrationHeader from '../components/Registration/registration.header'
import RegistrationForm from '../components/Registration/registration.form'
import { useState } from 'react'
const RegistrationPage = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  return (
    <>
        <RegistrationHeader submitSuccess={submitSuccess}/>
        <main className='h-full w-full flex justify-center items-center sm:p-0 p-2'>
            <RegistrationForm submitSuccess={submitSuccess} setSubmitSuccess={setSubmitSuccess}/>
        </main>
    </>
  )
}

export default RegistrationPage
