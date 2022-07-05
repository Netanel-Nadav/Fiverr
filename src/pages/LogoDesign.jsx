// Setup
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { useSelector, useDispatch } from 'react-redux'

// Components
import { GigsList } from '../components/GigsList'
import { FilterBy } from '../components/FilterBy'

// Actions
import { loadGigs } from '../store/actions/gig.action'


export const LogoDesign = (props) => {

    const [filterBy, setFilterBy] = useState(null)
    const { gigs } = useSelector(state => state.gigModule);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadGigs(filterBy))
    }, [filterBy])

    return (
        <section className='logo-design main-container'>
            <h1>All Categories</h1>
            <FilterBy setFilterBy={setFilterBy} />
            {gigs && <GigsList gigs={gigs} />}
        </section>
    )
}
