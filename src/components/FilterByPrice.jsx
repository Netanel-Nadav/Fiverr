import React, { useEffect, useState } from 'react'

export const FilterByPrice = ({ onSetFilterBy }) => {

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')


    const handleSubmit = (ev) => {
        if (ev.target.name === 'minPrice') setMinPrice((prevMin) => prevMin = ev.target.value)
        else setMaxPrice((prevMax) => prevMax = ev.target.value)
    }
    
    
    useEffect(() => {
        onSetFilterBy(minPrice, maxPrice)
    }, [minPrice, maxPrice])


    return (
        <section className='filter-by-price'>
            <form className='flex'>
                <label className='flex column'>
                    <span>Min Price</span>
                    <input type="number" value={minPrice} name="minPrice" onChange={handleSubmit} placeholder="Any" />
                </label>

                <label className='flex column'>
                    <span>Max Price</span>
                    <input type="number" value={maxPrice} name="maxPrice" onChange={handleSubmit} placeholder="Any" />
                </label>
                {/* <button>Apply</button> */}
            </form>
        </section>
    )
}
