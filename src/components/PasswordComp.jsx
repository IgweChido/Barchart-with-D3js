import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isMatching, isNmatching } from './reducers/Password';
import './Login.scss'

function PasswordComp() {

    const {passwords} = useSelector((state)=>state.password)
    const dispatch = useDispatch()



    const [pass1, setPass1] = useState();
    const [pass2, setPass2] = useState();
    const [isEqual, setIsEqual]= useState(false);
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
    
    if(pass1===pass2 && show){
        dispatch(isMatching())
    }else{
        dispatch(isNmatching())
    }

    console.log('password:' +passwords)

    

    
   
    
  return (
    <div>
       
                <div className='inputmain'>
                    <label>Your password</label>
                    <input type='password' onBlur={confirmPass}></input>
                </div>

                <div className='inputmain'>
                    <label>Confirm your password</label>
                    <input type='password' onChange={confirmPass2}></input>
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