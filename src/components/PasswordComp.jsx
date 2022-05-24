import React, { useState } from 'react'
import './Login.scss'

function PasswordComp() {
    const [pass1, setPass1] = useState();
    const [pass2, setPass2] = useState();
    const [show, setShow] = useState(false);

   

    const confirmPass=(e)=>{
        setPass1(e.target.value)
        if(e.target.value ===''){
            setShow(false)
           
        }else{
            setShow(true)
           
        }
        
        
    }

    const confirmPass2=(e)=>{
        setPass2(e.target.value)
        
    }

    // if(pass1===pass2){
    //     console.log('correct')
    // }
    // else{
    //     console.log('wrong')
    // }

    
  return (
    <div>
       
                <div className='inputmain'>
                    <label>Your password</label>
                    <input type='password' onBlur={confirmPass}></input>
                </div>

                <div className='inputmain'>
                    <label>Confirm your password</label>
                    <input type='password' onBlur={confirmPass2}></input>
                </div>

                {show &&
                    <div>
                        {pass1===pass2 ?
                            <div className='passmatch'>
                                
                                <p>Password Match correct</p>
                            </div>

                            :<div className='passmismatch'>
                                <p>Password Mismatch</p>
                        </div>}
                        
                    </div>
                }
                
                

    </div>
  )
}

export default PasswordComp