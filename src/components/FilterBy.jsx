import React, { useEffect, useState } from 'react'
import { FilterByDays } from './FilterByDays';
import { FilterByPrice } from './FilterByPrice';

export const FilterBy = (props) => {

    const [isBudgetOpen, setIsBudgetOpen] = useState(false)
    const [isDellveryOpen, setDellveryOpen] = useState(false)

    const [filterBy, setFilterBy] = useState({
        minPrice: '',
        maxPrice: '',
        daysToMake: '',
    })


    const onSetIsBudgetOn = () => {
        setDellveryOpen(false)
        setIsBudgetOpen(!isBudgetOpen)
    }
    
    const onSetIsDellveryOn = () => {
        setIsBudgetOpen(false)
        setDellveryOpen(!isDellveryOpen)
    }


    const onSetFilterBy = (min = null, max = null, days = null) => {
        if(!min) setFilterBy(prevFiterBy => ({ ...prevFiterBy, minPrice: '' }))
        else if (min) setFilterBy(prevFiterBy => ({ ...prevFiterBy, minPrice: min }))
        if (!max) setFilterBy(prevFiterBy => ({ ...prevFiterBy, maxPrice: '' }))
        else if (max) setFilterBy(prevFiterBy => ({ ...prevFiterBy, maxPrice: max }))
        if (!days) setFilterBy(prevFiterBy => ({ ...prevFiterBy, daysToMake: '' }))
        if (days) setFilterBy(prevFiterBy => ({ ...prevFiterBy, daysToMake: days }))
    }

    useEffect(() => {
        props.setFilterBy(filterBy)
    }, [filterBy])

    
    return (
        <section className='filter-by flex'>

            <button onClick={onSetIsBudgetOn}>Budget</button>
            {isBudgetOpen && <FilterByPrice onSetFilterBy={onSetFilterBy} />}
            <button onClick={onSetIsDellveryOn}>Dellvery Time</button>
            {isDellveryOpen && <FilterByDays onSetFilterBy={onSetFilterBy} />}
        </section>
    )
}
