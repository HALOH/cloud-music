import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css'
import Swiper from "swiper";
import { SliderContainer } from './style';

function  Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState (null);
  const { bannerList } = props;
  console.log(props)
  useEffect(()=>{
    if (bannerList.length && !sliderSwiper){
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {el:'.swiper-pagination'},
      });
      setSliderSwiper(newSliderSwiper);
  }
  },[bannerList.lenght,sliderSwiper])
  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {
            bannerList.map((slider,index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <div className="slider-nav">
                    <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="before"></div>
    </SliderContainer>
  )
}

export default React.memo(Slider)