import React, { useState } from 'react'

function PhoneComp() {

    const [phone, setPhone] = useState();
    const [show, setShow] = useState(false);

    const CheckPhone=(e)=>{

        var regex = /^[\d,\s,+,-]{5,20}$/;


        setPhone(regex.test(e.target.value))
        setShow(true)
       
    }
  return (
         <div>
             <div className='inputmain'>
                <label>Your phone number</label>
                <input type='text' onBlur={CheckPhone}></input>
            </div>

            {show && 
             <div>
                 {phone ?
                    <div>        
                    
                    </div>: 
                    <div className='passmismatch'>        
                            <p>Write a valid phone number</p>
                    </div>}

            </div>
            }
           
           
         </div>   
        
  )
}

export default PhoneComp