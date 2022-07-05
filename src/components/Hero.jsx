import React, { useRef } from 'react'
import { Search } from './Search'
import { Popular } from './Popular'
import { useEffect, useState } from 'react/cjs/react.development'
import { gigService } from '../services/gig.service'




export const Hero = () => {

    const [imgToDisplay, setImgToDisplay] = useState(null)
    const [imgIdx, setImgIdx] = useState(0)
    let timeoutRef = useRef()

    useEffect(() => {
        getHeroImgs()
    }, [])
    

    useEffect(() => {
        changeHeroImgs()

        return () => {
            clearTimeout(timeoutRef)
        }
    }, [imgIdx])

    const changeHeroImgs = () => {
        timeoutRef = setTimeout(() => {
            const newIdx = imgIdx + 1
            if (newIdx < 4) setImgIdx(newIdx)
            else setImgIdx(0)
        }, 2000)
    }


    const getHeroImgs =  async () => {
        const imgsToDisplay = await gigService.heroImg()
        setImgToDisplay(imgsToDisplay)
    }

    

    if (!imgToDisplay) return 'Loading..'
    return (
        <section className='hero main-container full' style={{backgroundImage: `url(${imgToDisplay[imgIdx]})`}}>
            <div className="wrraper">
                <h1>Find the perfect <span>freelance</span> services for your business</h1>
                <Search />
                <Popular />
            </div>
        </section>
    )
}
