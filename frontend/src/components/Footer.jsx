import React from "react";
import style from "./Footer.module.css";
import { Nimg } from "./nimg";
export const Footer = () => {
  return (
    <>
    
    <div className={style.footerbox}>
      <div className={style.footer}>
        <div className={style.fgg}>
          <Nimg />
          <p className={style.pp}>
            At care&fit, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, Medical & lifestyle care
            hassle-free.#BeBetterEveryDay
          </p>
        </div>
        <div className={style.fmiddle}>
          <div>
            <p>care&fit for business</p>
            <p>are&fit franchise</p>
            <p>corporate partnerships</p>
            <p>cult pass network</p>
            <p>t&c for business</p>
          </div>
          <div>
            <p>partner.fit</p>
            <p>blogs</p>
            <p>security</p>
            <p>careers</p>
          </div>
          <div>
            <p>contact us</p>
            <p>privacy policy</p>
            <p>cult bmi calculator</p>
            <p>terms & conditions</p>
          </div>
        </div>
        <div className={style.fimg}>
           <div>
           <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
            alt=""
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
            alt=""
          />
           </div>

          <div className={style.flink}>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg" alt="" />
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg" alt="" />
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg" alt="" />
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg" alt="" />
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg" alt="" />
          </div>
        </div>
      </div>

      
    </div>
    <div className={style.bb}></div>
    </>
  );
};
