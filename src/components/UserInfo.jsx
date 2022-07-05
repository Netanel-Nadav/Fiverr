import React from 'react'
import { Link } from 'react-router-dom'

export const UserInfo = ({user, onChangeImg}) => {



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
                user.imgUrl = imgUrl
                onChangeImg(user)
            })
            .catch(err => console.error(err))
    }


    const {imgUrl, fullname} = user
  return (
    <div className="user-card flex column">
        <div className="img-container" style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : `url(https://res.cloudinary.com/dvxuxsyoe/image/upload/v1647427172/uend46pwcpsvpzmkddvy.jpg)` }}>
            <input type="file" onChange={uploadImg}/>
            {/* <img src={imgUrl} alt="" /> */}
        </div>
        <p>{fullname}</p>
        <Link to={'/Login'}><span><i className="fas fa-pencil-alt"></i></span></Link>
        <button>Preview Fiverr Proffile</button>
        <hr />
        <div className="location flex space-between">
            <span>
            <i className="fas fa-map-marker-alt"></i>
                from:
            </span>
            <span>Israel</span>
        </div>
        <div className="joined flex space-between">
            <span>
            <i className="fas fa-user"></i>
                joined:
            </span>
            <span>Long time ago</span>
        </div>
    </div>
  )
}
