import {Component} from 'react'

import Meassge from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container">
        <div className="card">
          <Meassge isLogin={isLogin} />
          {isLogin ? (
            <Logout onLogoutBtn={this.onClickButton} />
          ) : (
            <Login onLoginBtn={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
