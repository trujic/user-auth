import { useEffect, useState, useRef } from 'react'
import { auth } from '../../firebase'
import { Redirect } from 'react-router-dom'
import { redirect } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      email.current.value,
      password.current.value
    ).then((authUser) => {
      dispatch(redirect())
    }).catch(error => {
      alert(error.message)
    })
  }

  return(
    <div>
      <form>
        <h1>Log in</h1>
        <form>
          <input ref={email} type="email" name="email" placeholder="Email" required/>
          <input ref={password} type="password" name="password" placeholder="Password" required/>
          <button onClick={handleLogin} type="submit">Register</button>
        </form>
      </form>
    </div>
  )
}

export default Login
