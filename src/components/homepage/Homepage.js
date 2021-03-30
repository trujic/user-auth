import { useSelector } from 'react-redux'
import { selectUsername } from '../redux/user/userSlice'

const Homepage = () => {
  const username = useSelector(state => state.user.username)

  return(
    <div>
      <h1>Hello {username}</h1>
    </div>
  )
}

export default Homepage
