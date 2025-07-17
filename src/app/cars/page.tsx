'use client'

import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Car } from '../../../types'
import CarsTable from '@/component/cars/CarsTable'

function Cars() {
const [cars, setCars] = useState<Car[]>([])
const [page, setPage] = useState<[]>([])
const [limit, setLimit] = useState<[]>([])

const getCars = async () => {
  try {
    const data = await fetch('http://localhost:3003/cars?page=1&limit=10')
    const response: Car[] = await data.json()
    setCars(response)

    console.log("Success getting data")
  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
  getCars()
}, [])

  return (
    <div className='container'>
      <h1 className='ml-4 text-2xl font-bold'>Data Mobil :</h1>

      <CarsTable cars={cars} />
    </div>
  )
}

export default Cars