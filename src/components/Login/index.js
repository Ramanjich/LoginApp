// Write your code here
import './index.css'

const Login = props => {
  const {onLoginBtn} = props

  return (
    <button type="button" className="button" onClick={onLoginBtn}>
      Login
    </button>
  )
}

export default Login
