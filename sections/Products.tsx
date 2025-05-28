import React, { useState } from 'react'


  type Product =  {
        name:string,
        weight:string,
        image:string,
        category: 'fruit' | 'vegetable' | 'salad'
    }

export default function Products() {


  
    const products=[
        {
            name:"Mushroom",
            weight:"$2.3/kg",
            image:"/"

        }
    ]

    const [isActive, setIsActive]=useState<string> ('all');
    const [products, setProducts]=useState<Product[]>([]);
    const 

    

  return (
    <div>

        <div className='header-align'>
        <p className='intro'>Our Products</p>
        <h1 className='heading'>Our Fresh Products</h1>
        <p className='para'>We Pride ourselves on offering a wide variety of fresh and flavourful fruits, <br /> vegetables, and salad ingredients</p>
        </div>

        <div>
            <button>All</button>
            <button>Fruits</button>
            <button>Vegetables</button>
            <button>Salad</button>

        </div>
        
    </div>
  )
}
