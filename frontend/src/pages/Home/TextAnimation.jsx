import React from 'react'
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, Animator } from "react-scroll-motion";
import styles from "./c.module.css"

export const TextAnimation = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn( ));
    const FadeUp = batch(Fade(10,-60), Move(), StickyIn( ))
  
    return (
    <div div className={styles.telement}>
    <ScrollContainer>
        <ScrollPage>
            <Animator>

            </Animator>
        </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0,-50))}>
      <span style={{ fontSize: "30px" }}></span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>Fun, trainer led group classes</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>One membership for all your fitness needs </span>
    </Animator>
  </ScrollPage>
  
 
</ScrollContainer>
    
    </div>
  )
}
