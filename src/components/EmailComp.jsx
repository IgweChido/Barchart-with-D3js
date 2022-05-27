import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isOk , isNok} from './reducers/Email';
import './Login.scss'

function EmailComp() {

    const {emails} = useSelector((state)=>state.email)
    const dispatch = useDispatch()

    const [email, setEmail]= useState();
    const [show, setShow] = useState(false);
    const [em, setEm] = useState('')

    const CheckEmail=(e)=>{

        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        setEmail(regex.test(e.target.value))
        setShow(true);

        
        

        
       
    }
     
    if(email){
        dispatch(isOk())
    }else{
        dispatch(isNok())
    }
    console.log('email:' + emails)

   
  return (
      <div>
          <div className='inputmain'>
            <label>Your email address{emails}</label>
            <input type='email' onBlur={CheckEmail} ></input>
            
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