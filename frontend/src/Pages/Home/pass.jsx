import React from 'react'
import style from "./Home.module.css"
export const Pass = () => {
  return (
    <> 
    <div className={style.pass}>
         
         <div>
             <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png" alt="" />
             <p>Unlimited acess to group classes. all gyms and at-home workout</p>
         </div>
         <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png" alt="" />
            <p>Unlimited acess to all PRo gyms and at-home workout</p>
         </div>
         <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg" alt="" />
            <p>Unlimited acess to at-home workout with calorie tracking</p>
         </div>
       

    </div>
    </>
  )
}
