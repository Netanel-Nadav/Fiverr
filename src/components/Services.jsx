import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { gigService } from '../services/gig.service'
import { CategorieList } from './CategorieList'


export const Services = () => {

  const [categories, setCategories] = useState(null)
  const [pageIdx, setPageIdx] = useState(0)

  useEffect(() => {
    const categories = loadCategories()
    setCategories(categories)
    return () => {
    }
  }, [pageIdx])

  const loadCategories = () => {
    return gigService.getCategories(pageIdx)
  }

  const switchCategories = (val) => {
    if(pageIdx + val > 1) setPageIdx(0)
    else if (pageIdx + val < 0) setPageIdx(1)
    else setPageIdx(pageIdx + val)
  }


  return (
    <section className='servcies main-container'>
      <h1>Popular professional services</h1>
      <button className='switch-categories minus' onClick={() => switchCategories(-1)}><i className="fas fa-angle-left"></i></button>
      {categories && <CategorieList categories={categories} />}
      <button className='switch-categories plus' onClick={() => switchCategories(1)}><i className="fas fa-angle-right"></i></button>
    </section>
  )
}
