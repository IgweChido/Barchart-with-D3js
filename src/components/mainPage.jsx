import React from 'react'
import LoginComp from './LoginComp'
import PictureComp from './PictureComp'
import '../App.scss'

function MainPage() {
  return (
    <div className='mainpage'>

        {/* picture div */}
        <PictureComp/>

        {/* login div */}
        <LoginComp/>
        
    </div>
  )
}

export default MainPage