// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const text = isLogin ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{text}</h1>
}

export default Message
