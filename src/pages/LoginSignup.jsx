import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, signup, update } from '../store/actions/user.action'




export const LoginSignup = (props) => {


  const { user } = useSelector(state => state.userModule)
  const [isSignup, setIsSignup] = useState(false)
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnText, setBtnText] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (ev) => {
    ev.preventDefault();
    const credentials = { fullname, email, password };
    if (user) {
      const updatedUser = {...user, 
        fullname: credentials.fullname,
        email: credentials.email,
        password: credentials.password
      }
      dispatch(update(updatedUser))
    }
    if (!isSignup) dispatch(login(credentials))
    else dispatch(signup(credentials))
    navigate('/')
  }

useEffect(() => {
  if (user) {
    setIsSignup(true)
    setFullname(user.fullname)
    setEmail(user.email)
  }
}, [])

useEffect(() => {
  btnTxt()
}, [isSignup])


const btnTxt = () => {
  if (user) setBtnText('Update Profile')
  if (!user && isSignup) setBtnText('Signup Now!')
  if (!user && !isSignup) setBtnText('Login')
}

  return (
    <section className='login-page'>
      <form onSubmit={handleSubmit} className="flex column">

        {isSignup && <label className='flex column'>
          <span>Fullname:</span>
          <input type="text" value={fullname} placeholder='Netanel nadav' onChange={(ev) => setFullname(ev.target.value)} />
        </label>}

        <label className='flex column'>
          <span>Email:</span>
          <input type="email" value={email} placeholder='example@example.com' onChange={(ev) => setEmail(ev.target.value)} />
        </label>

        <label className='flex column'>
          <span>Password:</span>
          <input type="password" value={password} placeholder='Enter your password' onChange={(ev) => setPassword(ev.target.value)} />
        </label>


        <button>{btnText}</button>
        {/* {isSignup && <button>Signup</button>} */}

        {!user && <p onClick={() => setIsSignup(!isSignup)}>Not a user? Signup now!</p>}

      </form>
    </section>
  )

}
