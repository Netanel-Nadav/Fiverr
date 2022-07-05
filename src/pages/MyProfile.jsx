import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MyOrders } from '../components/MyOrders'
import { UserInfo } from '../components/UserInfo'
import { update } from '../store/actions/user.action'

export const MyProfile = () => {

    const { user } = useSelector(state => state.userModule)
    const dispatch = useDispatch()


    const onChangeImg = (updatedUser) => {
        dispatch(update(updatedUser))
    }
    
    return (
        <section className='user-profile main-container'>
            <div className="user-container flex">
                <section className="user-info flex column">
                    <UserInfo user={user} onChangeImg={onChangeImg} />
                </section>
                <section className="user-gigs">
                    <MyOrders orders={user.orders}/>
                </section>
            </div>
        </section>
    )
}
