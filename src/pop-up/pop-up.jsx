import React from 'react';
import './pop-up.css';

export function PopUp() {
 return (
     <div className="pop-up">
         <h2 className="pop-up__title">Please enter your information</h2>
         <form action="">
             <label> Enter e-mail
                 <input type="email" className="pop-up__login" placeholder="Email"/>
             </label>

             <label> Enter password
                 <input type="password" className="pop-up__password" placeholder="Password"/>
             </label>
             <input type="submit" className="pop-up__button close" value="ENTER"/>
         </form>
     </div>)
}