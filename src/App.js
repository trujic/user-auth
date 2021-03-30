import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './components/redux/user/userSlice'
import { auth } from './firebase'
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 Redirect
} from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
import Homepage from './components/homepage/Homepage'
import { selectUser, selectUsername, selectRedirectToHome} from './components/redux/user/userSlice'


function App(){
  const dispatch = useDispatch();
  const redirect = useSelector(selectRedirectToHome)
  const user = useSelector(selectUser);
  const username = useSelector(selectUsername)

  useEffect(() => {
    const asd = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
    return asd
  }, [])

  return (
    <div className="app">
      <Router>
      {!user ? <Register /> : (
        <Route exact path="/">
          <Login />
        </Route>
      )}
      {redirect ? (<Redirect push to="/homepage" />) : null}
        <Route exact path="/homepage">
          <Homepage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
