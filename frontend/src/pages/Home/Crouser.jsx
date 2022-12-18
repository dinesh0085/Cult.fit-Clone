 import React from 'react'
 import Carousel from 'react-bootstrap/Carousel'
import { C1, C2, C3 } from './croBag'
 import style from "./Home2.module.css"
 import styles from "./c.module.css"
 export const Crouser = () => {

   


   return (
     <div className={style.crouserBag}>
               
      <div className={styles.cleft}>
               
       <div className={styles.ddt}>
       <h1>Wellness Hub</h1>
          <h3>
            One place for all your well-being needs
          </h3>
       </div>

          <div className={styles.switch}>
          <h2>WORKOUT GEAR</h2>
          <h2>LABS</h2>
          <h2>THARAPY</h2>
          </div>

      </div>

        <div className={styles.cright}>
        <Carousel slide={false}>
      <Carousel.Item>
          <C1/>
        
     
      </Carousel.Item>
      <Carousel.Item>
       <C2/>
 
      </Carousel.Item>
      <Carousel.Item>
       <C3/>
      </Carousel.Item>
    </Carousel>
        </div>
     </div>
   )
 }
 