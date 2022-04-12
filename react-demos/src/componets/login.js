import React from 'react';

import "./login.css";
export default function  login(){
    const database=[{
username: "jai",
pasword:"jai"
    }
];

const formToBeRendered=(
   <div className='form'>
       <div className='input-container'>
           <lable>UserName </lable>
           <input type='text' name='uname' required></input>
       </div>
       <div className='input-container'>
           <lable>Password </lable>
           <input type='text' name='pass' required></input>
       </div>
       <div className='button-container'>
           <input type='submit'></input>
       </div>
   </div>


);

return (
<div className='app'>
    <div className='login-form'>
        <div className='title'>Sign In</div>
        {formToBeRendered}
    </div>
</div>
);
    
}
