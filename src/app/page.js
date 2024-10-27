import React from 'react'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Card from '@/app/components/Card'
import EmployeeTable from './components/EmployeeTable'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />

      <h1 className='text-4xl font-bold text-center py-6 shadow-lg  text-black rounded-lg'>
        Best Performers This Week
      </h1>
      <Card />

      <h1 className='text-4xl font-bold text-center py-6 shadow-lg 0 text-black rounded-lg'>
        Visit our Desks
      </h1>

      <EmployeeTable />

      <Footer/>
    </div>
  )
}

export default Page
