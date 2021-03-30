import { useEffect, useState, useRef } from 'react'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getusername } from '../redux/user/userSlice'

const Register = () => {
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null)

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(getusername(username.current.value))
    auth.createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    ).then((authUser) => {
    }).catch(error => {
      alert(error.message)
    })
  }

  return(
    <div>
      <form>
        <h1>Register</h1>
        <form>
          <input ref={username} type="text" name="username" placeholder="Username" required/>
          <input ref={email} type="email" name="email" placeholder="Email" required/>
          <input ref={password} type="password" name="password" placeholder="Password" required/>
          <button onClick={handleLogin} type="submit">Register</button>
        </form>
      </form>
    </div>
  )
}

export default Register
