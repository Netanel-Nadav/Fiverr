import React from 'react'
import { useState } from 'react/cjs/react.development'
import { CategoryPreview } from './CategoryPreview'

export const CategorieList = ({ categories }) => {

  return (
    <section className='category-list grid-card'>
      {categories.map((category, idx) => <CategoryPreview key={idx} category={category} />)}
    </section>
  )
}
