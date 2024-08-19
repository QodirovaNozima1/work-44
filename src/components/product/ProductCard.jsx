import React, { memo } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LiaCartPlusSolid } from "react-icons/lia";
import { PiSpinnerBold } from "react-icons/pi";
import axios from '../../api/Index';
import Product from './Product';

const ProductCard = ({products}) => {
    const [product, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const limit = 4


    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    const [offset, setOffset] = useState(0)
    const handClick = () => {
        setOffset(offset + 1)
    }
    const productItem = products?.map((product) => (
      <div key={product.id} className='w-72 p-3 api flex flex-col gap-4 items-center justify-center rounded-lg  relative overflow-hidden'>
          <Link to = {`/product/${product.id}`}>
          <img src={product.images[0]} alt="" className='w-full h-52 object-contain hover:scale-105 ' />
          </Link>
          <div className='flex flex-col gap-2 '>
              <h3 className='text-center text-xl font-semibold'>{product.brand}</h3>
              <p className='text-red-500 text-sm font-medium ml-2'>12%</p>
              <p className='desck'>{product.description}</p>
              <p className='text-lg font-semibold ml-2 mb-6'>${product.price}</p>
          </div>
          <button className=' button w-12 border rounded-full bg-emerald-300 p-1 text-xs text-slate-100'>New</button>
          <button className='btr w-9 h-9 rounded-full border-none bg-yellow-400 '><LiaCartPlusSolid className='text-slate-100 text-2xl m-auto' /></button>
          <div className='ofset flex'>
              <button disabled={offset <= 0}  onClick={()=> setOffset(p=>p-1)} className='border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md'>-</button>
              <button className='w-10'>{offset}</button>
              <button onClick={handClick} className='border w-6 h-6  flex items-center justify-center text-slate-400 rounded-md'>+</button>
          </div>
      </div>
  ))

  return (
    <>
  <div className='flex gap-3 flex-wrap items-center justify-center sm:grid-cols-2 md:grid-cols-3'>
      {productItem}
  </div>
    </>
  )
}

export default memo (ProductCard)