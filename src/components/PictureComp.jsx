import React from 'react'
import '../App.scss'
import pic from '../images/barchart1.png'

function PictureComp(){
    return(
        <div className='picturediv'>

            {/* image */}
            <div className='pic'>
                <img src={pic} alt=''></img>
            </div>

            <div className='picwords'>
                <p className='phead'>Choose a data range</p>
                <p className='pw'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mauris imperdiet bibendum.</p>
            </div>

        </div>
    )
}

export default PictureComp