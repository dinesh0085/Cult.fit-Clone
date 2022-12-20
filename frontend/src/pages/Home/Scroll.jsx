import React from "react";
import style from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
 
import { Toppage } from "./Top_page";
import { Pass } from "./pass";
import { CarePass } from "./CarePass";
import { Elements } from "./elements";
import {Crouser} from "./Crouser";
import styles from "./c.module.css"
import { TextAnimation } from "./TextAnimation";

export const Scroll = () => {
  
  AOS.init();
  return (
    <div className={style.mainbody}>
     
       <Toppage/>

      {/* ----------------------------------------------- */}
      <div className={style.needs}>
       
       
        <div className={style.pro_box}>
           <Pass/>
        </div>
         
     <div className={style.mdiv}>
         <div className={style.b}>
          <div data-aos="fade-down-left" data-aos-duration="2000">
            {" "}
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
              alt=""
            />
          </div>
          <div data-aos="fade-down-right" data-aos-duration="4000">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
              alt=""
            />
          </div>
        </div>

        <div data-aos-duration="2000" className={style.c}>
          <img
            data-aos="fade-down-left"
            data-aos-duration="1000"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
            alt=""
          />
          <img
            data-aos="fade-down-right"
            data-aos-duration="2000"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
            alt=""
          />
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" className={style.d}>
          {" "}
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
            alt=""
          />
        </div>

        

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className={style.f1}
        >
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className={style.f2}
        >
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
              alt=""
            />
          </div>
        </div>


        <div className={styles.tanimation}>
          <TextAnimation/>
        </div>
         </div>

 
         <CarePass/>

         <Elements/>  
          
          <div className={styles.crouser}>
            <Crouser/>
          </div>
      </div>
    </div>
  );
};
