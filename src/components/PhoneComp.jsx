import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isCorrect } from './reducers/Phone';

function PhoneComp() {

    const {phones} = useSelector((state)=>state.phone)
    const dispatch = useDispatch()

    const [phone, setPhone] = useState();
    const [show, setShow] = useState(false);

    const CheckPhone=(e)=>{

        var regex = /^[\d,\s,+,-]{5,20}$/;


        setPhone(regex.test(e.target.value))
        setShow(true)
 
       
    }

    if(phone){
        dispatch(isCorrect())
       
   }

   console.log('phone:' +phones)
  return (
         <div>
             <div className='inputmain'>
                <label>Your phone number</label>
                <input type='text' onChange={CheckPhone}></input>
                
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