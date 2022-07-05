import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryPreview = ({ category }) => {
    const { desc, imgUrl } = category
    return (
        <Link to='/logo-design'>
            <div className='category-preview card' style={{ backgroundImage: `url(${imgUrl})` }}>
                <h3>{desc}</h3>
            </div>
        </Link>
    )
}
