import { AppleIcon, PlaySquare } from 'lucide-react'
import React from 'react'

export default function Download() {
  return (
    <div >
        <p>Download App:</p>
        <div className='flex gap-3'>
<div className='flex bg-black text-white rounded-lg px-3 gap-2 '>
            <AppleIcon className='my-auto'></AppleIcon>
            <div>
                <p className='text-sm'>Download on the</p>
                <h2 className='text-xl font-medium'>App Store</h2>
            </div>
        </div>

        <div className='flex bg-black text-white rounded-lg px-1 gap-2 '>
            <PlaySquare className='my-auto'></PlaySquare>
            <div>
                <p className='text-sm'>Get it on</p>
                <h2 className='text-xl font-medium'>Google Play</h2>
            </div>
        </div>
        </div>
        
    </div>
  )
}
