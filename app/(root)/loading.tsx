import Spinner from '@/components/Spinner'
import React from 'react'

export default function loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
   <Spinner></Spinner>
    </div>
  )
}
