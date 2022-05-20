import React from 'react'
import './InputComp.css'

function InputComp(){
    return(
        <label class="container"> I read and agree to the terms and conditions
            <input type="checkbox" checked="checked"></input>
            <span class="checkmark"></span>
           
        </label>

    )
}

export default InputComp