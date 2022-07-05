import React, { useEffect, useState } from 'react'

export const FilterByDays = ({ onSetFilterBy }) => {


  const [dellveryTime, setDellveryTime] = useState('')

  const handleChange = (ev) => {
    setDellveryTime(ev.target.value)
  }


  useEffect(() => {
    onSetFilterBy(null, null, dellveryTime)
  }, [dellveryTime])

  return (
    <section className='dellvery-time flex column'>
      {/* <input type="number" placeholder='Any' value={dellveryTime} onChange={handleChange}/> */}

      <label className='flex'>
        <input type="radio" value='1' name="days" onChange={handleChange} />
        <span>Express 24H</span>
      </label>

      <label className='flex'>
        <input type="radio" value='3' name="days" onChange={handleChange} />
        <span>Up to 3 Dyas</span>
      </label>

      <label className='flex'>
        <input type="radio" value='7' name="days" onChange={handleChange} />
        <span>Up to 7 Dyas</span>
      </label>

      <label className='flex'>
      <input type="radio" value={''} name="days" onChange={handleChange} />
      <span>Anytime</span>
    </label>
    </section >

  )
}
