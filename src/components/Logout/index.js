// Write your code here
import './index.css'

const Logout = props => {
  const {onLogoutBtn} = props

  return (
    <button type="button" className="button" onClick={onLogoutBtn}>
      Logout
    </button>
  )
}

export default Logout
