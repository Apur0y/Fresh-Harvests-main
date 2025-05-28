import React from 'react'

export default function Products() {

    const products=[
        {
            name:"Mushroom",
            weight:"$2.3/kg",
            image:"/"

        }
    ]

  return (
    <div>

        <div className='flex justify-center items-center flex-col mt-44'>
        <p className='intro'>Our Products</p>
        <h1 className='heading'>Our Fresh Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas consequuntur ratione blanditiis sunt inventore rerum saepe soluta quos quae.</p>

        </div>
        
    </div>
  )
}
