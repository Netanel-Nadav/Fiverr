import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig.service'
import { addGig } from '../store/actions/gig.action'

export const BecomeASeller = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState([])
    const [daysToMake, setDaysToMake] = useState(0)
    const [title, setTitle] = useState('')
    const [checkboxLabels, setCheckboxLabels] = useState({
        logoDesign: false,
        wordpress: false,
        voiceOver: false,
        seo: false,
        social: false,
        illustration: false
    })

    const { user } = useSelector(state => state.userModule)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const uploadImg = (ev) => {
        const CLOUD_NAME = 'dvxuxsyoe'
        const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        const formData = new FormData();
        formData.append('file', ev.target.files[0])
        formData.append('upload_preset', 'mx6fvrvl');

        return fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                const imgUrl = res.url
                setImgUrl(prevImgUrl => [...prevImgUrl, imgUrl])
            })
            .catch(err => console.error(err))
    }

    const handleCheckbox = (ev) => {
        const field = ev.target.value
        const checked = ev.target.checked
        setCheckboxLabels(prevState => ({...prevState,  [field]: checked}))
        console.log(checkboxLabels);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!user) return
        const newGig = {
            description,
            price: +price,
            imgUrl,
            daysToMake: +daysToMake,
            title,
            owner: user,
            tags: checkboxLabels
        }
        dispatch(addGig(newGig))
        navigate('/')
    }

    return (
        <section className='become-a-seller'>
            <form onSubmit={handleSubmit} className="flex column">

                <label className='flex column'>
                    <span>Enter Title:</span>
                    <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)} />
                </label>

                <label className='flex column'>
                    <span>Enter Description:</span>
                    <input type="text" value={description} onChange={(ev) => setDescription(ev.target.value)} />
                </label>

                <label className='flex column'>
                    <span>Enter Price:</span>
                    <input type="number" value={price} onChange={(ev) => setPrice(ev.target.value)} />
                </label>

                <label className='flex column'>
                    <span>Enter days for delivery:</span>
                    <input type="number" value={daysToMake} onChange={(ev) => setDaysToMake(ev.target.value)} />
                </label>

                <div className="wrraper flex wrap">
                    
                    <label className='flex'>
                        <input type="checkbox" value="logoDesign" onChange={handleCheckbox} name="labels" checked={checkboxLabels.logoDesign} />
                        <span>Logo Design</span>
                    </label>

                    <label className='flex'>
                        <input type="checkbox" value="wordpress" onChange={handleCheckbox} name="labels" checked={checkboxLabels.wordpress} />
                        <span>Wordpress</span>
                    </label>

                    <label className='flex'>
                        <input type="checkbox" value="voiceOver" onChange={handleCheckbox} name="labels" checked={checkboxLabels.voiceOver} />
                        <span>Voice Over</span>
                    </label>

                    <label className='flex'>
                        <input type="checkbox" value="seo" onChange={handleCheckbox} name="labels" checked={checkboxLabels.seo}/>
                        <span>SEO</span>
                    </label>

                    <label className='flex'>
                        <input type="checkbox" value="social" onChange={handleCheckbox} name="labels" checked={checkboxLabels.social}/>
                        <span>Social Media</span>
                    </label>

                    <label className='flex'>
                        <input type="checkbox" value="illustration" onChange={handleCheckbox} name="labels" checked={checkboxLabels.illustration}/>
                        <span>Illustration</span>
                    </label>

    
                </div>

                <label className='flex column upload'>
                    <i className="fas fa-upload pointer"></i>
                    <input type="file" onChange={uploadImg} />
                </label>

                <button>Send</button>

                <div className="imgs-wrraper flex">
                    {imgUrl && imgUrl.map(img => (
                        <div className="img-container square-ratio" key={img}>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>

            </form>
        </section>
    )
}
