/**
 * Created by out_xu on 17/7/13.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'images/logo.svg'
import './index.less'

const LayoutContent = (props) => {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>问卷星</h2>
      </div>

      <header className='App-nav'>
        <Link to='/home'> home </Link>
        <Link to='/async'> async </Link>
        <Link to='/404'> 404 </Link>
        <Link to='/motion'> motion </Link>
        <Link to='/test'> test </Link>
        <Link to='/create'> create </Link>

        <div className="user"> </div>
      </header>
      <div className='App-content'>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutContent
