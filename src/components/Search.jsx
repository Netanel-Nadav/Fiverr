import React from 'react'
import { useState } from 'react/cjs/react.development'

export const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')
  return (
    <form className='search-form'>
        <input type="text" placeholder='Try "building mobile app"' value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)} />
        <button>Search</button>
    </form>
  )
}
