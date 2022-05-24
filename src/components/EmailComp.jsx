import React, { useState } from 'react'
import './Login.scss'

function EmailComp() {

    const [email, setEmail]= useState();
    const [show, setShow] = useState(false);

    const CheckEmail=(e)=>{

        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        setEmail(regex.test(e.target.value))
        setShow(true);
       
    }
  return (
      <div>
          <div className='inputmain'>
            <label>Your email address</label>
            <input type='email' onBlur={CheckEmail}></input>
        </div>

        {show && <div>
                    {email ?
                            <div>        
                            
                            </div>: 
                            <div className='passmismatch'>        
                                <p>Write a valid email</p>
                            </div>
                        }
                </div>}

        
      </div>
    
  )
}

export default EmailComp