import React from 'react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'

export const HomePage = () => {

  return (
    <section className='home-page full'>
      <Hero />
      <Services />
    </section>
  )
}
